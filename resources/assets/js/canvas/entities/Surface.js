import BoxCollision from "../lib/BoxCollision";

export default class Surface {
    constructor(x, y, w, h) {
        this.pos = { x, y };
        this.size = { w, h };

        this.collision = new BoxCollision();
        this.collision.setPos(this.pos);
        this.collision.setSize(this.size);
        this.collision.setResolver(this.hasCollision.bind(this));
        this.collision.setType("immovable");

        this.overlayAlpha = 0;
    }
    
    hasCollision(collisions) {
        this.overlayAlpha = 1;
    }
    
    update(scene) {
        this.overlayAlpha *= 0.99;

        if (this.overlayAlpha < 0.1) {
            this.overlayAlpha = 0;
        }
    }
    
    render(scene) {
        scene.ct.save();

        scene.ct.fillStyle = "rgb(0, 0, 0)";
        scene.ct.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);

        scene.ct.fillStyle = "rgba(255, 255, 255, " + this.overlayAlpha + ")";
        scene.ct.fillRect(this.pos.x + 10, this.pos.y + 10, this.size.w - 20, this.size.h - 20);

        scene.ct.restore();
    }
}