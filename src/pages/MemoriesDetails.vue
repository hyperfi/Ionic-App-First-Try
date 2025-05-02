<template>
    <base-layout :title="memory ? memory.title : 'Loading...'" defaultBackHref="/memories">
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
    </base-layout>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/vue';
export default {

    data() {
        return {
            id: this.$route.params.id,
        };
    },
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonImg
    },
    
    // watch: {
    //     '$route'(currentRoute) {
    //         this.id = currentRoute.params.id;
            
    //     }
    // },
    computed: {
        memory() {
            // console.log(this.id, 'currentRoute.params.id',this.$store.getters.getMemoryById(this.id));
            return this.$store.getters.getMemoryById(this.id);
        }

    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>