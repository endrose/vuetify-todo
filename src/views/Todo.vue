<template>
  <div class="home">
    <!-- LIST TODO -->
    <list-task v-if="$store.state.tasks.length" />
    <no-task v-else />

    <button-done-sorting v-if="$store.state.sorting" />
  </div>
</template>

<script>
import ButtonDoneSorting from '@/components/Todo/ButtonDoneSorting.vue';
export default {
  name: 'Home',
  components: {
    'list-task': require('@/components/Todo/ListTask.vue').default,
    'no-task': require('@/components/Todo/NoTask.vue').default,
    'button-done-sorting': require('@/components/Todo/ButtonDoneSorting.vue')
      .default,
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
