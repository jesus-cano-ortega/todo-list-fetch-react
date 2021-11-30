import React, { useState, useEffect } from "react";
import Item from "./item.jsx";

const Home = () => {
	//Hooks
	const [value, setValue] = useState("");
	const [items, setItems] = useState([]);

	//Function that creates a new item inside the array when press Enter
	const createNewTask = ev => {
		if (ev.key == "Enter" && value != "") {
			setItems(items => [...items, { label: value, done: false }]);
			setValue("");
		}
	};

	//Function that deletes an element inside the array when press the item close button
	const deleteTask = index => {
		let newArray = [...items];
		newArray.splice(index, 1);
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
						<ul>
							{items.map((item, index) => {
								return (
									<Item
										name={item.label}
										key={index}
										click={deleteTask}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
