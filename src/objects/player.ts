module Collar {
  export class Player extends Kiwi.GameObjects.Sprite {
    keyLeft:  Kiwi.Input.Key;
    keyUp:    Kiwi.Input.Key;
    keyRight: Kiwi.Input.Key;
    keyDown:  Kiwi.Input.Key;

    speedX: number;
    speedY: number;

    constructor(state: Kiwi.State, x: number, y: number) {
      super(state, state.textures.player, x, y);

      this.keyLeft = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.A);
      this.keyUp = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.W);
      this.keyRight = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.D);
      this.keyDown = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.S);

      this.speedX = 70;
      this.speedY = 70;
    }

    update() {
      this.handleControls();
    }

    handleControls() {
      let movementDeltaX = this.speedX * this.game.time.delta() / 100;
      let movementDeltaY = this.speedY * this.game.time.delta() / 100;

      if (this.keyLeft.isDown && this.x > 0) {
        this.x = Math.max(0, this.x - movementDeltaX);
      }

      if (this.keyRight.isDown && this.y < this.game.stage.width) {
          this.x = Math.min(this.game.stage.width, this.x + movementDeltaX);
      }

      if (this.keyUp.isDown && this.y > 0) {
        this.y = Math.max(0, this.y - movementDeltaY);
      }

      if (this.keyDown.isDown && this.y < this.game.stage.height) {
        this.y = Math.min(this.game.stage.height, this.y + movementDeltaY);
      }
    }
  }
}