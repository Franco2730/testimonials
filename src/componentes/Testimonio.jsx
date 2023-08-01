import React from "react";
import Alice from "./Alice.png";

const Testimonio = () => {	
	return(
		<div className="contenedor-testimonio">
			 <img className="imagen-restimonio" 
			 src= {Alice}
			 alt="Foto de Saul H."/>
			 <div className="contenedor-texto-testimonio">
					<p className="nombre-testimonio">Slash</p>
					<p className="cargo-testimonio">Guitarrista principal en Guns N' Roses</p>
					<p className="texto-testimonio">Cash me dijo: Papá, el pap de Tomy es programador, </p>
			 </div>
		</div>
	);	
}

export default Testimonio;