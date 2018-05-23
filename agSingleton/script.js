(function () {
    var app = angular.module('taskManager', []);

    var taskController = function (Task, TaskRepository) {

        var ctrl = this;
        ctrl.tasks = [];
        ctrl.tasks.push(new Task(TaskRepository.get(1)));
        ctrl.tasks.push(new Task(TaskRepository.get(2)));
    };

    app.controller('taskCtrl', taskController)
}()); 
