import BoxCollision from "../lib/BoxCollision";

export default class Walker {
    constructor(x, y) {
        this.pos = { x, y };
        this.velocity = { x: (Math.random() * 20) - 10, y: 0 };
        this.radius = 25;
        this.diameter = this.radius * 2;

        this.colour = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},100,${Math.random() + 0.5})`;

        this.collision = new BoxCollision();
        this.collision.setPos(this.pos);
        this.collision.setSize({ w: this.diameter, h: this.diameter});
        this.collision.setResolver(this.hasCollision.bind(this));
        this.collision.setType("momentum");


        this.collisionSideResolvers = {
            top: this.collisionTop.bind(this),
            bottom: this.collisionBottom.bind(this),
            left: this.collisionLeft.bind(this),
            right: this.collisionRight.bind(this)
        }
    }

    hasCollision(collision, entity) {
        // Ignore collisions between moving entities for now.
        if(entity.velocity !== undefined){
            return;
        }

        // Collide against solid entities
        // Work out which direction to react / has the smallest overlap
        let direction = null,
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
        
        // console.log(direction);

        this.collisionSideResolvers[direction](displacement, entity);
    }

    collisionTop(displacement, entity){
        this.pos.y += displacement;
        this.velocity.y *= -1;
    }

    collisionBottom(displacement, entity){
        this.pos.y += displacement;
        this.velocity.y *= -0.75;
        this.velocity.x *= 0.99;
    }

    collisionLeft(displacement, entity){
        this.pos.x += displacement;
        this.velocity.x *= -0.7;
    }

    collisionRight(displacement, entity) {
        this.pos.x += displacement;
        this.velocity.x *= -0.7;
    }

    getCentrePos() {
        return {
            x: this.pos.x + this.radius,
            y: this.pos.y + this.radius
        }
    }

    update(scene) {
        this.velocity.y += 0.5;
        this.pos.y += (this.velocity.y);
        this.pos.x += (this.velocity.x);
        this.collision.setPos(this.pos);
    }

    render(scene) {
        const centre = this.getCentrePos();

        scene.ct.fillStyle = this.colour;
        
        scene.ct.beginPath();
        scene.ct.arc(centre.x, centre.y, this.radius, 0, Math.PI * 2);
        scene.ct.fill();
    }
}