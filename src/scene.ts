import * as Phaser from 'phaser'
import Player from './objects/player';

export class BootScene extends Phaser.Scene {
    center!: Phaser.GameObjects.Sprite;
    playerOne!: Player;
    constructor() {
        super({
            key: "BootScene"
        });
    }

    preload() {
        const frameConfig: Phaser.Loader.FileTypes.ImageFrameConfig = {
            frameWidth: 192,
            frameHeight: 192
        }
        this.load.spritesheet('player', './player.72715a66.png', frameConfig);
    }

    create() {
        this.center = this.physics.add.sprite(
            this.sys.canvas.width / 2, 
            this.sys.canvas.height / 2, 'center'
        )
        this.center.setVisible(false)

        this.playerOne = new Player(this.input, this, this.physics, this.center.x, this.center.y + 300);
        this.playerOne.sprite.body.collideWorldBounds = true;
        this.physics.world.setBoundsCollision(true);

        const rect1 = this.add.sprite(200, 200, 'rect1').setSize(50, 50)
        this.physics.world.enable(rect1)
        rect1.body.immovable = true;

        this.physics.add.collider(rect1, this.playerOne.sprite)
    }

    update() {
        this.playerOne.inputHandler.addMouseRotation(this.playerOne, this.center)
        this.playerOne.inputHandler.addMovementWASD(this.playerOne)
    }
}