import React from 'react'
import "./card.scss"
import { Icon } from 'semantic-ui-react'


export const CardBtn = ({icon, side, onClick}) => {
    return <button className={side? `btn btn-${side}` : "btn"} onClick={onClick}>
    <Icon name={icon}  />
</button>
}


export const Card = ({color, main, secondary, date ,header, content, footer, remove, edit, removed, children, bgColor}) => {

    return <><div className={removed? 'cards-container removed' : "cards-container"}>
	<div className="card" style={main && {display: 'flex'}}>
		{main && <div className="card-preview" style={{backgroundColor: color ? color : "#f26202"}}>
			<h2>{main}</h2>
            <h3>{secondary}</h3>
            <h6>{date}</h6>
			{/* <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a> */}
        
		</div>}
		<div className={remove||edit||footer? "card-info footer" : "card-info"} style={{backgroundColor: bgColor ? bgColor : "#fff"}}>
			{/* <div className="progress-container">
				<div className="progress"></div>
				<span className="progress-text">
					6/9 Challenges
				</span>
			</div>
			<h6>Chapter 4</h6> */}
			{children}
			{header&&<h3>{header}</h3>}
                {content && <> <Icon name="location arrow"/> {content}</>}
        {footer && <div className="category" style={{color: color ? color : "#f26202"}}>{footer}</div>}
            <div className="btn-group">
            	{remove && <CardBtn icon='trash' side='left' onClick={remove}/>}
        		{edit && edit}
            </div>
		</div>
	</div>
</div>



</>
}