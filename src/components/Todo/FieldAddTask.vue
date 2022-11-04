<template>
  <v-text-field
    outlined
    hide-details
    v-model="newTaskTitle"
    label="Append"
    append-icon="mdi-plus"
    @click:append="addTask"
    @keyup.enter="addTask"
  ></v-text-field>
</template>

<script>
export default {
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

<style></style>
