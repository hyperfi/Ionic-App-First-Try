<template>
  <base-layout title="All Memories">
      <ion-list>
        <ion-item v-for="memory in memories" :key="memory.id">
          <ion-thumbnail slot="start">
            <ion-img :src="memory.image"></ion-img>
          </ion-thumbnail>
          
          <ion-label :router-link="`/memories/${memory.id}`">{{ memory.title }}</ion-label>
        </ion-item>
      </ion-list>
  </base-layout>
   
</template>


<script>
import { IonList, IonItem, IonLabel, IonImg, IonThumbnail } from '@ionic/vue';
export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonImg,
    IonThumbnail,
  },

  computed: {
    memories() {
      return this.$store.getters.getMemories;
    },
  },
};
</script>

