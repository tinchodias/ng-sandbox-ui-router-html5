'use strict';

var tasksListApp = angular.module('tasksListApp', ['ui.router']);


tasksListApp.controller('TasksMainController', function (TasksService) {

  this.description = '';
  this.tasks = TasksService.tasks;

  this.addTask = function () {
    var task = TasksService.createTask(this.description);
    TasksService.addTask(task);
    this.description = '';
  };

});


tasksListApp.controller('TaskDetailController', function ($stateParams, $state, TasksService) {

  this.task = TasksService.getTaskById($stateParams.id);

  if (!this.task) {
    $state.go("tasksMain");
    return;
  }

  this.description = this.task.description;

  this.accept = function () {
    this.task.description = this.description;
    $state.go("tasksMain");
  };

});
