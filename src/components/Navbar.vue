<template>
  <nav
    class="navbar bottom-border is-white"
    role="navigation"
    arial-label="main navigation"
  >
    <div
      class="navbar-brand "
      :class="{ 'navbar-fixed-size': $screen.breakpoint == 'mobile' }"
    >
      <router-link to="/">
        <div class="block">
          <img :src="`/assets/img/logo-${isMobile ? '42x42' : '62x62'}.png`" />
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
        :class="{ 'is-active': sidebarIsOpen }"
        aria-label="menu"
        aria-expanded="false"
        @click="sideBarToggle"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <b-sidebar
      type="is-white"
      :mobile="'reduce'"
      fullheight
      right
      v-model="sidebarIsOpen"
    >
      <a
        role="button"
        class="navbar-burger on-left"
        :class="{ 'is-active': sidebarIsOpen }"
        aria-label="menu"
        aria-expanded="false"
        @click="sideBarToggle"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <aside class="menu">
        <Menu />
      </aside>
    </b-sidebar>
  </nav>
</template>

<script>
import Menu from './Menu';

export default {
  name: 'Navbar',
  components: {
    Menu,
  },
  data: function() {
    return {
      sidebarIsOpen: false,
    };
  },
  computed: {
    isMobile: function() {
      return this.$screen.width < 1024 ? true : false;
    },
  },
  methods: {
    sideBarToggle: function() {
      this.sidebarIsOpen = !this.sidebarIsOpen;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/colors';
@import '../styles/responsive';

.bottom-border {
  border-bottom: 0.5px solid rgba($grey-light, 1);
}

.navbar-fixed-size {
  height: $navbar-height;
}

.navbar-burger .icon {
  color: $grey;
}

.b-sidebar .navbar-burger {
  margin-left: 0 !important;
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
