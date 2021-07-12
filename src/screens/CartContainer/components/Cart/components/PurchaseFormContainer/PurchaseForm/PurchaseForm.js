import React from 'react';

export const PurchaseForm = ({handleSubmit, handleBuyer, buyer}) => {
	const handleChange = e => {
		handleBuyer({...buyer, [e.target.name]: e.target.value});
	}
	const disableSubmitButton = () => {
		return buyer.name === "" || buyer.telNumber === "" || buyer.email === "";
	}
	return <form onSubmit={handleSubmit}>
		<input name="name" type="text" value={buyer.name} placeholder="Nombre y Apellido" required autoFocus onChange={handleChange} />
		<input name="telNumber" type="tel" value={buyer.telNumber} placeholder="Teléfono" required onChange={handleChange} />
		<input name="email" type="email" value={buyer.email} placeholder="Correo Electrónico" required onChange={handleChange} />
		<button type="submit" disabled={disableSubmitButton()} className="btn btn-light-green">Enviar</button>
	</form>
}
