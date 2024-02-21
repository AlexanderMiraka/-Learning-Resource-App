<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="selectedTab === 'stored-resources' ? null : 'flat'"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="selectedTab === 'add-resource' ? null : 'flat'"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';
export default {
  components: {
    BaseButton,
    StoredResources, // eslint-disable-line vue/no-unused-components
    AddResource, // eslint-disable-line vue/no-unused-components
    BaseCard,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'official guide',
          description: 'The official vbue documentation',
          link: 'vuejs.org',
        },
        {
          id: 'google',
          title: 'google',
          description: 'Learn to google',
          link: 'google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
  },
};
</script>
