import React from 'react';

const Header = () => {
	return (
		<div
			className="header-content"
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '20px',
			}}
		>
			<div className="title">Home</div>
			<ul
				className="list"
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '300px',
					listStyle: 'none',
				}}
			>
				<li>Add Contact</li>
				<li>Contact List</li>
				<li>Logout</li>
			</ul>
		</div>
	);
};

export default Header;
