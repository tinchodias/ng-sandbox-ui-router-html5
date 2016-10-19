'use strict';

tasksListApp.service("TasksService", function () {

  this.tasks = [
    {
      "id": "0",
      "description": "Finish everything tomorrow"
    }];

  this.createTask = function (description) {
    var task = new Task(description);
    task.id = this.tasks.length;
    return task;
  };

  this.addTask = function (task) {
    this.tasks.push(task);
  };

  this.getTaskById = function (id) {
    
    return this.tasks.find(function (task) {
      return task.id == id;
    })
  };

});