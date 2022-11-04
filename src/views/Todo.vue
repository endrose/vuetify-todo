<template>
  <div class="home">
    <!-- ADD TODO -->

    <v-text-field
      outlined
      hide-details
      v-model="newTaskTitle"
      label="Append"
      append-icon="mdi-plus"
      @click:append="addTask"
      @keyup.enter="addTask"
    ></v-text-field>
    <!-- LIST TODO -->
    <div v-if="$store.state.tasks.length">
      <v-list flat v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item-group class="pt-0">
          <v-list-item
            @click="doneTask(task.id)"
            :class="{ 'blue lighten-5': task.done }"
            class="pa-0"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value="task.done"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{
                    'text-decoration-line-through': task.done,
                  }"
                  >{{ task.title }}</v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="blue lighten-1" @click="deleteTask(task.id)"
                    >mdi-delete</v-icon
                  >
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-item-group>
      </v-list>
    </div>
    <div v-else class="no-tasks">
      <v-icon size="100" color="primary">mdi-check</v-icon>
      <div class="text-h5 primary--text">No Task</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      newTaskTitle: '',
      tasks: [
        { id: 1, title: 'Belajar Vuetify with VueJS', done: false },
        { id: 2, title: 'Belajar NodeJS with NestJS', done: false },
        { id: 3, title: 'Belajar CSS with TailwindCSS', done: false },
      ],
    };
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTaskTitle);
      this.newTaskTitle = '';
    },
    doneTask(id) {
      this.$store.commit('doneTask', id);
    },
    deleteTask(id) {
      this.$store.commit('deleteTask', id);
    },
  },
};
</script>

<style lang="sass">
.no-tasks
 position: absolute
 left: 50%
 top: 50%
 transform: translate(-50%, -50%)
 opacity: 0.5
</style>
