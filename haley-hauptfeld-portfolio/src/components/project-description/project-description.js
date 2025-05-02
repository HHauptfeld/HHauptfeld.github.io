import React from 'react'
import './project-description.css'

export default function ProjectDescription({ title, text, image, isOdd }) {

    if(isOdd){
    return (

        <div class= "description" > 

        <div class="portrait">
            <img src={image} alt='' />
        </div>
        <div class="about-text">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

    </div>
    )
    } else {
        return (

            <div class= "description" > 

            <div class="about-text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div class="portrait">
                <img src={image} alt='' />
            </div>
    
        </div>
        )
    }

}