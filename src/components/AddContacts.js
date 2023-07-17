import React, { Children, useState } from 'react';
import './AddContacts.css';
import { computeHeadingLevel } from '@testing-library/react';
import Card from './Card';

function AddContacts({ setInput, onSubmit, input }) {
	return (
		<div className="content">
			<div className="contents">
				<div className="contact-title">Contact List</div>
				<form action="" onSubmit={onSubmit}>
					<div className="inputfield">
						<label htmlFor="" className="name">
							Name
						</label>
						<input
							type="text"
							value={input.name}
							onChange={(e) => {
								setInput({ ...input, name: e.target.value });
							}}
						/>
					</div>
					<div className="inputfield">
						<label htmlFor="" className="Contact">
							Contact
						</label>
						<input
							value={input.number}
							type="number"
							onChange={(e) => {
								setInput({ ...input, number: e.target.value });
							}}
						/>
					</div>
					<div className="inputfield">
						<label htmlFor="" className="email">
							Email Id
						</label>
						<input
							value={input.email}
							type="text"
							onChange={(e) => {
								setInput({ ...input, email: e.target.value });
							}}
						/>
					</div>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
}

export default AddContacts;
