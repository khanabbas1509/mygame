class YellowPlayer {
    constructor(x,y){
        var option = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

     World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.ody.angle;
        push();
        translate(pos.x,pos.y);
        rotate
        (angle);
        rectMode(CENTER);
        stroke("green");
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}