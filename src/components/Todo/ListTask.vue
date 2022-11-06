<template>
  <v-list class="pt-0" flat>
    <draggable tag="ul" v-model="tasks" handle=".handle">
      <task v-for="task in tasks" :key="task.id" :task="task" />
    </draggable>
  </v-list>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  components: {
    task: require('@/components/Todo/Task.vue').default,
    draggable,
  },
  data() {
    return {
      deleteTask(id) {
        this.$store.commit('deleteTask', id);
      },
    };
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.taskFiltered;
      },
      set(value) {
        this.$store.dispatch('setTasks', value);
      },
    },
  },
};
</script>

<style></style>
