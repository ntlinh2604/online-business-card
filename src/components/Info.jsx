import React, { Component } from 'react';
import photo from "../assets/photo-linh.jpg"

export default function Info() {
    return(
        <div className='info-container'>
            <img className='img' src={photo} alt="" />
            <div className='info-content'>
            <h4 className="name">Linh Nguyen</h4>
            <h5 className='job'>Frontend Developer</h5>
            <p className="email">ntlinh2604@gmail.com</p>
            <button className="email-btn">
                <a href=""><i class="fa-sharp fa-solid fa-envelope email-icon"></i></a>
                Email</button>
            </div>
            
        </div>
    )
}