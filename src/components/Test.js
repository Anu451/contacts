import React from 'react';

function Test() {
	const arr = [
		{ id: 0, name: 'anushka ' },
		{ id: 1, name: 'pooja' },
	];
	console.log(arr);

	function handelClick(e) {
		e.preventDefault();
		const targetValue = e.target.parentElement.id;
		// console.log(targetValue);
		display(targetValue);
	}

	function display(id) {
		console.log('display', id);
		const mapArr = arr.find((item) => {
			const findId = item.id;
			if (findId === parseInt(id)) {
				return item;
			}
		});
		console.log('map', mapArr);
	}

	const mapArr = arr.map((item, index) => {
		console.log('map', item);
		return (
			<div id={index}>
				<div> {item.name}</div>
				<button onClick={handelClick}>Click me </button>
			</div>
		);
	});

	return <div>{mapArr}</div>;
}

export default Test;
