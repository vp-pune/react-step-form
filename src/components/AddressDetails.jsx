import React from 'react';

const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const { city,country } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Address Details</h2>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <select id="country" name="country" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange}>
       <option selected>Select Nation</option>
       <option value="India">India</option>
        </select>
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
        <select id="state" name="state" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange}>
          <option selected>Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Kerala">Kerala</option>
          <option value="Tamilnadu">Tamilnadu</option>
          <option value="Karnataka">Karnataka</option>
        </select>
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <select id="city" name="city" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange}>
          <option selected>Select City</option>
          <option value="Pune">Pune</option>
          <option value="Kolhapur">Kolhapur</option>
          <option value="Satara">Satara</option>
        </select>
      </div>
      <div>
        <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address 1</label>
        <input type="text" id="address1" name="address1" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address 2</label>
        <input type="text" id="address2" name="address2" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="nearby" className="block text-sm font-medium text-gray-700">Nearby Location</label>
        <input type="text" id="nearby" name="nearby" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zipcode</label>
        <input type="text" id="zipcode" name="zipcode" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange} />
      </div>
      <div className="flex justify-between mt-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={prevStep}>Previous</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={nextStep}>Next</button>
      </div>
    </div>
  </div>
  );
};

export default AddressDetails;
