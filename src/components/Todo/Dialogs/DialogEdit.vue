<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">
        Edit task `<span class="primary--text">{{ task.id }}</span> ` ?
      </v-card-title>
      <v-card-text
        >Edit the title of this task :

        <v-text-field v-model="taskTitle" @keyup.enter="saveTask" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Disagree </v-btn>
        <v-btn
          :disabled="taskTitleInvalid"
          color="primary darken-1"
          text
          @click="saveTask"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.task.title === this.taskTitle;
    },
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };

        this.$store.dispatch('updateTaskTitle', payload);
        this.$emit('close');
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
    console.log({ props: this.task });
  },
};
</script>

<style></style>
