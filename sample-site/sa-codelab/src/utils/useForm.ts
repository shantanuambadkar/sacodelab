import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send form data to your backend (replace with your actual logic)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Form submitted successfully
        console.log('Form submitted successfully');
        // Set isSubmitted to true to show the success message
        setIsSubmitted(true);
        // Reset the form
        setValues(initialValues);
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;