// import '../App.css';
import React, { useState, useEffect, Children } from 'react';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import Card from './Card';
import Test from './Test';

function App() {
	const LOCAL_KEY = 'contacts';
	const [input, setInput] = useState({
		name: '',
		number: '',

		email: '',
	});
	const [dataArray, setDataArray] = useState([]);
	console.log('data', dataArray);

	// local storage

	// useEffect(() => {
	// 	const setData = localStorage.setItem(LOCAL_KEY, JSON.stringify(dataArray));
	// 	console.log('setData', setData);
	// }, [dataArray]);

	function onSubmit(e) {
		e.preventDefault();
		setDataArray([...dataArray, input]);
		setInput({ name: '', number: '', email: '' });
	}

	return (
		<div className="App">
			<Header />
			<AddContacts setInput={setInput} onSubmit={onSubmit} input={input} />
			<Card data={dataArray} setDataArray={setDataArray} />

			{/* <ContactList contacts={contactList} test={test} /> */}
			{/* <UseEffect /> */}
			{/* <Test /> */}
		</div>
	);
}

export default App;
