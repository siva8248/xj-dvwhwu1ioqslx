class b{
        constructor(x, y, width, height) {
          var options = {
              isStatic: false,
              restitution:0.8,
              friction:0.3,
              density:1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
          this.Visiblity=255;
        }
        display(){
          if((this.body.speed)<3)
      { var pos =this.body.position;
        push();
        rectMode(CENTER);
        stroke("black");
        fill("blue");
        this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity)
        rect(pos.x, pos.y, this.width, this.height);
        pop();;
}else
{
World.remove(world,this.body) 
}
         
        }
      };