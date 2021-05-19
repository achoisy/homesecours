<template>
  <transition :name="transitionName">
    <router-view :class="{ 'on-top': isOnTop }" />
  </transition>
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
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      console.log('to.path: ', to.path);
      console.log('from.path: ', from.path);
      this.transitionName = to.path == '/' ? 'slide-right' : 'slide-left';
      this.isOnTop = to.path != '/';
      console.log('this.transitionName: ', this.transitionName);
    },
  },
  components: {},
};
</script>

<style lang="scss">
// Import Bulma and Buefy styles
@import './styles/default.scss';
.on-top {
  z-index: 999;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-out;
}

.slide-right-enter-to {
  position: absolute;
  left: 0;
}

.slide-right-enter-from {
  position: absolute;
  left: -100%;
}

.slide-right-leave-to {
  position: absolute;
  right: -100%;
}

.slide-right-leave-from {
  position: absolute;
  right: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease-out;
}

.slide-left-enter-to {
  position: absolute;
  right: 0;
}

.slide-left-enter-from {
  position: absolute;
  right: -100%;
}

.slide-left-leave-to {
  position: absolute;
  left: -100%;
}

.slide-left-leave-from {
  position: absolute;
  left: 0;
}
</style>
