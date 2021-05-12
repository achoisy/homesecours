<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
// Import Bulma and Buefy styles
@import './styles/default.scss';

.main-section {
  padding: 1em;
  height: 100vh;
}
</style>
