import * as Phaser from 'phaser'
import Player from './objects/player';

export class BootScene extends Phaser.Scene {
    private playerOne: Player;
    constructor() {
        super({
            key: "BootScene"
        });
    }

    preload() {

    }

    create() {
        const player = this.physics.add.staticGroup();
        player.create(25, 25, 'player');
        
        this.playerOne = new Player(this, this.sys.canvas.width, this.sys.canvas.height);
        this.physics.world.enable(this.playerOne.graphics, 0);
    }

    update() {

    }
}