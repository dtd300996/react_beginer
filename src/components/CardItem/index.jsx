import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

function CardItem(props) {
	const {src, text, label, path} = props;

	return (
		<>
			<li className="cards__item">
				<Link className="cards__item__link" to={path}>
					<figure className="cards__item__pic-wrap" data-category={label}>
						<img src={src} aria-hidden alt="Travel image" className="cards__item__img" />
						<div className="cards__item__info">
							<h5 className="cards__item__text">{text}</h5>
						</div>
					</figure>
				</Link>
			</li>
		</>
	);
}

export default CardItem;
