<template>
  <div class="home">
    <!-- ADD TODO -->
    <field-add-task />
    <!-- LIST TODO -->
    <list-task v-if="$store.state.tasks.length" />
    <no-task v-else />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
    'list-task': require('@/components/Todo/ListTask.vue').default,
    'no-task': require('@/components/Todo/NoTask.vue').default,
  },
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch('addTask', this.newTaskTitle);
      this.newTaskTitle = '';
    },
  },
};
</script>
