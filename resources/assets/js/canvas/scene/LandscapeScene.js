import Scene from "./Scene";
import Walker from "../entities/Walker";
import Surface from "../entities/Surface";

export default class LandscapeScene extends Scene {
    constructor() {
        super();

        this.walker = new Walker(0, -800);
        this.collidingWalker = new Walker(60, -30);
        this.floor = new Surface(-800, 0, 1600, 100);
        this.leftWall = new Surface(-800, -800, 100, 790);
        this.rightWall = new Surface(700, -800, 100, 790);
    }

    init() {
        this.add(this.walker);
        this.add(this.collidingWalker);
        
        this.add(this.floor);
        this.add(this.leftWall);
        this.add(this.rightWall);
        
        const randWidth = Math.random() * 1400,
        randHeight = Math.random() * 800,
        randX = (Math.random() * (1400 - randWidth)) - 700,
        randY = (Math.random() * (800 - randHeight)) - 800;
        
        this.add(new Surface(randX, randY, randWidth, randHeight));
        
        for (let i = 0; i < 30; i++) {
            this.add(new Walker(0, -800));
        }
    }

    getBounds() {
        return {
            left: -800,
            right: 800,
            top: -800,
            bottom: 100
        };
    }

    setCameraOrigin(scene) {
        scene.ct.translate(Math.round(scene.width / 2), Math.round(scene.height) * 0.9);
    }

    setCameraScale(scene) {
        const bounds = this.getBounds();
        const boundsWidth = Math.abs(bounds.left) + Math.abs(bounds.right);
        const boundsHeight = Math.abs(bounds.top) + Math.abs(bounds.bottom);
        
        const scaleX = scene.width / boundsWidth,
            scaleY = scene.height / boundsHeight,
            scale = Math.min(scaleX, scaleY);
        
        scene.ct.scale(scale, scale);
    }

    render(scene) {
        scene.ct.clearRect(0, 0, scene.width, scene.height);
        
        scene.ct.save();
        this.setCameraOrigin(scene);
        this.setCameraScale(scene);

        super.render(scene);
        scene.ct.restore();
    }
}