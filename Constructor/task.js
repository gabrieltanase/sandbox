/** 
 * CREATIONAL DESIGN PATTERNS
 * Used to Construct New Objects
 * Adapting Creation to the Situation
 * ==========================
 * * Contructor Pattern *
 * --------------------------
 * -- Use to create new objects with their own object scope.
 * -- The 'new' keyword - Creates a brand new object
 *                      - Link to an object prototype
 *                      - Binds 'this' to the new object scope
 *                      - Implicity returns 'this'
 * -- The Prototype is an encapsulation of properties that an object links to.
 */

var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
}

module.exports = Task;
