<template>
  <div class="about pa-6">
    <h1>About {{ $store.state.appTitle }}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque,
      obcaecati impedit porro atque vel autem nostrum ex perspiciatis quia error
      harum odio enim veritatis, veniam laboriosam similique, ut itaque!
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE;
    },
  },
};
</script>
