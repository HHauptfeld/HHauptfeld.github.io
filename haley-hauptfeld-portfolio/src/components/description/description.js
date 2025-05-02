import React from 'react'
import './description.css'

export default function Description({ title, text, image }) {
    return (
        <div class="description scroll-down">

        <div class="portrait">
            <img src={image} alt='' />
        </div>
        <div class="about-text">
            <h1>{title}</h1>
            <h3>{text}</h3>
        </div>

    </div>
    );
  }

// export default class about extends Component {
    
//     render() {
//         return (
//             <Description 
//                 title={"Hi! My name is Haley Hauptfeld."}
//                 text={"I am a technical product manager with a passion for connecting communities. Scroll down for more information about me!"}
//                 image={headshot}
//                 />

//             // <>
//             //     <div class="description scroll-down">

//             //         <div class="portrait">
//             //             <img src={headshot} alt='' />
//             //         </div>
//             //         <div class="about-text">
//             //             <h1>Hi! My name is Haley Hauptfeld.</h1>
//             //             <h3>I am a technical product manager with a passion for connecting communities. Scroll down for more information about me!</h3>
//             //         </div>

//             //     </div>
//             // </>
//         )
//     }
// }