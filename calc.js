export class Calc{

    static randomInt(min, max) {
        let ceel  = Math.ceil(min);
        let floor = Math.floor(max); 
        return Math.floor(Math.random() * (floor - ceel + 1) + ceel);
    }

    static randomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
      
     
    static degToRad(degree){
        return degree * (Math.PI / 180);
    }

    static radToDeg(rad){
        return rad * (180 / Math.PI);
    }

}