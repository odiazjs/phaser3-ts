import * as Phaser from 'phaser'
import Player from './objects/player';

export class BootScene extends Phaser.Scene {
    playerOne!: Player;
    
    constructor() {
        super({
            key: "BootScene"
        });
    }

    preload() {
        const frameConfig: Phaser.Loader.FileTypes.ImageFrameConfig = {
            frameWidth: 192
        }
        this.load.spritesheet('player', './player.72715a66.png', frameConfig);
    }

    create() {
        this.playerOne = new Player(this.input, this, this.physics, 300, 300);
        this.physics.world.setBoundsCollision(true);
    }

    update() {
        this.playerOne.inputHandler.addMovementWASD(this.playerOne)
    }
}