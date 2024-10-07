import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './home.module.css'

function Home() {
    const navigate = useNavigate(); 

    
    const navigateToSurveyForm = () => {
        navigate('/survey-form'); 
    };

   
    const navigateToSurveyList = () => {
        navigate('/survey-list'); 
    };

    return (
        <div>
            <div className={styles.bodylike1}>
                <h1>Welcome to the SWE 642</h1>
            </div>
            <div className={styles.bodylike}>
                <button className={styles.glowOnHover} onClick={navigateToSurveyForm} type="button">Survey Form</button>
                <button className={styles.glowOnHover} onClick={navigateToSurveyList} type="button">Survey List</button>
            </div>
        </div>
    );
}

export default Home;
