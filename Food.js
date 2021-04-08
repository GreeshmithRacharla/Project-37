class Food{
constructor(){
    this.image = loadImage("images/Milk.png");

var foodStock;
var lastFed;
var addFoodS;

  getFoodStock();
  deductFood();
  updateFoodStock();
}

display(){

    var x = 80 , y = 100;

    imageMode(CENTER);
    image(this.image, 720 , 220 , 70 , 70);

    if(this.foodStock!=0){
        for(var i = 0; i<this.foodStock ; i++){
            if(i%10 === 0){
                x=80;
                y=y+50;
            }
            image(this.image , x , y , 50 , 50);
            x = x + 30;
        }
    }
}

 bedroom(){
       background(bedroomIMG,550,500);
   }

   garden(){
       background(gardenIMG,550,500);
   }

   washroom(){
       background(washroomIMG,550,500);
   }


}