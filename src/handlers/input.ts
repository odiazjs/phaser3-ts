import Player from "../objects/player";

export class InputHandler {
    wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    constructor (private input: Phaser.Input.InputPlugin) {
        
    }

    addMovementWASD ( player: Player ) {
        // Check for input
        player.sprite.body.setVelocity(0,0);
        if ( this.wKey.isDown ){
            player.sprite.body.velocity.y = -250;
        }
        if ( this.sKey.isDown ){
            player.sprite.body.velocity.y = 250;
        }
        if ( this.aKey.isDown ){
            player.sprite.body.velocity.x = -250;
        }
        if ( this.dKey.isDown ){
            player.sprite.body.velocity.x = 250;
        }
        if (!this.input.activePointer.primaryDown) {
            player.shoot();
        }
    }
}