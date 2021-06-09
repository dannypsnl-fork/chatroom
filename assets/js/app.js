import "../css/app.scss";

import "phoenix_html";
import socket from "./socket";
import WaterCooler from "./water_cooler";

WaterCooler.init(socket);
