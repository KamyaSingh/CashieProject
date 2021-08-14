import axios from "axios";

const http = axios.create({
	baseURL: "https://cashie-backend.herokuapp.com/api/",
	headers: {
		authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});

export default http;