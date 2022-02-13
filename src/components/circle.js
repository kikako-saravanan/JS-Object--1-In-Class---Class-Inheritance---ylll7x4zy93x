// import using require
let Shape = require('./shape');
// declare class
export class Circle extends Shape{
  
  calculateArea(){

  }

}


// export class using module.exports
module.exports = {
    Circle: Circle
}
