export default class Player {
    graphics: Phaser.GameObjects.Graphics;
    constructor (scene: Phaser.Scene, x:number, y:number) {
        this.graphics = scene.add.graphics({
            x: x/2,
            y: y/2,
            fillStyle: { color: 0x235845, alpha: 1 }
        })
        this.graphics = this.graphics.fillRectShape(new Phaser.Geom.Rectangle(0, 0, 65, 65))
    }
}