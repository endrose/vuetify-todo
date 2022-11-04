import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Belajar Vuetify with VueJS', done: false },
      { id: 2, title: 'Belajar NodeJS with NestJS', done: false },
      { id: 3, title: 'Belajar CSS with TailwindCSS', done: false },
    ],
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
      console.log('Add Task ' + JSON.stringify(newTask));
    },
    doneTask(state, id) {
      let task = state.tasks.filter((item) => item.id === id)[0]
      task.done = !task.done

      console.log(state.tasks.done)
    },
    deleteTask(state, id) {
      const findIndex = state.tasks.findIndex((find) => find.id === id);

      state.tasks.splice(findIndex, 1);
      alert(`Index : ${findIndex} Id : ${id}`);
      console.log('Index : ', findIndex + ' ' + 'Id : ' + id);
    },
  },
  actions: {
  },
  modules: {
  }
})
