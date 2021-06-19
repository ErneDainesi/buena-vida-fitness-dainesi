import React from 'react';
import {useHistory} from 'react-router-dom';

const Card = props => {
	const {title = 'Card Title', imgUrl, id, btnText, cardBody} = props;
	const history = useHistory();
	return <div className="card">
		<img src={imgUrl} alt={`img-${id}`} className="card-img" />
		<h3 className="card-title">{title}</h3>
		<div className="card-body">
			{cardBody}
		</div>
		<button className="btn btn-dark-green" onClick={() => history.push(`/itemDetailContainer/${id}`)}>{btnText}</button>
	</div>
}

export default Card;
