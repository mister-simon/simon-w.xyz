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
            
            for (let j = i+1; j < this.collidable.length; j++) {                
                // Check if they're allowed to collide
                const entity2 = this.collidable[j];
                
                if (!entity1.collision.canCollideWith(entity2.collision)) {
                    continue;
                }                
                
                // Check collisions
                const collision = entity1.collision.checkOverlap(entity2);
                
                if (collision !== null) {
                    entity1.collision.register(collision.self, entity2);
                    entity2.collision.register(collision.other, entity1);
                }
            }
        }
        
        // Resolve any collisions that occurred
        for (let i = 0; i < this.collidable.length; i++) {
            const entity = this.collidable[i];
            entity.collision.resolve();
        }
        
        if (!Window.THING) {
            console.log(this.registeredCollisions);
            Window.THING = true;
        }

        this.resetCollider();
    }
}