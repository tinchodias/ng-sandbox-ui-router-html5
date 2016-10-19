'use strict';

/* Controllers */
var tasksListApp = angular.module('tasksListApp', ['ui.router']);

tasksListApp.controller('AgregarTaskController', function (TasksService) {

  this.descriptionTask = '';
  this.tasks = TasksService.tasks;

  this.agregarTask = function () {
    var task = TasksService.crearTask(this.descriptionTask);
    TasksService.agregarTask(task);
    this.descriptionTask = '';
  };

});


tasksListApp.controller('EditarTaskController', function ($stateParams, $state, TasksService) {

  this.task = TasksService.getTaskById($stateParams.id);

  if (!this.task) {
    $state.go("agregarTask");
    return;
  }

  this.descriptionTask = this.task.description;

  this.aceptar = function () {
    this.task.description = this.descriptionTask;
    $state.go("agregarTask");
  };

});

  
  
