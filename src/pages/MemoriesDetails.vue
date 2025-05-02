<template>
    <base-layout title="Memory Details" defaultBackHref="/memories">
        <ion-card>
            <ion-card-header>
                <ion-card-title>{{ memory.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <p>{{ memory.description }}</p>
                <ion-img :src="memory.image" alt="Memory Image"></ion-img>
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/vue';
export default {
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonImg
    },
    computed: {
        memory() {
            console.log(this.$route.params.id,this.$store.getters.getMemoryById(this.$route.params.id));
            return this.$store.getters.getMemoryById(this.$route.params.id);
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>