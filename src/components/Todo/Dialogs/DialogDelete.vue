<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete task {{ task.id }}? </v-card-title>
      <v-card-text
        >Are your sure delete this task `<span class="red--text">{{
          task.title
        }}</span
        >` .</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Disagree </v-btn>
        <v-btn color="red darken-1" text @click="deleteTask"> Agree </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.id);
      this.$emit('close');
    },
  },
};
</script>

<style></style>
