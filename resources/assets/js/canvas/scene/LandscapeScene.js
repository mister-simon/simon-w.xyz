import Scene from "./Scene";
import Walker from "../entities/Walker";
import Surface from "../entities/Surface";

export default class LandscapeScene extends Scene {
    constructor() {
        super();

        this.walker = new Walker(150, -200);
        this.collidingWalker = new Walker(220, -30);
        this.floor = new Surface(-800, 0, 1600, 800);
        this.leftWall = new Surface(700, -800, 100, 790);
        this.rightWall = new Surface(-800, -800, 100, 790);
    }

    init() {
        this.add(this.walker);
        this.add(this.collidingWalker);
        this.add(this.floor);
        this.add(this.leftWall);
        this.add(this.rightWall);
    }

    render(scene) {
        scene.ct.clearRect(0, 0, scene.width, scene.height);
        
        scene.ct.save();
        scene.ct.translate(Math.round(scene.width / 2), Math.round(scene.height / 2));

        super.render(scene);
        scene.ct.restore();
    }
}