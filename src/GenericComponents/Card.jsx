import React from 'react'
import "./card.scss"
import { Icon } from 'semantic-ui-react'


export const CardBtn = ({icon, side, onClick}) => {
    return <button className={side? `btn btn-${side}` : "btn"} onClick={onClick}>
    <Icon name={icon}  />
</button>
}


export const Card = ({color, main, secondary, date ,header, content, footer, remove, edit}) => {

    return <><div className="courses-container">
	<div className="course">
		<div className="course-preview" style={{backgroundColor: color ? color : "#f26202"}}>
			<h2>{main}</h2>
            <h3>{secondary}</h3>
            <h6>{date}</h6>
			{/* <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a> */}
            
		</div>
		<div className="course-info">
			{/* <div className="progress-container">
				<div className="progress"></div>
				<span className="progress-text">
					6/9 Challenges
				</span>
			</div>
			<h6>Chapter 4</h6> */}
			<h3>{header}</h3>
                <Icon name="location arrow"/>{content}
        <div className="category" style={{color: color ? color : "#f26202"}}>{footer}</div> 
            <div className="btn-group">
                {/* <button className="btn btn-left" onClick={remove}>
                    <Icon name='trash' />
                </button> */}
                <CardBtn icon='trash' side='left' onClick={remove}/>
                {edit}
            </div>
		</div>
	</div>
</div>



</>
}