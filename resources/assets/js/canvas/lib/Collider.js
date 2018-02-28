export default class Collider {
    constructor() {
        this.resetCollider();
    }

    resetCollider() {
        this.collidable = [];
        this.registeredCollisions = [];
    }

    checkCollisions(entity){
        if (typeof entity.collision !== "undefined") {
            this.collidable.push(entity);
        }
    }

    resolveCollisions() {
        for (let i = 0; i < this.collidable.length; i++) {
            const entity1 = this.collidable[i];
            
            for (let j = 0; j < this.collidable.length; j++) {
                // Don't collide with self
                if (i === j) {
                    continue;
                }
                
                // Don't collide if already checked
                const collisionId = i < j ? `${i}-${j}` : `${j}-${i}`;
                
                if (this.registeredCollisions.indexOf(collisionId) !== -1) {
                    continue;
                }

                this.registeredCollisions.push(collisionId);
                
                // Check collisions
                const entity2 = this.collidable[j];
                const collision = entity1.collision.checkOverlap(entity2);
                
                if (collision !== null) {
                    entity1.collision.register(collision);
                    entity2.collision.register(collision);
                }
            }
        }
        
        // Resolve any collisions that occurred
        for (let i = 0; i < this.collidable.length; i++) {
            const entity = this.collidable[i];
            entity.collision.resolve();
        }

        this.resetCollider();
    }
}