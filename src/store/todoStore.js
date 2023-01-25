export function createTodoStore() {
  return {
    theme: "dark",
    filter: "all",
    tasks: [
      {
        id: 0,
        description: "Complete online JavaScript course",
        active: false,
      },
      {
        id: 1,
        description: "Jog around the park 3x",
        active: true,
      },
      {
        id: 2,
        description: "10 minutes meditation",
        active: true,
      },
      {
        id: 3,
        description: "Read for 1 hour",
        active: true,
      },
      {
        id: 4,
        description: "Pick up groceries",
        active: true,
      },
      {
        id: 5,
        description: "Complete Todo App on Frontend Mentor",
        active: true,
      },
    ],
    themeChange() {
      if (this.theme === "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
    },
    taskCounter() {
      const counter = this.tasks.filter((task) => task.active);
      return counter.length;
    },

    addTask(newTaskItem) {
      this.tasks.push(newTaskItem);
    },

    removeTask(id) {
      let index = this.tasks.findIndex((task) => task.id == id);
      this.tasks.splice(index, 1);
    },

    clearTasks() {
      this.tasks = this.tasks.filter((task) => task.active);
    },

    markDone(id) {
      let index = this.tasks.findIndex((task) => task.id == id);
      this.tasks[index].active = false;
    },

    markUndone(id) {
      let index = this.tasks.findIndex((task) => task.id == id);
      this.tasks[index].active = true;
    },

    filterChange(id) {
      switch (id) {
        case "all":
          this.filter = "all";
          break;
        case "active":
          this.filter = "active";
          break;
        case "completed":
          this.filter = "completed";
          break;
        default:
          this.filter = "all";
      }
    },
  };
}
