import React from "react";

export const Card = (props) => {
	return (
		<div>
			<div className="card" style={{ width: "18vw" }}>
				<img
					src={props.imgSrc}
					className="card-img-top"
					alt={props.imgAlt}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.crdTitle}</h5>
					<p className="card-text">{props.crdTxt}</p>
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
};
