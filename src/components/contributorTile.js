import React from "react"

// import componentStyles from './contributorTile.module.scss'

const ContributorTile = ({firstName, lastName, role, bio, headshot, ...props}) => {
    return (
        <div>
            <div style={{"max-width":"200px", "margin-bottom": "1rem"}}>
            <img src={headshot} alt={`${firstName} ${lastName} headshot.`}/>

            </div>
            <h4>{firstName} {lastName}</h4>
            <p style={{fontWeight: `bold`, marginBottom: `.5rem`}}>{role}</p>
            <p dangerouslySetInnerHTML={{ __html: bio }} ></p>
        </div>
    )
}

export default ContributorTile
