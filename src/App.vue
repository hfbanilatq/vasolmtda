<template>
  <div id="app">
      <VaSoHeader />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import VaSoHeader from '@/components/VaSoHeader.vue';

export default {
  name: 'app',
  components: {
    VaSoHeader,
  },
};
</script>
