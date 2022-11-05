<template>
  <div>
    <v-list-item-group class="pt-0">
      <v-list-item
        @click="doneTask(task.id)"
        :class="{ 'blue lighten-5': task.done }"
        class="pa-0"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{
                'text-decoration-line-through': task.done,
              }"
              >{{ task.title }}</v-list-item-title
            >
          </v-list-item-content>
          <!-- COMP ACTION DUE DATE -->
          <v-list-item-action v-if="task.dueDate">
            <v-list-item-action-text>
              <v-icon small>mdi-calendar</v-icon>
              {{ task.dueDate | niceDate }}</v-list-item-action-text
            >
          </v-list-item-action>
          <!-- COMP ACTION TASK MENU -->
          <v-list-item-action>
            <task-menu :task="task" />
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </v-list-item-group>
  </div>
</template>

<script>
import { format } from 'date-fns';
export default {
  props: ['task'],
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), 'MMM d');
    },
  },
  components: {
    'task-menu': require('@/components/Todo/TaskMenu.vue').default,
  },

  methods: {
    doneTask(id) {
      this.$store.commit('doneTask', id);
    },
    deleteTask(id) {
      this.$store.dispatch('deleteTask', id);
    },
  },
};
</script>
