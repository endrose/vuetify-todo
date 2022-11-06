<template>
  <v-btn
    @click="$store.commit('toogleSorting')"
    color="primary"
    class="button-done-sorting"
  >
    Done Sorting
  </v-btn>
</template>

<script>
export default {};
</script>

<style lang="sass">
.button-done-sorting
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
</style>
