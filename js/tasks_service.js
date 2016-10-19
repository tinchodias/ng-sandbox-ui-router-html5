tasksListApp.service("TasksService", function () {

  this.tasksIds = 0;
  this.tasks = [
    {
      "id": "0",
      "description": "Finish everything tomorrow"
    }];

  this.createTask = function (description) {
    var task = new Task(description);
    task.id = this.tasksIds++;
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