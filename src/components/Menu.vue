<template>
  <div class="container is-small-caps">
    <ul class="menu-list">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        :class="{ 'is-active': activeTab == tab.name }"
      >
        <a
          :name="tab.name"
          :class="{ 'is-active': activeTab == tab.name }"
          @click="onMenuClick"
          ><i v-if="tab.name == 'accueil'" class="fas fa-home mr-2"></i
          >{{ tab.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: function() {
    return {
      activeTab: 'accueil',
      tabList: [
        { name: 'accueil', text: 'accueil' },
        { name: 'propos', text: 'à propos' },
        { name: 'contact', text: 'contact' },
        { name: 'galerie', text: 'galerie' },
      ],
    };
  },
  computed: {
    isActive() {
      return this.activeTab;
    },
  },
  methods: {
    onMenuClick: function({ target }) {
      this.activeTab = target.name;
      this.$emit('menu', target.name);
    },
  },
};
</script>

<style></style>
