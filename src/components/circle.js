// import using require
let shape = require('./shape');
// declare class
class Circle extends Shape{
  calculateArea(){

  }

}


// export class using module.exports
module.exports = {
    Circle: Circle
}
