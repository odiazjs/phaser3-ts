import * as Phaser from 'phaser'

export class BootScene extends Phaser.Scene {
    private playerOne: any;
    constructor() {
        super({
            key: "BootScene"
        });
    }

    preload() {

    }

    create() {
        this.playerOne = <Phaser.GameObjects.Graphics> this.add.graphics({
            x: 100,
            y: 100,
            fillStyle: { color: 0x235845, alpha: 1 }
        })
        this.playerOne.fillRectShape(new Phaser.Geom.Rectangle(152, 105, 20, 20))
    }

    update() {

    }
}