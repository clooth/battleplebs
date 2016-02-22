document.addEventListener('DOMContentLoaded', function onReady() {
  let game = new Kiwi.Game();
  let main = new Collar.MainState();
  game.states.addState(main);
  game.states.switchState('MainState');
}, false);