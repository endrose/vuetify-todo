import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      // { id: 1, title: 'Belajar Vuetify with VueJS', done: false, dueDate: '2022-11-01' },
      // { id: 2, title: 'Belajar NodeJS with NestJS', done: false, dueDate: '2022-11-05' },
      // { id: 3, title: 'Belajar CSS with TailwindCSS', done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: ''
    },
    sorting: false
  },
  getters: {
    taskFiltered(state) {
      if (!state.search) {
        return state.tasks
      }
      return state.tasks.filter(task => task.title.toLowerCase().includes(state.search.toLowerCase()))
    }
  },
  mutations: {
    addTask(state, newTask) {
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
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setSearch(state, value) {
      state.search = value
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
    },
    toogleSorting(state) {
      state.sorting = !state.sorting
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      };
      db.collection('tasks').add(newTask).then(() => {
        commit('addTask', newTask)
        commit('showSnackbar', 'Task Added!')
      })
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0]
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('doneTask', id)
      })
    },
    setTasks({ commit }, tasks) {
      db.collection('tasks').set(tasks).then(() => {
        commit('setTasks', tasks)
      })
    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    },
    deleteTask({ commit }, id) {
      db.collection('tasks').doc({ id: id }).delete().then(() => {
        commit('deleteTask', id)
        commit('showSnackbar', 'Task Deleted!')
      })
    },
    updateTaskTitle({ state, commit }, payload) {
      // let task = state.tasks.filter((task) => task.id === payload.id)[0]
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.title
      }).then(() => {
        commit('updateTaskTitle', payload)
        commit('showSnackbar', 'Task Updated!')
      })
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('updateTaskDueDate', payload)
        commit('showSnackbar', 'Due Date Updated!')
      })
    }
  },
  modules: {
  }
})
