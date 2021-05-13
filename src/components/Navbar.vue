<template>
  <nav
    class="navbar bottom-border is-white"
    role="navigation"
    arial-label="main navigation"
  >
    <div class="navbar-brand ">
      <router-link to="/">
        <div class="block">
          <img :src="`/assets/img/logo-${isMobile ? '42x42' : '82x82'}.png`" />
          <img
            :src="
              `/assets/img/logo-home-secours-${
                isMobile ? 'small' : 'medium'
              }.png`
            "
          />
        </div>
      </router-link>
      <a
        role="button"
        class="navbar-burger is-hidden-tablet is-align-self-center"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {};
  },
  computed: {
    isMobile: function() {
      return this.$screen.width < 1024 ? true : false;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';

.bottom-border {
  border-bottom: 0.5px solid rgba($grey-light, 1);
}

.navbar-burger .icon {
  color: $grey;
}
.navbar-brand .block {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
</style>
