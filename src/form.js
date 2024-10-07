import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styles from './form.module.css';



function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        zip: '',
        city: '',
        state: '',
        phoneNumber: '',
        email: '',
        dateOfSurvey: '',
       
            students: false,
            location: false,
            campus: false,
            atmosphere: false,
            dormRooms: false,
            sports: false,
       
        interestSource: '',
        recommendLikelihood: 'very-likely',
        additionalComments: ''
    });
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: checked  
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value 
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8080/api/students', formData);
            console.log('Submission successful:', response.data);
            navigate('/')
          
        } catch (error) {
            console.error('Submission failed:', error);
            if (error.response) {
               
                console.log(error.response.data);
                console.log(error.response.status);
            } else if (error.request) {
               
                console.log(error.request);
            } else {
              
                console.log('Error', error.message);
            }
        }
    };
        const resetForm = () => {
            setFormData({
                firstName: '',
                lastName: '',
                streetAddress: '',
                city: '',
                state: '',
                zip: '',
                phoneNumber: '',
                email: '',
                dateOfSurvey: '',
                students: false,
                location: false,
                campus: false,
                atmosphere: false,
                dormRooms: false,
                sports: false,
                interestSource: '',
                recommendLikelihood: 'very-likely',
                additionalComments: ''
            });
    };
    
   
    

    return (
        <div className={styles.padding}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.title}>Survey Form</div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="firstName" className={styles.placeholder}>First Name:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="lastName" className={styles.placeholder}>Last Name:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="streetAddress" className={styles.placeholder}>Street Address:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="city" className={styles.placeholder}>City:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="state" className={styles.placeholder}>State:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="zip" className={styles.placeholder}>Zip:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="phoneNumber" className={styles.placeholder}>Phone Number:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="email" className={styles.placeholder}>Email:</label>
            </div>

            <div className={`${styles.inputContainer} ${styles.ic1}`}>
                <input className={styles.input} placeholder=" " type="date" id="dateOfSurvey" name="dateOfSurvey" value={formData.dateOfSurvey} onChange={handleInputChange} required />
                <div className={styles.cut}></div>
                <label htmlFor="dateOfSurvey" className={styles.placeholder}>Date of Survey:</label>
            </div>

            <label className={styles.checkbox}>Liked Most:</label>
<div className={styles.checkboxGroup}>
    <label className={styles.checkbox}>
        <input type="checkbox" name="students" checked={formData.students} onChange={handleInputChange} />
        Students
    </label>
   
    <label className={styles.checkbox}>
        <input type="checkbox" name="location" checked={formData.location} onChange={handleInputChange} />
        Location
    </label>
    <label className={styles.checkbox}>
        <input type="checkbox" name="campus" checked={formData.campus} onChange={handleInputChange} />
        Campus
    </label>
    <label className={styles.checkbox}>
        <input type="checkbox" name="atmosphere" checked={formData.atmosphere} onChange={handleInputChange} />
        Atmosphere
    </label>
    <label className={styles.checkbox}>
        <input type="checkbox" name="dormRooms" checked={formData.dormRooms} onChange={handleInputChange} />
        Dorm Rooms
    </label>
    <label className={styles.checkbox}>
        <input type="checkbox" name="sports" checked={formData.sports} onChange={handleInputChange} />
        Sports
    </label>

</div>

<label className={styles.checkbox}>How did you become interested in the university?</label>
<div className={styles.checkbox}>
    <label className={styles.checkbox}>
        <input type="radio" value="friends" name="interestSource" checked={formData.interestSource === 'friends'} onChange={handleInputChange} />
        Friends
    </label>
    <label className={styles.checkbox}>
        <input type="radio" value="television" name="interestSource" checked={formData.interestSource === 'television'} onChange={handleInputChange} />
        Television
    </label>
    <label className={styles.checkbox}>
        <input type="radio" value="internet" name="interestSource" checked={formData.interestSource === 'internet'} onChange={handleInputChange} />
        Internet
    </label>
    <label className={styles.checkbox}>
        <input type="radio" value="other" name="interestSource" checked={formData.interestSource === 'other'} onChange={handleInputChange} />
        Other
    </label>
</div>

<label htmlFor="recommendLikelihood" className={styles.select}>Likelihood of Recommending:</label>
<select id="recommendLikelihood" name="recommendLikelihood"  value={formData.recommendLikelihood} onChange={handleInputChange} required>
    <option value="very-likely">Very Likely</option>
    <option value="likely">Likely</option>
    <option value="unlikely">Unlikely</option>
</select>


<label htmlFor="additionalComments" className={styles.checkbox}>Additional Comments:</label>
<textarea id="additionalComments" className={styles.text} name="additionalComments" value={formData.additionalComments} onChange={handleInputChange}></textarea>
<div className={styles.bodylike}>
            <button type="submit" className={styles.glowOnHover}>Submit</button>
            </div>
    <div className={styles.bodylike}>
            <button type="button" className={styles.glowOnHover} onClick={resetForm}>Cancel</button>
            </div>
        </form>
    </div>
    );
}

export default Form;
