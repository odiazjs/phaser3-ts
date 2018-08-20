import Player from "../objects/player";

export class InputHandler {
    wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    constructor (
        private input: Phaser.Input.InputPlugin,
        private physics: Phaser.Physics.Arcade.ArcadePhysics
    ) {
        
    }

    addMovementWASD ( player: Player ) {
        // Check for input
        player.sprite.body.setVelocity(0,0);
        if ( this.wKey.isDown ){
            player.sprite.body.velocity.y = -200;
        }
        if ( this.sKey.isDown ){
            player.sprite.body.velocity.y = 200;
        }
        if ( this.aKey.isDown ){
            player.sprite.body.velocity.x = -200;
        }
        if ( this.dKey.isDown ){
            player.sprite.body.velocity.x = 200;
        }
        if (!this.input.activePointer.primaryDown) {
            player.shoot();
        }
    }

    addMouseRotation ( player: Player, center: Phaser.GameObjects.Sprite) {
        const deltaY = this.input.mousePointer.y - player.y
        const deltaX = this.input.mousePointer.x - player.x
        const rad = Math.atan2(deltaY, deltaX)
        const deg = rad * (180 / Math.PI)
        player.sprite.setRotation(rad)

        if (this.input.activePointer.primaryDown) {
            player.fireBullet(deltaX, deltaY)
        }
    }
}