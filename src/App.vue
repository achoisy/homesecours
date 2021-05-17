<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  data: function() {
    return {};
  },
  components: {
    Navbar,
    Footer,
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
