<template>
  <nav
    class="navbar bottom-border is-white"
    role="navigation"
    arial-label="main navigation"
  >
    <div class="navbar-brand ">
      <router-link to="/">
        <img
          src="/assets/img/logo-home-secours-large.png"
          width="250"
          class="pl-2 pt-2"
        />
      </router-link>
      <a class="navbar-burger mr-3 mt-3">
        <div class="icon is-large">
          <i class="mdi mdi-48px mdi-menu"></i>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
</style>
