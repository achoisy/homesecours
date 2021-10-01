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
        >
          <i class="fas mr-2" :class="`${tab.icon}`"></i>
          {{ tab.text }}
        </a>
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
        { name: 'accueil', text: 'accueil', icon: 'fa-home' },
        { name: 'propos', text: 'à propos', icon: 'fa-info' },
        { name: 'contact', text: 'contact', icon: 'fa-compass' },
        // { name: 'galerie', text: 'galerie' },
      ],
    };
  },
  mounted: function() {
    if (this.$route.name) {
      this.activeTab = this.$route.name;
    }
  },
  computed: {
    isActive() {
      return this.activeTab;
    },
  },
  methods: {
    onMenuClick: function({ target }) {
      if (this.activeTab != target.name) {
        // this.$emit('close');
        this.activeTab = target.name;
        this.$router.push(target.name);
        this.$emit('close');
      }
    },
  },
};
</script>

<style></style>
