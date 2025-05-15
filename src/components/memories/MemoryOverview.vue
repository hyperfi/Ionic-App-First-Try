<template>
    <ion-card v-if="memory">
        <ion-card-header>
            <ion-card-title>{{ memory.title }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <p>{{ memory.description }}</p>
            <ion-img :src="memory.image" alt="Memory Image"></ion-img>
        </ion-card-content>
    </ion-card>
    <p v-else>Memory not found.</p>
</template>
<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/vue';
export default {
    props: {
        memory: {
            type: Object,
            required: true
        }
    },
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonImg
    },
};
</script>