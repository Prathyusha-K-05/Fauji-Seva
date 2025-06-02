import React, { useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // External CSS for styling

export default function AdminDashboard() {
  const [form, setForm] = useState({
    title: '', description: '',
    designation: '', branch: '',
    retiredOnly: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const createScheme = async () => {
    try {
      const serviceId = JSON.parse(localStorage.getItem('user'))?.serviceId;

await axios.post('/api/schemes/create', {
  title: form.title,
  description: form.description,
  eligibility: {
    designation: form.designation,
    branch: form.branch,
    retiredOnly: form.retiredOnly
  }
}, {
  headers: { 'service-id': serviceId }
});
      alert('Scheme created');
    } catch (err) {
      alert('Failed to create scheme');
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin - Create Scheme</h1>
      <input name="title" placeholder="Scheme Name" className="admin-input" onChange={handleChange} />
      <textarea name="description" placeholder="Description" className="admin-textarea" onChange={handleChange} />
      <input name="designation" placeholder="Eligible Designation" className="admin-input" onChange={handleChange} />
      <input name="branch" placeholder="Eligible Branch" className="admin-input" onChange={handleChange} />
      <label className="admin-checkbox-container">
        <input type="checkbox" name="retiredOnly" onChange={handleChange} />
        <span>Only for Retired?</span>
      </label>
      <button onClick={createScheme} className="admin-button">
        Create Scheme
      </button>
    </div>
  );
}
