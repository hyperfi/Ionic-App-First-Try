<template>
    <base-layout title="Memory Details" defaultBackHref="/memories">
        <ion-card>
            <ion-card-header>
                <ion-card-title>{{ memory.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <p>{{ memory.description }}</p>
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
export default {
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
    },
    data() {
        return {
            memory: {
                title: 'Memory Title',
                description: 'This is a detailed description of the memory.'
            }
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>