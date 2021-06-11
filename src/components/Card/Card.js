import React from 'react';

const Card = props => {
	const {title = 'Card Title', imgUrl, id, btnText, cardBody} = props;
	return <div className="card">
		<h3 className="card-title">{title}</h3>
		<img src={imgUrl} alt={`img-${id}`} className="card-img" />
		<div className="card-body">
			{cardBody()}
		</div>
		<button className="btn btn-dark-green">{btnText}</button>
	</div>
}

export default Card;
