// import using require
let shape = require('./Shape');
// declare class
class Circle extends Shape{
  calculateArea(){

  }

}


// export class using module.exports
module.exports = {
    Circle: Circle
}
