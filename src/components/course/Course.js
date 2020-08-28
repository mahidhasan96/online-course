import React from 'react';
import './Course.css';
import logo from '../../images/logo.jpg';


const Course = () => {



    return (
        <div className="course">
        <img src={logo} alt=""/>
            <nav> 
                <a href="/home">Home</a>
                <a href="/Apply">Apply</a>
                <a href="/contact">contact</a>
                <a href="/review">Manage-Review</a>
            </nav>
        </div>
    );
};


    


export default Course;