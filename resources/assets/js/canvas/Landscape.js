import Vue from "vue";
import LandscapeScene from "./scene/LandscapeScene";

export default class Landscape {
    constructor() {
        this.cv = null;
        this.ct = null;

        this.width = null;
        this.height = null;

        this.scene = new LandscapeScene();
        
        this.targetArea = 1400 * 500;
        
        this.animationFrame = null;
        this.needsResize = true;

        this.boundLoop = this.loop.bind(this);
    }

    set canvas(canvas) {
        this.cv = canvas;
        this.ct = this.cv.getContext('2d');
    }

    init() {
        window.addEventListener('resize', ev => { this.needsResize = true; });
        
        this.scene.init();

        this.start();
    }

    resize() {
        const bounds = this.cv.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        this.width = this.cv.width = bounds.width;
        this.height = this.cv.height = Math.min(this.targetArea / this.width, windowHeight * 0.5);
            
        this.needsResize = false;
    }

    start() {
        this.boundLoop(0);
    }

    stop() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }

    loop(delta) {
        this.animationFrame = requestAnimationFrame(this.boundLoop);

        if (this.needsResize) {
            this.resize();
        }

        const state = this.getState();

        this.scene.frame(delta, state);
    }

    getState() {
        return {
            width: this.width,
            height: this.height,
            ct: this.ct
        };
    }
}