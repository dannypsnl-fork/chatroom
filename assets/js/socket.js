import { Socket } from "phoenix";

let socket = new Socket("/water_cooler:lobby", {});
socket.connect();

export default socket;
