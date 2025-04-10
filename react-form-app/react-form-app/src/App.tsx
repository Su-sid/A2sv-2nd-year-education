import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
    <div className="app">
      <header className="appHeader">
        <h1>React Hook Form - Contact Form</h1>
      </header>
      <main className="appMain">
        <ContactForm />
      </main>
      <footer className="appFooter">
        <p>&copy; {new Date().getFullYear()} React Hook Form Demo</p>
      </footer>
    </div>
    </div>
  );
};

export default App;
