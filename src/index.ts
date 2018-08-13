import { AUTO } from 'phaser'
import { BootScene } from './scene'

declare var require: any;
require('./assets/player.png')

declare var module: any;

if (module.hot) {
    module.hot.accept(() => {
        // or use this instead of dispose()
        // window.location.reload();
    });
    module.hot.dispose(() => {
        window.location.reload();
    });
}

const config: GameConfig = {
    type: AUTO,
    parent: "ts-example",
    width: 800,
    height: 600,
    backgroundColor: 'rgb(243,243,243)',
    zoom: 1,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: BootScene
}

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config)
    }
}

window.onload = () => {
    var game = new Game(config)
}