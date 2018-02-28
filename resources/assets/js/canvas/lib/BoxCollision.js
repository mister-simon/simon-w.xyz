export default class BoxCollision {
    constructor() {
        this.pos = { x: null, y: null };
        this.size = { w: null, h: null };

        this.currentCollisions = [];

        this.resolver = null;
    }

    setPos(pos) {
        this.pos = { x: pos.x, y: pos.y };
    }

    setSize(size) {
        this.size = { w: size.w, h: size.h };
    }

    getBounds() {
        return {
            tl: this.pos,
            br: { x: this.pos.x + this.size.w, y: this.pos.y + this.size.h }
        };
    }

    checkOverlap(collidable) {
        const self = this.getBounds();
        const other = collidable.collision.getBounds();

        const colXL = self.tl.x < other.br.x,
            colXR = self.br.x >= other.tl.x,
            colYT = self.tl.y < other.br.y,
            colYB = self.br.y >= other.tl.y;

        if (colXL || colXR || colYT || colYB) {
            return [
                { entity: this },
                { entity: other }
            ];
        } else {
            return null;
        }
        
    }

    register(collision) {
        this.currentCollisions.push(collision);
    }

    resolve() {
        if (this.resolver !== null) {
            for (let i = 0; i < this.currentCollisions.length; i++) {
                const collision = this.currentCollisions[i];
                this.resolver(collision);
            }
        }

        // Reset collisions register
        this.currentCollisions = [];
    }

    setResolver(resolver) {
        this.resolver = resolver;
    }
}