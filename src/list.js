import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './list.module.css';


function SurveyList() {
    const [surveys, setSurveys] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
               
                const response = await axios.get('http://localhost:8080/api/students');
                setSurveys(response.data);
            } catch (error) {
                console.error('Error fetching surveys:', error);
            }
        };

        fetchSurveys();
    }, []);

    const fetchSurveys = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/students'); 
            setSurveys(response.data);
        } catch (error) {
            console.error('Error fetching surveys:', error);
           
        }
    };

    const updateSurvey = (surveyId) => {
        navigate(`/edit/${surveyId}`);
    };

    const deleteSurvey = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/students/${id}`); 
           
            fetchSurveys();
        } catch (error) {
            console.error('Error deleting survey:', error);
         
        }
    };

    return (
        <div>
        
        <h2 className="heading"><u>Survey List</u></h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Street Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Email</th>
              <th scope="col">Date Of Survey</th>
              <th scope="col">Liked Most</th>
              <th scope="col">Interest Source</th>
              <th scope="col">Comments</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {surveys.map(survey => (
              <tr key={survey.id}>
                <td>{survey.firstName}</td>
                <td>{survey.lastName}</td>
                <td>{survey.streetAddress}</td>
                <td>{survey.city}</td>
                <td>{survey.state}</td>
                <td>{survey.zip}</td>
                <td>{survey.phoneNumber}</td>
                <td>{survey.email}</td>
                <td>{survey.dateOfSurvey}</td>
                <td>
                {survey.students==='true' && <div>Students, </div>}
        {survey.location==='true' && <div>Location, </div>}
        {survey.campus==='true' && <div>Campus, </div>}
        {survey.atmosphere==='true' && <div>Atmosphere, </div>}
        {survey.dormRooms==='true' && <div>Dorm Rooms, </div>}
        {survey.sports==='true' && <div>Sports</div>}
        {survey.students==='false' && survey.location==='false' && survey.campus==='false' && survey.atmosphere==='false' && survey.dormRooms==='false' && survey.sports==='false' && <div>Nothing is there</div>}
      
                  
                </td>
                <td>{survey.interestSource}</td>
                <td>{survey.additionalComments}</td>
                <td>
                  <button className={style.glowOnHover} onClick={() => updateSurvey(survey.id)} style={{ "--color": "#18f3ff" }}>
                    Update
                  </button>
                </td>
                <td>
                  <button className={style.glowOnHover} onClick={() => deleteSurvey(survey.id)} style={{ "--color": "#ff0101" }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
}

export default SurveyList;
