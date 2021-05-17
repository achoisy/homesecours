<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        HOME SECOURS <br />
        6 Lot duplan, 97200 Fort-de-France <br />
        N° RCS: Fort-de-France B 801 724 832
      </p>
      <p>
        © Home Secours 2021
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
@import '../styles/colors';

.footer {
  background-color: $cyan;
  color: white;
}
</style>
