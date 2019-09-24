import React from "react";
import { Card, CardBody, CardTitle } from 'reactstrap'

export default function ItemCard(props) {
	return (
		<div className="container row bg-dark">
			{props.thumbnail?<img className="col-sm-3" src={props.thumbnail} alt={props.name} />:''}
			<div className="col-sm-9 text-left">
				<h4>{props.name}</h4>
				{/* add edit and delete buttons */}
			</div>
		</div>
	);
}
