import React from 'react';

const PersonalDetails = ({ formData, setFormData, nextStep }) => {
  const { firstName,lastName, email,phone,password,confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal Details</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstname" name="firstName" className="mt-1 p-2 w-full border rounded-md" value={firstName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md" value={lastName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" value={email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" value={password} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">confirmPassword</label>
            <input type="confirmPassword" id="confirmPassword" name="confirmPassword" className="mt-1 p-2 w-full border rounded-md" value={confirmPassword} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border rounded-md" value={phone} onChange={handleChange} />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={nextStep}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
