import React from 'react'
import '../CSS/SectionOneRight.css';
import person from '../images/person.jpeg'
import map from '../images/map.jpg'

function SectionOneRight() {
    return (
        <div className="sectionOneSidebar">

            <div className="submenu">
                <h1>Submenu</h1>
                <div className="submenu-items">
                    <li>Home</li>
                    <li>Examples</li>
                    <li>Contact</li>
                    <li>About</li>
                </div>
            </div>

            <div className="profile">
                <div className="profile-images">
                    <img className="personImg"
                        src={person}
                        alt=""/>
                </div>
                <div className="profile-info">
                    <div className="profile-info-row1 info">
                        <h4>Name</h4>
                        <p>Nomen Nescio</p>
                    </div>
                    <div className="profile-info-row2 info">
                        <h4>Email</h4>
                        <p>nomen@example.com</p>
                    </div>
                    <div className="profile-info-row3 info">
                        <h4>Phone</h4>
                        <p>+852 555 555</p>
                    </div>
                </div>
            </div>

            <div className="message">
                <h3>Send me a message</h3>
                <p>Subject</p>
                <input className="input-subject" type="text"></input>
                <p>Message</p>
                <input className="input-message" type="text"></input>
                <button>Send</button>
            </div>

            <div className="location">
                <h3>Or meet me at the office</h3>
                <img src={map}/>
                <p className="townName">ONE MIDTOWN</p>
                <p>11 Hoi Shing Rd</p>
                <p>Tsuen Wan</p>
            </div>
        </div>
    )
}

export default SectionOneRight
