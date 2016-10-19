tasksListApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider

    .state('agregarTask', {
      url: "/",
      templateUrl: "partials/agregar_task.html",
      controller: "AgregarTaskController as tasksCtrl"
    })

    .state('editarTask', {
      url: "/task/:id",
      templateUrl: "partials/editar_task.html",
      controller: "EditarTaskController as editarCtrl"
    });

  $locationProvider.html5Mode(true)//.hashPrefix('!')
});