<template>
  <base-layout title="All Memories">
  <template v-slot:right>
    <ion-button router-link="/memories/add">
      <ion-icon slot="icon-only" :icon="addCircleOutline"></ion-icon>
    </ion-button>
  </template>
      <memories-list :memories="memories" />
  </base-layout>
   
</template>


<script>

import MemoriesList from '@/components/memories/MemoriesList.vue';
import { IonButton, IonIcon } from '@ionic/vue';
import { addCircleOutline } from 'ionicons/icons';
export default {
  data() {
    return {
      addCircleOutline
    };
  },
  components: {
    MemoriesList,
    IonButton,
    IonIcon,
  },

  computed: {
    memories() {
      return this.$store.getters.getMemories;
    },
  },
};
</script>

