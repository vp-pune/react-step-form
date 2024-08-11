import React from 'react';
import { useLocation } from 'react-router-dom';

function UserDetails() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Field</th>
            <th scope="col" className="px-6 py-3">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">First Name</td>
            <td className="px-6 py-4">{user.firstName}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Last Name</td>
            <td className="px-6 py-4">{user.lastName}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Email</td>
            <td className="px-6 py-4">{user.email}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Address1</td>
            <td className="px-6 py-4">{user.address1}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Education</td>
            <td className="px-6 py-4">{user.education}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
