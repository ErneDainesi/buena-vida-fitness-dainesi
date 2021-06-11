import React from 'react';
import LoadingGif from '../../images/loading-spinner.gif';

const LoadingSpinner = () => {
	return <div className="loading-data">
		<img src={LoadingGif} alt="loadingSpinner" className="loading-data-img" />
		<h1 className="loading-data-title">Cargando...</h1>
	</div>
}

export default LoadingSpinner;
