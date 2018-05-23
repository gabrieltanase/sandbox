/** 
 * STRUCTURAL DESIGN PATTERNS
 * Concerned with how objects are made up and simplify relationships between objects.
 * Deal with the relationship of objects.
 * Extend functionality OR
 * Simplify functionality.
 * ==========================
 * * Facade Pattern *
 * --------------------------
 * -- Used to provide a simplified interface to a complicated system.
 * -- Simplifies the interface
 * -- eg: jQuery
 */

var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name );
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of completion of ' + task.name);
        },
        save: function (task) {
            console.log('saving Task: ' + task.name);
        }
    }
}();

var TaskServiceWrapper = function () {
    var completeAndNotify = function (task) {
        TaskService.complete(task);
        if (task.completed == true) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    }
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Gabi',
    completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);

