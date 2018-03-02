let collisionTypes = {
    momentum: ['immovable'],
    immovable: []
};

export default class BoxCollision {
    constructor() {
        this.pos = { x: null, y: null };
        this.size = { w: null, h: null };

        this.collidesWith = [];

        this.currentCollisions = [];

        this.resolver = null;
    }

    setPos(pos) {
        this.pos = { x: pos.x, y: pos.y };
    }

    setSize(size) {
        this.size = { w: size.w, h: size.h };
    }

    setType(type) {
        this.type = type;
        this.collidesWith = collisionTypes[type];
    }

	getBounds() {
        return {
            left: this.pos.x,
            top: this.pos.y,
            right: this.pos.x + this.size.w,
            bottom: this.pos.y + this.size.h
        };
    }

    canCollideWith(collision) {
        return (this.collidesWith.indexOf(collision.type) !== -1 || collision.collidesWith.indexOf(this.type) !== -1);
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
                bottom: selfCollisions.top * -1,
				top: selfCollisions.bottom * -1,
                right: selfCollisions.left * -1,
				left: selfCollisions.right * -1
			}

			return {
				self: selfCollisions,
				other: otherCollisions
			};
		} else {
			return null;
		}
        
    }

    register(collision, entity) {
        this.currentCollisions.push({ collision, entity });
    }

    resolve() {
        if (this.resolver !== null) {
            for (let i = 0; i < this.currentCollisions.length; i++) {
                const collision = this.currentCollisions[i];
                this.resolver(collision.collision, collision.entity);
            }
        }

        // Reset collisions register
        this.currentCollisions = [];
    }

    setResolver(resolver) {
        this.resolver = resolver;
    }
}