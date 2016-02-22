declare module Collar {
    class Util {
        static isMobile(): boolean;
    }
}
declare module Collar {
    class Player extends Kiwi.GameObjects.Sprite {
        keyLeft: Kiwi.Input.Key;
        keyUp: Kiwi.Input.Key;
        keyRight: Kiwi.Input.Key;
        keyDown: Kiwi.Input.Key;
        speedX: number;
        speedY: number;
        constructor(state: Kiwi.State, x: number, y: number);
        update(): void;
        handleControls(): void;
    }
}
declare module Collar {
    class MainState extends Kiwi.State {
        player: Player;
        constructor();
        preload(): void;
        create(): void;
        update(): void;
    }
}
