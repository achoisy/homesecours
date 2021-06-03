<template>
  <transition :name="transionName">
    <router-view class="child-view"></router-view>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {
      transionName: 'move-left',
    };
  },
  watch: {
    $route(to, from) {
      this.transionName =
        from.meta.index > to.meta.index ? 'move-right' : 'move-left';
    },
  },
};
</script>

<style scoped>
.child-view {
  width: 100%;
  left: 0;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.move-left-enter,
.move-right-leave-active {
  position: absolute;
  opacity: 0;
  -webkit-transform: translateX(80%);
  transform: translateX(80%);
}
.move-left-leave-active,
.move-right-enter {
  position: absolute;
  opacity: 0;
  -webkit-transform: translateX(-80%);
  transform: translateX(-80%);
}
</style>
