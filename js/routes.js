tasksListApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('addTask', {
      url: "/",
      templateUrl: "partials/add_task.html",
      controller: "AddTaskController as tasksCtrl"
    })

    .state('editTask', {
      url: "/task/:id",
      templateUrl: "partials/edit_task.html",
      controller: "EditTaskController as editCtrl"
    });

  $locationProvider.html5Mode(true)//.hashPrefix('!')
});