import React from 'react'
import './SectionOne.css'
import SectionOneLeft from './SectionOneLeft'
import SectionOneRight from './SectionOneRight'

function SectionOne() {
    return (
        <div className="sectionOne">
            <div className="sectionOne-container">
                <div className="sectionOne-left">
                    <SectionOneLeft/>
                </div>

                <div className="sectionOne-right">
                    <SectionOneRight/>
                </div>
            </div>

        </div>
    )
}

export default SectionOne
