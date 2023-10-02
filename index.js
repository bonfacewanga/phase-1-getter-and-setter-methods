// Add your Circle class here
class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
    get diameter() {
        return this._radius * 2;
      }
    
      get circumference() {
        return 2 * Math.PI * this._radius;
      }
    
      get area() {
        return Math.PI * this._radius * this._radius;
      }
      set diameter(value) {
        this._radius = value / 2;
      }
    
      set circumference(value) {
        this._radius = value / (2 * Math.PI);
      }
    
      set area(value) {
        this._radius = Math.sqrt(value / Math.PI);
      }
    }
    
