import React from 'react';

const Card = props => {
	const {title = 'Card Title', imgUrl, id, cardBody, cardButton} = props;
	return <div className="card">
		<img src={imgUrl} alt={`img-${id}`} className="card-img" />
		<h3 className="card-title">{title}</h3>
		<div className="card-body">
			{cardBody}
		</div>
		{cardButton}
	</div>
}

export default Card;
