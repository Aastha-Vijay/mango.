class Stone{
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.radius = radius;
        this.body = Bodies(x,y,radius,options);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        circle(pos.x, pos.y, radius);
        pop();

    }
}