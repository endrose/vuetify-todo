<template>
  <v-list class="pt-0" flat>
    <task v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
export default {
  components: {
    task: require('@/components/Todo/Task.vue').default,
  },
  data() {
    return {
      deleteTask(id) {
        this.$store.commit('deleteTask', id);
      },
    };
  },
};
</script>

<style></style>
