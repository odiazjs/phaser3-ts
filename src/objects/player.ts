import { InputHandler } from '../handlers/input'

export default class Player {
    inputHandler!: InputHandler;
    sprite: Phaser.GameObjects.Sprite;
    constructor (
        public input: Phaser.Input.InputPlugin,
        public scene: Phaser.Scene,
        public physics: Phaser.Physics.Arcade.ArcadePhysics,
        public x: number,
        public y: number
    ) {
        this.sprite = this.scene.add.sprite(x, y, 'player');
        this.physics.world.enable(this.sprite);
        this.sprite.setScale(0.4, 0.6);
        this.sprite.setActive(true);
        this.sprite.body.setGravity(0, 0);
        this.sprite.body.setVelocity(0, 0);
        this.inputHandler = new InputHandler(this.input);

        //Animation
        const animationConfig: AnimationConfig = {
            key: 'shoot',
            frames: this.scene.anims.generateFrameNames('player', { start: 0, end: 1 }),
            repeat: -1,
            duration: 125
        }
        this.scene.anims.create(animationConfig)
    }

    shoot () {
        this.scene.anims.play('shoot', this.sprite)
    }
}