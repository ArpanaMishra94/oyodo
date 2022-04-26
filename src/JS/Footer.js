import React from 'react'
import '../CSS/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-cols">

                <div className="footer-col1 col">
                    <h2>About us</h2>
                    <p>Tristique Malesuada</p>
                    <p>Cursus</p>
                    <p>Consectetur</p>
                    <p>Euismod Vulputate</p>
                </div>

                <div className="footer-col2 col">
                    <h2>Legal</h2>
                    <p>Tristique Cursus Consectetur</p>
                    <p>Cursus</p>
                    <p>Consectetur</p>
                </div>

                <div className="footer-col3 col">
                    <h2>Developers</h2>
                    <p>Tristique</p>
                    <p>Cursus</p>
                    <p>Consectetur</p>
                    <p>Vulputate Euismod Vulputate</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
