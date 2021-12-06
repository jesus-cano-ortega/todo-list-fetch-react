import React, { useState, useEffect } from "react";
import Item from "./item.jsx";

const Home = () => {
	//Hooks
	const [value, setValue] = useState("");
	const [items, setItems] = useState([]);
	const [error, setError] = useState("");

	//GETTING THE ITEMS INSIDE THE API
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/jesuscano", {
			method: "GET",
			headers: { "Content-Type": "application/json" }
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				setItems(data);
				return data;
			})
			.catch(error => {
				setError(error);
				console.log(error);
			});
	}, []);

	//ADDING NEW ITEMS TO THE API
	const saveData = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/jesuscano", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(items)
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				setError(error);
			});
	};

	//Function that creates a new item inside the array when press Enter
	const createNewTask = ev => {
		if (ev.key == "Enter" && value != "") {
			setItems(items => [...items, { label: value, done: false }]);
			setValue("");
			saveData();
		}
	};

	//Function that deletes an element inside the array when press the item close button
	const deleteTask = index => {
		let newArray = [...items];
		newArray.splice(index, 1);
		saveData();
		setItems(newArray);
	};

	return (
		<>
			<div className="container-fluid body d-flex align-items-center justify-content-center">
				<div className="container content">
					<div className="container d-flex flex-column align-items-center text-white py-3 px-2">
						<h1>ToDo List</h1>
						<p>
							{items.length > 0
								? "You have " + items.length + " tasks"
								: "No pending tasks"}
						</p>
					</div>
					<div className="container d-flex flex-column justify-content-center">
						<input
							type="text"
							className="form-control"
							placeholder=" Add a new task..."
							onChange={ev => {
								setValue(ev.target.value);
							}}
							onKeyPress={ev => {
								createNewTask(ev);
							}}
							value={value}
						/>
						{error.length == 0 ? (
							<ul>
								{items.map((item, i) => {
									return (
										<Item
											name={item.label}
											key={i}
											click={e => deleteTask(i)}
											//It doesn't work with Point Free Notation --> click = {deleteTask}
										/>
									);
								})}
							</ul>
						) : (
							<li>{error}</li>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
