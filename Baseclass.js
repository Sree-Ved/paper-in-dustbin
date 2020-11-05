class base {
    constructor(x,y,width,heigth) {
      var options = {
        'isStatic' :true,
        'friction':0.5,
        'density':1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = this.height;
      this.image = loadImage("dustbin.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,200,120);
      pop();
    }
  };