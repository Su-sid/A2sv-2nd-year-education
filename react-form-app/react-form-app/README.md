# React Contact Form with react-hook-form

## Project Description

This project demonstrates a simple contact form built with React, TypeScript, and react-hook-form. It features form validation, state management using the useForm hook, and integration with @hookform/devtools for debugging form state.

## Features

- **React Hook Form Integration**: Uses the powerful `useForm` hook to manage form state and validation
- **Form Validation**: Implements validation for required fields and email format
- **Error Handling**: Displays appropriate error messages for invalid form inputs
- **Form State Management**: Efficiently manages form state without unnecessary re-renders
- **DevTools Integration**: Includes @hookform/devtools for easier debugging of form state
- **Responsive Design**: Form adapts to different screen sizes for better user experience
- **CSS Modules**: Uses CSS modules for component-scoped styling

## Project Structure

```
react-form-app/
├── src/
│   ├── components/
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.tsx
│   │   │   └── ContactForm.module.css
│   │   └── FormMessage/
│   │       ├── FormMessage.tsx
│   │       └── FormMessage.module.css
│   ├── interfaces/
│   │   └── FormTypes.ts
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript that adds static types
- **react-hook-form**: A performant, flexible and extensible forms with easy-to-use validation
- **@hookform/devtools**: DevTools for react-hook-form to help debugging and development
- **Vite**: A build tool that provides a faster and leaner development experience
- **CSS Modules**: CSS files in which all class names are scoped locally

## Installation and Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## How to Use

1. Fill out the form with your name, email, and message
2. Form validation will trigger on input or on submission
3. If all fields are valid, the form will submit, and you'll see an alert with the submitted data
4. After successful submission, a success message will appear
5. When in development mode, you can use the DevTools panel to inspect form state

## Form Validation Rules

- **Name**: Required
- **Email**: Required and must be a valid email format
- **Message**: Required and must be at least 10 characters long

## Learning Objectives

This project was created to demonstrate:

- Understanding and using the `useForm` hook in a React application
- Implementing form validation with react-hook-form
- Managing form state efficiently
- Using TypeScript with React components
- Integrating development tools for better debugging experience

## License

MIT
