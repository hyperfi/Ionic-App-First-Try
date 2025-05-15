<template>
    <ion-item>
          <ion-thumbnail slot="start">
            <ion-img :src="memory.image"></ion-img>
          </ion-thumbnail>
          
          <ion-label :router-link="`/memories/${memory.id}`">{{ memory.title }}</ion-label>
    </ion-item>
</template>

<script>    
import { IonItem, IonLabel, IonImg, IonThumbnail } from '@ionic/vue';
export default {
    props: {
        memory: {
            type: Object,
            required: true
        }
    },
  components: {
    IonItem,
    IonLabel,
    IonImg,
    IonThumbnail,
  }
};

</script>