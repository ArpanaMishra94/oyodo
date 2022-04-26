import React from 'react'
import './SectionTwo.css';
import broccoli from '../Images/broccoli.jpeg'
import steaks from '../Images/steaks.jpeg'
import menu from '../Images/menu.jpg'
import burger from '../Images/burger.jpeg'
import juice from '../Images/juice.jpg'

function SectionTwo() {
    return (
        <div className="sectionTwo">
            <div className="sectionTwo-container">

                <div className="sectionTwo-title">
                    <h1>Related Articles</h1>
                </div>

                <div className="sectionTwo-articles-container1">
                    <div className="sectionTwo-articles">
                        <img src={broccoli}/>
                        <h2>Lorem Cras Pellentesque</h2>
                        <p>Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at porta sem malesuada magna.</p>
                    </div>
                    <div className="sectionTwo-articles">
                        <img src={steaks}/>
                        <h2>Bibendum Sit Elit</h2>
                        <p>Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, . Sed posuere magna.</p>
                    </div>
                    <div className="sectionTwo-articles">
                        <img src={menu}/>
                        <h2>Malesuada Consectetur</h2>
                        <p>Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at porta sem malesuada magna.</p>
                    </div>
                </div>
                <div className="sectionTwo-articles-container2">
                    <div className="sectionTwo-articles">
                        <img src={burger}/>
                        <h2>Inceptos Justo Tristique Fringilla</h2>
                        <p>Curabitur blandit tempus porttitor. Cras justo odio est at porta sem malesuada magna.</p>
                    </div>
                    <div className="sectionTwo-articles">
                        <img src={juice}/>
                        <h2>Etiam Mattis Vulputate Purus</h2>
                        <p>Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at porta sem malesuada magna.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
