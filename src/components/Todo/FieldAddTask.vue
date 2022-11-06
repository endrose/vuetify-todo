<template>
  <v-text-field
    outlined
    hide-details
    v-model="newTaskTitle"
    placeholder="Add Task"
    class="field-add-task pa-3"
    @keyup.enter="addTask"
  >
    <template v-slot:append>
      <v-icon :disabled="taskTitleInvalid" @click="addTask"> mdi-plus</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if (!this.taskTitleInvalid) {
        this.$store.dispatch('addTask', this.newTaskTitle);
        this.newTaskTitle = '';
      } else {
        console.log('Kosong cuy!');
      }
    },
  },
};
</script>

<style lang="sass">
  .field-add-task.v-input--is-focused
    .v-input__slot
      background-color: rgba(31,94,129,0.5)
</style>
