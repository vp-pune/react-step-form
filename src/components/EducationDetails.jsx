import React, { useState } from 'react';

function EducationDetails({ formData, setFormData,prevStep ,submitForm}) {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Education Details</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="educationType" className="block text-sm font-medium text-gray-700">Education Type</label>
            <select id="educationType" name="educationType" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange}>
              <option value="">Select Education Type</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="graduation">Graduation</option>
              <option value="postGraduation">PostGraduation</option>
            </select>
          </div>
          <div>
            <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700">Passing Year</label>
            <input type="text" id="passingYear" name="passingYear" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="schoolCollege" className="block text-sm font-medium text-gray-700">School/College</label>
            <input type="text" id="schoolCollege" name="schoolCollege" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="percentage" className="block text-sm font-medium text-gray-700">Percentage</label>
            <input type="text" id="percentage" name="percentage" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange} />
          </div>
          <div className="flex justify-between mt-5">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={prevStep}>Previous</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick= {submitForm}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;
