import React, { useState } from 'react';
import './Enquiry.css';
import CommonHeader from './CommonHeader';
import { useNavigate } from 'react-router-dom';

const EnquiryForm = () => {
  const navigate = useNavigate();
  function loadOurWork() {
    navigate('/ourwork');
  }

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.inquiry !== '' &&
      formData.mobile !== null &&
      formData.name !== ''
    ) {
      /*  try {
        const response = await axios.post('/sendEmail', formData); 
        console.log(response.data); 
        
      } catch (error) {
        console.error('Error sending email:', error);
        
      } */
      console.log('form submitted');
      navigate('/staytuned');
    } else {
      console.log('nothing submitted');
    }
  };

  return (
    <div>
      <div>
        <CommonHeader />
      </div>
      <form className="padding-form" onSubmit={handleSubmit}>
        <div className="padding-form">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="padding-form">
          <input
            type="number"
            name="mobile"
            placeholder="MOBILE NUMBER"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="padding-form">
          <textarea
            name="inquiry"
            placeholder="ENQUIRY FOR..."
            value={formData.inquiry}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="padding-form">
          <button type="submit">SUBMIT</button>
        </div>
        <div className="padding-form">
          <button onClick={loadOurWork}>NAVIGATE BACK</button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
