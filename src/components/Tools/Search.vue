<template>
  <v-text-field
    :value="$store.state.search"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    :disabled="$store.state.sorting"
    v-model="search"
    class="expanding-search mt-1"
    :class="{ closed: searchClosed && !$store.state.search }"
    placeholder="Search"
    dense
    filled
    clearable
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      searchClosed: true,
    };
  },

  computed: {
    invalidSearch() {
      return !this.searchClosed;
    },
  },
};
</script>

<style lang="sass">
.expanding-search
    transition: max-width 0.5s
    cursor: pointer !important
    .v-input-slot
    &:before, &:after
    border-color: transparent !important
    &.closed
        max-width: 45px
    .v-input__slot
     background: transparent !important
</style>
