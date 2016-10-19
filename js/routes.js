'use strict';

tasksListApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('tasksMain', {
      url: "/",
      templateUrl: "partials/tasks_main.html",
      controller: "AddTaskController as tasksCtrl"
    })

    .state('taskDetail', {
      url: "/task/:id",
      templateUrl: "partials/task_detail.html",
      controller: "EditTaskController as editCtrl"
    });

  $locationProvider.html5Mode(true)
});