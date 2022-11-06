<template>
  <v-snackbar color="green" v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="hideSnackbar"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    hideSnackbar() {
      this.$store.commit('hideSnackbar');
    },
  },
};
</script>

<style lang="sass">
  div.v-snack:not(.v-snack--absolute) 
      height: 100%
</style>
