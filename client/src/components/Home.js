import React, { useEffect, useState } from "react";
import Likes from "../utils/Likes";
import Comments from "../utils/Comments";
import { useNavigate } from "react-router-dom";
import Navb from "./Navb";

const Home = () => {
	const [thread, setThread] = useState("");
	const [threadList, setThreadList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const checkUser = () => {
			if (!localStorage.getItem("_id")) {
				navigate("/login");
			} else {
				fetch("http://localhost:4000/api/all/threads")
					.then((res) => res.json())
					.then((data) => setThreadList(data.threads))
					.catch((err) => console.error(err));
			}
		};
		checkUser();
	}, [navigate]);

	const createThread = () => {
		fetch("http://localhost:4000/api/create/thread", {
			method: "POST",
			body: JSON.stringify({
				thread,
				id: localStorage.getItem("_id"),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				alert(data.message);
				setThreadList(data.threads);
			})
			.catch((err) => console.error(err));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		createThread();
		setThread("");
	};
	return (
		<>
			<Navb />
			<div className='container'>
				<div className="mt-4 border border-2 p-4 rounded col-12 mx-auto">
					<div className="mt-2">
						<h2 className='text-center'>Crear un Post</h2>
					</div>
					<div className="mt-4">
						<form className='homeForm' onSubmit={handleSubmit}>
							<div className='home__container'>
								<label htmlFor='thread' className="form-label">¿De qué quieres hablar?</label>
								<input
									type='text'
									name='thread'
									required
									value={thread}
									onChange={(e) => setThread(e.target.value)}
								/>
							</div>
							<div>
								<button className='homeBtn btn btn-primary' type="submit">Crear hilo</button>
							</div>

						</form>
					</div>
					<div><h3>Entradas receintes: </h3></div>

					<div className='thread__container'>
						{threadList.map((thread) => (
							<div className='thread__item' key={thread.id}>

								<p>{thread.title}</p>
								<div className='react__container'>
									<Likes
										numberOfLikes={thread.likes.length}
										threadId={thread.id}
									/>
									<Comments
										numberOfComments={thread.replies.length}
										threadId={thread.id}
										title={thread.title}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

			</div>
		</>
	);
};

export default Home;