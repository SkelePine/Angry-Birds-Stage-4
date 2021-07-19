class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        this.image = sling1img
        this.image1 = sling2img
        this.image2 = sling3img
        image(this.image, 200, 20, this.width, this.height);
        image(this.image1, 170, 20, this.width, this.height);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            if(pointA.x < 220){
            strokeWeight(8);
            stroke(48,22,8)
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-3); 
            image(this.image2,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(4);
                stroke(48,22,8) 
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
            line(pointA.x+20, pointA.y, pointB.x-10, pointB.y-3); 
            image(this.image2,pointA.x+20,pointA.y-10,15,30);
            }
        }   
    }
    
}