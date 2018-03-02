import Collider from "../lib/Collider";

export default class Scene {
    constructor() {
        this.entities = [];

        this.accumulator = 0;
        this.targetStep = 1000 / 60;
        this.deltaMax = this.targetStep * 10;
        this.previousTime = 0;

        this.collider = new Collider();
    }

    init() { }

    add(entity) {
        this.entities.push(entity);
    }

    frame(time, sceneState) {
        // console.log("--------------", time - this.previousTime, this.deltaMax);

        const delta = Math.min(time - this.previousTime, this.deltaMax);
        this.accumulator = this.accumulator + delta;

        let steps = 0;

        while (this.accumulator > this.targetStep) {
            this.step(sceneState);
            steps++;
            this.accumulator -= this.targetStep;
        }
        
        this.render(sceneState);

        this.previousTime = time;
    }
    
    step(sceneState) {
        for (let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i];
            entity.update(sceneState);

            this.collider.checkCollisions(entity);
        }
        
        this.collider.resolveCollisions();
    }
    
    render(sceneState) {
        for (let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i];
            entity.render(sceneState);
        }    
    }
}