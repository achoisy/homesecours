<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      transitionName: 'slide-left',
      isOnTop: false,
    };
  },
  components: {},
};
</script>

<style lang="scss">
// Import Bulma and Buefy styles
@import './styles/default.scss';
</style>
