// Convert the UML diagram to Typescript class
class Circle {  
    Radius: number;
    Color: String;
     constructor() {
     } 
     
    constructor(Radius: number) {  
     this.Radius = Radius;  
    }  
    
     constructor(Radius: number, Color: String) {  
     this.Radius = Radius;
     this.Color = Color;
    }
    
    setRadius(Radius: number)
    {
       this.Radius = Radius; 
    }
    
    setColor(Color: String)
    {
       this.Color = Color; 
    }
    getRadius()
    {
        return this.Radius;
    }
    getColor()
    {
        return this.Color;
    }
   
    getArea() {  
     return 3.14 * this.Radius * this.Radius;  
    }  
    getCircumference() {  
     return 2 * 3.14 * this.Radius;  
    }
         public toString = () : string => {
           return `Circle[radius=${this.Radius}, color=${this.Color}]`;
       }
   }  
   var result = new Circle();
   result.setRadius(1.0);
   result.setColor("red");
   var area = result.getArea();  
   var circumference = result.getCircumference();  
   console.log("The Area of the Circle is :" + area);  
   console.log("The circumference of the Circle is :" + circumference);
   console.log(result);
   