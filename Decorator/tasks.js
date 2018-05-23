/** 
 * STRUCTURAL DESIGN PATTERNS
 * Concerned with how objects are made up and simplify relationships between objects.
 * Deal with the relationship of objects.
 * Extend functionality OR
 * Simplify functionality.
 * ==========================
 * * Decortor Pattern *
 * --------------------------
 * -- Used to add new functionality to an existing object, without being obtrusive.
 * -- More complete inheritance
 * -- Wraps an object
 * -- Protects existing objects
 * -- Allows extended functionality
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

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log('notifying important people');
};

urgentTask.complete();
urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this);
};
urgentTask.save();

