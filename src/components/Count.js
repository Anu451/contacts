import React from 'react';
import { useState } from 'react';

export default function Count() {
	const [count, setState] = useState(0);

	function clicked() {
		setState(count + 1);
	}

	function AddBtn({ count, setCount }) {
		return <button onClick={clicked}>liked {count} </button>;
	}

	return <div></div>;
}
