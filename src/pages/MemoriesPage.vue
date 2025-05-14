<template>
  <base-layout title="All Memories">
      <memories-list :memories="memories" />
  </base-layout>
   
</template>


<script>

import MemoriesList from '@/components/memories/MemoriesList.vue';
export default {
  components: {
    MemoriesList
  },

  computed: {
    memories() {
      return this.$store.getters.getMemories;
    },
  },
};
</script>

