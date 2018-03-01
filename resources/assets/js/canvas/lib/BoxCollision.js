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
            left: this.pos.x,
            top: this.pos.y,
            right: this.pos.x + this.size.w,
            bottom: this.pos.y + this.size.h
        };
    }

    checkOverlap(collidable) {
        const self = this.getBounds();
		const other = collidable.collision.getBounds();

        const colXL = self.left > other.right,
            colXR = self.right <= other.left,
            colYT = self.top > other.bottom,
			colYB = self.bottom <= other.top;

		if (!(colXL || colXR || colYT || colYB)) {
			const selfCollisions = {
				top: other.bottom - self.top,
				bottom: other.top - self.bottom,
				left: other.right - self.left,
				right: other.left - self.right
			};

			const otherCollisions = {
				top: selfCollisions.top * -1,
				bottom: selfCollisions.bottom * -1,
				left: selfCollisions.left * -1,
				right: selfCollisions.right * -1
			}

			return {
				self: selfCollisions,
				other: otherCollisions
			};
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