var Tamagotchi = function(name, creatureType) {
  this.name = name;
  this.creatureType = creatureType;
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;

  this.cry = function() {
      this.foodInTummy--;
      console.log(this.name + " is crying!!! WAAAH!!!!!!");
      console.log('current food in tummy: ' + this.foodInTummy);
  };
};

var charlie = new Tamagotchi("joe", "shmo");

charlie.cry();
