module Collar {
  export class MainState extends Kiwi.State {
    player: Player;

    constructor() {
      super('MainState')
    }

    preload() {
      console.log('MainState Preload')
    }

    create() {
      console.log('MainState Create')

      this.player = new Player(this, this.game.stage.width / 2, this.game.stage.height);
      this.addChild(this.player);
    }

    update() {
      super.update()
      this.game.stage.setRGBColor(0, 0, 0);
    }
  }
}