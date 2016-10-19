tasksListApp.service("TasksService", function () {

  this.tasksIds = 0;
  this.tasks = [];

  this.crearTask = function (description) {
    var task = new Task(description);
    task.id = this.tasksIds++;
    return task;
  };

  this.agregarTask = function (task) {
    this.tasks.push(task);
  };

  this.getTaskById = function (id) {
    
    return this.tasks.find(function (task) {
      return task.id == id;
    })
  };

});