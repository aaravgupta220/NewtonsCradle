class Bob{

    constructor(x, y, r){

        var options = {
            'isStatic' : false,
            'restitution' : 1,
            'friction' : 0,
            'frictionAir' : 0.0,
            'slop' : 1,
            'inertia' : Infinity
        }

        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);

    }

    display(){

        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("pink");
        ellipse(0, 0, this.r, this.r);
        pop();

    }

}