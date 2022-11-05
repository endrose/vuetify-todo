import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Belajar Vuetify with VueJS', done: false, dueDate: '2022-11-01' },
      { id: 2, title: 'Belajar NodeJS with NestJS', done: false, dueDate: '2022-11-05' },
      { id: 3, title: 'Belajar CSS with TailwindCSS', done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      };
      state.tasks.push(newTask);
      console.log('Add Task ' + JSON.stringify(newTask));
    },
    doneTask(state, id) {
      let task = state.tasks.filter((item) => item.id === id)[0]
      task.done = !task.done

      console.log(task.done)
    },
    deleteTask(state, id) {
      const findIndex = state.tasks.findIndex((find) => find.id === id);

      state.tasks.splice(findIndex, 1);
      console.log('Index : ', findIndex + ' ' + 'Id : ' + id);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((item) => item.id === payload.id)[0]

      task.title = payload.title
      console.log('payload', payload, 'task filter', task)
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((item) => item.id === payload.id)[0];
      task.dueDate = payload.dueDate
      console.log('payload', payload, 'task filter dueDate', task)
    },
    showSnackbar(state, text) {
      let timeout = 0

      if (state.snackbar.show) {
        state.snackbar.show = !state.snackbar.show
        timeout = 300
      }

      setTimeout(() => {
        state.snackbar.show = !state.snackbar.show
        state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = !state.snackbar.show
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task Added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task Deleted!')
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task Updated!')
    },
    updateTaskDueDate({ commit }, payload) {
      commit('updateTaskDueDate', payload)
      commit('showSnackbar', 'Due Date Updated!')
    }
  },
  modules: {
  }
})
