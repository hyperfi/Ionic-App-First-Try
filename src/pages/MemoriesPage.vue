<template>
  <base-layout title="All Memories">
      <ion-list>
        <ion-item v-for="memory in memories" :key="memory.id">
          <ion-label router-link="/memories/{{ memory.id }}">{{ memory.title }}</ion-label>
        </ion-item>
      </ion-list>
  </base-layout>
   
</template>


<script>
import { IonList, IonItem, IonLabel } from '@ionic/vue';
export default {
  components: {
    IonList,
    IonItem,
    IonLabel
  },
  data() {
    return {
      memories: [
          { id: 1, title: 'Memory 1' },
          { id: 2, title: 'Memory 2' },
          { id: 3, title: 'Memory 3' },
      ],
    };
  }
};
</script>

