'use strict';

tasksListApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/tasks");

  $stateProvider

    .state('tasksMain', {
      url: "/tasks",
      templateUrl: "partials/tasks_main.html",
      controller: "AddTaskController as tasksCtrl"
    })

    .state('taskDetail', {
      url: "/tasks/:id",
      templateUrl: "partials/task_detail.html",
      controller: "EditTaskController as editCtrl"
    });

  $locationProvider.html5Mode(true)
});