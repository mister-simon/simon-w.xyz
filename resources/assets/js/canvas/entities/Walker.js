import BoxCollision from "../lib/BoxCollision";

export default class Walker {
    constructor(x, y) {
        this.pos = { x, y };
        this.velocity = { x: 0, y: 1 };
        this.radius = 25;
        this.diameter = this.radius * 2;

        this.collision = new BoxCollision();
        this.collision.setPos(this.pos);
        this.collision.setSize(this.diameter, this.diameter);
        this.collision.setResolver(this.hasCollision.bind(this));
    }

    hasCollision(collision) {
        this.pos.y -= this.velocity.y;
        this.velocity.y = 0;
    }

    getCentrePos() {
        return {
            x: this.pos.x + this.radius,
            y: this.pos.y + this.radius
        }
    }

    update(interpolation, scene) {
        this.velocity.y += 0.01;
        this.pos.y += this.velocity.y;
        this.collision.setPos(this.pos);
    }

    render(scene) {
        const centre = this.getCentrePos();
        
        scene.ct.beginPath();
        scene.ct.arc(centre.x, centre.y, this.radius, 0, Math.PI * 2);
        scene.ct.fill();
    }
}