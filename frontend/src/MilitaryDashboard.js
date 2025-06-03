import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MilitaryDashboard.css'; // External CSS

export default function MilitaryDashboard() {
  const { serviceId } = useParams();
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const res = await axios.get(`/api/schemes/eligible/${serviceId}`);
        setSchemes(res.data.eligibleSchemes);
      } catch (err) {
        alert('Failed to fetch schemes');
      }
    };
    fetchSchemes();
  }, [serviceId]);

  const apply = async (id) => {
  try {
    const serviceId = JSON.parse(localStorage.getItem('user'))?.serviceId;

    await axios.post(`/api/schemes/apply/${id}`, {}, {
      headers: { 'service-id': serviceId }
    });

    alert('Applied successfully');
  } catch {
    alert('Application failed');
  }
};


  return (
    <div className="military-dashboard-container">
      <h1 className="military-dashboard-title">Eligible Welfare Schemes</h1>
      {schemes.length === 0 ? (
        <p className="no-schemes-message">No schemes available</p>
      ) : (
        <div className="schemes-grid">
          {schemes.map(s => (
            <div key={s._id} className="scheme-card">
              <h2 className="scheme-title">{s.title}</h2>
              <p className="scheme-description">{s.description}</p>
              <button
                onClick={() => apply(s._id)}
                className="apply-button"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
