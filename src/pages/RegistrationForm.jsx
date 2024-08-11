import React, { useState, useEffect } from 'react';
import PersonalDetails from '../components/PersonalDetails';
import AddressDetails from '../components/AddressDetails';
import EducationDetails from '../components/EducationDetails';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  id: uuidv4(),
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  state: '',
  city: '',
  educationType: '',
  school: '',
};

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => {
    // Add step validation here if needed
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log('Form submitted:', formData);
    localStorage.removeItem('formData');

    axios.post('http://localhost:5000/submit', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Form successfully submitted:', response.data);
      // Navigate to success page or show a success message
      navigate('/');
    })
    .catch(error => {
      console.error('There was an error submitting the form:', error);
      // Show error message to the user
    });
    setFormData(initialState);
  };

  return (
    <div>
      {/* <ProgressIndicator step={step} /> */}
      {step === 1 && <PersonalDetails formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <AddressDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <EducationDetails formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm} />}
    </div>
  );
};

const ProgressIndicator = ({ step }) => (
  <div>
    <span>{step === 1 ? 'Step 1: Personal Details' : ''}</span>
    <span>{step === 2 ? 'Step 2: Address Details' : ''}</span>
    <span>{step === 3 ? 'Step 3: Education Details' : ''}</span>
  </div>
);

export default RegistrationForm;
