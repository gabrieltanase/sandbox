var task = {
    title: 'My task',
    description: 'My Descripion'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false, // let/prevent to overwrite 
    enumerable: false, // show/hide the property of object
    configurable: false // let/ prevent someone to reset the enumerable later
});

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' is urgent';
    },
    writable: false, // let/prevent to overwrite 
    enumerable: false, // show/hide the property of object
    configurable: false // let/ prevent someone to reset the enumerable later
});

console.log(task.toString());
console.log(urgentTask.toString());

