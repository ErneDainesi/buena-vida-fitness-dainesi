import React from 'react';

const Card = props => {
	const {title = 'Card Title', imgUrl, id, cardBody, cardButton} = props;
	return <div className="card">
		<img src={imgUrl} alt={`img-${id}`} className="card-img" />
		<div className="card-body">
			<h3 className="card-title">{title}</h3>
			{cardBody}
			{cardButton}
		</div>
	</div>
}

export default Card;
