<template>
  <div :ref="sentinalName" class="observer" />
</template>

<script>
export default {
  name: 'IntersectionObserver',
  props: {
    sentinalName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isIntersectingElement: false,
    };
  },
  watch: {
    isIntersectingElement: function(value) {
      this.$emit('on-intersection-element', value);
    },
  },
  mounted() {
    const sentinal = this.$refs[this.sentinalName];

    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        this.isIntersectingElement = true;
      } else {
        this.isIntersectingElement = false;
      }
    };

    const observer = new window.IntersectionObserver(handler);

    observer.observe(sentinal);
  },
};
</script>
<style scoped>
.observer {
  position: relative;
  width: 100%;
  height: 1px;
}
</style>
