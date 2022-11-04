<template>
  <div>
    <v-list-item-group class="pt-0">
      <v-list-item
        @click="doneTask(task.id)"
        :class="{ 'blue lighten-5': task.done }"
        class="pa-0"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{
                'text-decoration-line-through': task.done,
              }"
              >{{ task.title }}</v-list-item-title
            >
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="red lighten-1" @click.stop="dialogs.delete = true"
                >mdi-delete</v-icon
              >
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <dialog-delete v-if="dialogs.delete" :task="task" @close="closeDialog" />
    </v-list-item-group>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      dialogs: {
        delete: false,
      },
    };
  },
  components: {
    'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue')
      .default,
  },

  methods: {
    doneTask(id) {
      this.$store.commit('doneTask', id);
    },
    deleteTask(id) {
      this.$store.dispatch('deleteTask', id);
    },
    closeDialog() {
      this.dialogs.delete = false;
    },
  },
};
</script>
