import './Button.css';
import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZE = ['btn--medium', 'btn--large'];

function Button(props) {
	const { children, type, onClick, buttonStyle, buttonSize } = props;
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZE[0];

	return (
		<Link to="/sign-up" className="btn-mobile">
			<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
				{children}
			</button>
		</Link>
	);
}

export default Button;
