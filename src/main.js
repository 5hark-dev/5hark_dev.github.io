import * as Lib from "./library/index.js";
const {Container, CanvasRenderer, Text} = Lib;

// game setup code
const w = 640;
const h = 480;

const renderer = new CanvasRenderer(w, h);
document.body.appendChild(renderer.view);

// game objects
const scene = new Container();
const message = new Text("The renderer!", {
    font: "40pt sans-serif",
    fill: "DarkRed",
    align: "center"
});
message.pos.x = w / 2;
message.pos.y = h / 2;
scene.add(message);

// finally, render the scene
renderer.render(scene);