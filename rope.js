class rope{       
    
    constructor(body1,body2,offsetX,offsetY){ 
        this.offsetX=offsetX;
        this.offsetY=offsetY;
               
        var options={            
            bodyA:body1,            
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
                   
        this.rope=Constraint.create(options);        
        World.add(world,this.rope);    
    }
    display(){        
    var pointA=this.rope.bodyA.position;        
    var pointB=this.rope.bodyB.position;
    
    var x1=pointA.x;
    var y1=pointA.y;
    
    var x2=pointB.x+this.offsetX;
    var y2=pointB.y+this.offsetY;
            
    strokeWeight(2);
    stroke("yellow")        
    line(x1,y1,x2,y2);
    }
}