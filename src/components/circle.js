// import using require
let shape = require('./shape');
// declare class
export class Circle extends Shape{
  calculateArea(){

  }

}


// export class using module.exports
module.exports = {
    Circle: Circle
}
