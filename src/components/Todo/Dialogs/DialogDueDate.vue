<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="close"> Cancel </v-btn>
      <v-btn text color="primary" :disabled="dueDateInvalid" @click="saveTask">
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      date: null,
    };
  },
  computed: {
    dueDateInvalid() {
      return !this.date;
    },
  },
  methods: {
    saveTask() {
      if (!this.dueDateInvalid) {
        let payload = {
          id: this.task.id,
          dueDate: this.date,
        };

        this.$store.dispatch('updateTaskDueDate', payload);
        this.close();
      }
    },
    close() {
      this.$emit('close');
    },
  },
  mounted() {
    this.date = this.task.dueDate;
  },
};
</script>

<style></style>
