<template>
    <the-header title="My Test App"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import storedResources from './components/resources/StoredResources.vue';
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    storedResources,
    TheHeader,
  },
  data() {
    return {
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
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>