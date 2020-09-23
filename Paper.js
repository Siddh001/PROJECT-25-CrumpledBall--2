class Paper{
constructor(x,y,radius){
    var options = {
       'isStatic':false,
        'restitution':0.3,
        'friction':1.2,
        'density':1.0
    }
    
this.body=Bodies.circle(193,590,40,options);
this.radius=58;
this.image = loadImage("paper.png");

World.add(world,this.body);



}

display(){
    var pos = this.body.position;
  //  var angle = this.body.angle;
    //circle(pos.x, pos.y, this.radius);
        fill("pink");
      //  rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,58,58);
        //image.scale=0.1;
       
  
  
   
    
  }



};