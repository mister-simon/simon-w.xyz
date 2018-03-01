import BoxCollision from "../lib/BoxCollision";

export default class Walker {
    constructor(x, y) {
        this.pos = { x, y };
        this.velocity = { x: 1, y: 1 };
        this.radius = 25;
        this.diameter = this.radius * 2;

        this.collision = new BoxCollision();
        this.collision.setPos(this.pos);
        this.collision.setSize({ w: this.diameter, h: this.diameter});
        this.collision.setResolver(this.hasCollision.bind(this));

        this.collisionSideResolvers = {
            top: this.collisionTop.bind(this),
            bottom: this.collisionBottom.bind(this),
            left: this.collisionLeft.bind(this),
            right: this.collisionRight.bind(this)
        }
    }

    hasCollision(collision) {
        let direction = "bottom",
            displacement = null;
        
        for (const side in collision) {
            if (collision.hasOwnProperty(side)) {
                const collisionOverlap = collision[side];
                
                if (displacement === null || Math.abs(collisionOverlap) < Math.abs(displacement)) {
                    direction = side;
                    displacement = collisionOverlap;
                }
            }
        }
        
        this.collisionSideResolvers[direction](displacement);
    }

    collisionTop(displacement){
        this.pos.y += displacement;
        this.velocity.y *= -1;
    }
    collisionBottom(displacement){
        this.pos.y += displacement;
        this.velocity.y *= -1;
    }
    collisionLeft(displacement){
        this.pos.x += displacement;
        this.velocity.x *= -1;
    }
    collisionRight(displacement) {
        this.pos.x += displacement;
        this.velocity.x *= -1;
    }

    getCentrePos() {
        return {
            x: this.pos.x + this.radius,
            y: this.pos.y + this.radius
        }
    }

    update(interpolation, scene) {
        this.velocity.y += 0.1;
        this.pos.y += (this.velocity.y * interpolation);
        this.pos.x += (this.velocity.x * interpolation);
        this.collision.setPos(this.pos);
    }

    render(scene) {
        const centre = this.getCentrePos();
        
        scene.ct.beginPath();
        scene.ct.arc(centre.x, centre.y, this.radius, 0, Math.PI * 2);
        scene.ct.fill();
    }
}