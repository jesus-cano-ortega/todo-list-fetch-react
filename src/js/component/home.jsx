import React, { useState, useEffect } from "react";
import Item from "./item.jsx";

const Home = () => {
	//Hooks
	const [value, setValue] = useState("");
	const [items, setItems] = useState([]);
	//
	const [error, setError] = useState("");

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

	/*-----------------------------------------*/

	//CREATING A NEW TODO LIST
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/jesuscano", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify([])
		}).then(response => {
			return response.json();
		});
	}, []);

	//ADDING NEW ITEMS TO THE API
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/jesuscano", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(items)
		})
			.then(response => {
				return response.json();
			})
			.catch(error => {
				setError(error);
			});
	}, [items]);

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
			})
			.catch(error => {
				setError(error);
			});
	}, []);

	/*
	const[list, setList] = useState([]);
	const[error, setError] = useState(""); 

	CUANDO NACE: 

	GET -> recibe datos
			POST -> guarda datos y recibe respuesta
	PUT -> envia y puede recibir datos
	DELETE -> solo elimina
	PATCH -> envia y recibe datos (actualiza)

	SOLO UNA PETICIÓN A LA VEZ, UNA DETRÁS DE LA OTRA


		useEffect(() => {
			fetch(url API, {
				method: "GET"; //el tipo de método, uno solo por llamada //el GET solo recibe
				headers: {"Accept: "application/json"} //los datos que quiero obtener son JSON
				//cuando quiera enviar un json poner header content type
			}).then((response) => {
				response.json(); //convierto la respuesta en json
			}).then((data) => {
				setList(data); //que todo va bien, convierto el json en lista
			}).catch((err => {
				setError(String(err)); //que todo va mal, devuelvo un error
			})

		}, []); --> dependencias listas vacia

		en el return del componente

		error.length == 0 ?
			<ul>
				list.map (val, i) => <li key=i}><{value}</li>
			</ul>
		: 
		<li>{error}</li>


CUANDO EL COMPONENTE MUTA/RENDERIZA COMPONENTE, CADA VEZ QUE CAMBIA UN USETATE: 

		useEffect(() => {
			
		});


CUANDO LA DEPENDENCIA CAMBIA: --> llamando al modificador

		useEffect(() => {

			if(list.length > 5) 
				console.log("Hay muchas tareas por hacer");
			
		});

 CUANDO MUERE: 

		useEffect(() => {
			return () => {

			}
		});

 */
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
