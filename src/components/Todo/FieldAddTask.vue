<template>
  <v-text-field
    outlined
    hide-details
    v-model="newTaskTitle"
    label="Append"
    @keyup.enter="addTask"
  >
    <template v-slot:append>
      <v-icon :disabled="taskTitleInvalid" @click="addTask" color="primary">
        mdi-plus</v-icon
      >
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
      }else{
        console.log('Kosong cuy!')
      }
    },
  },
};
</script>

<style></style>
