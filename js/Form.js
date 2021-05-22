class Form {

  constructor() {
 this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  enter() {
    this.title.hide();
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount++;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("Welcome " + player.name + "!");
    //let col = color(9,213,244);
    this.greeting.style('color', '#191970');
    
    //this.greeting('font-size', '30px')
    //this.greeting.style("background-colour,colour(rgb(9, 213, 244))")
    
    this.greeting.position(
      displayWidth / 2.1 - player.name.length * (displayWidth / 110),
      125
    );
  }
  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.reset.style('background-color', color(25, 23, 200, 50))

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    
    database.ref("/").update({
      players: null,
      finishedPlayers: 0,
    });});
  }
}
