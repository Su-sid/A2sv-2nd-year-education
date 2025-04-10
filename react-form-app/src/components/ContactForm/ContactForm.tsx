import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { ContactFormData } from '../../interfaces/FormTypes';
import FormMessage from '../FormMessage/FormMessage';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  // Initialize form with react-hook-form
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    control 
  } = useForm<ContactFormData>();
  
  // State for form submission status
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  // Handle form submission 
  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log('Form submitted with data:', data);
    
    // Show alert with form data
    alert(`Form submitted with:\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
    
    // Update form status
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully!'
    });
    
    // Reset form after successful submission
    reset();
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2>Contact Us</h2>
      
      {formStatus.submitted && (
        <FormMessage success={formStatus.success} message={formStatus.message} />
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { 
              required: 'Name is required' 
            })}
            className={errors.name ? styles.error : ''}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={errors.email ? styles.error : ''}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { 
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message should be at least 10 characters'
              }
            })}
            className={errors.message ? styles.error : ''}
          />
          {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
        </div>
        
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
      
      {/* DevTools for development - only visible in development mode */}
      <DevTool control={control} />
    </div>
  );
};

export default ContactForm;