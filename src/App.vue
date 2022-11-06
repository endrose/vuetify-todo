<template>
  <v-app id="inspire" class="pt-0">
    <v-navigation-drawer app v-model="drawer" :mobile-breakpoint="768">
      <v-img
        src="mountains.jpg"
        height="170"
        class="pa-4 pt-7"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <!-- Avatar -->
        <v-avatar class="pa-4 mb-2" size="70">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Endros" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Endrose New
        </div>
        <div class="white--text text-subtitle-2">endrose</div>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      src="mountains.jpg"
      prominent
      :height="$route.path === '/' ? '238' :'170' "
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"
        >
        </v-img>
      </template>

      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <!-- Search -->
          <search />
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">{{
            $store.state.appTitle
          }}</v-toolbar-title>
        </v-row>

        <v-row>
          <!-- Live Date Time -->
          <live-date-time />
        </v-row>

        <v-row v-if="$route.path === '/'">
          <!-- ADD TODO -->
          <field-add-task />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
        <snackbar />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    snackbar: require('@/components/Shared/Snackbar.vue').default,
    search: require('@/components/Tools/Search.vue').default,
    liveDateTime: require('@/components/Tools/LiveDateTime.vue').default,
    'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
  },
  data() {
    return {
      items: [
        {
          title: 'Todo',
          icon: 'mdi-format-list-checks',
          to: '/',
        },
        {
          title: 'About',
          icon: 'mdi-help-box',
          to: '/about',
        },
      ],
      right: null,
      drawer: null,
    };
  },
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE;
    },
  },
  mounted() {
    console.log(this.$route);
    this.$store.dispatch('getTasks');
  },
};
</script>
<style lang="sass">
.header-container
 max-width: none !important
</style>
