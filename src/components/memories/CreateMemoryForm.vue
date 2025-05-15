<template>
    <form @submit.prevent="submitForm" class="ion-padding">
        <ion-list> 
            <ion-item>
                <ion-input label="Title" label-placement="floating"  v-model="title" type="text" placeholder="Enter title" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label="Image URL" label-placement="floating" v-model="imageUrl" type="url" placeholder="Enter image URL" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-textarea rows="4" label="Description" label-placement="floating" v-model="description" placeholder="Enter description" required></ion-textarea>
            </ion-item>
            <ion-button v-if="title && imageUrl && description" expand="full" type="submit">Add Memory</ion-button>
            <ion-button v-else expand="full" disabled>Add Memory</ion-button>
        </ion-list>
    </form>
</template>

<script>    
    import { IonItem, IonInput, IonButton, IonTextarea, IonList } from '@ionic/vue';
    export default {
    emits: ['addMemory'],
    data() {
        return {
            title: '',
            imageUrl: '',
            description: ''
        };
    },
    components: {
        IonItem,
        IonInput,
        IonButton,
        IonTextarea,
        IonList
    },
    methods: {
        submitForm() {
            const newMemory = {
                id: Math.floor(Math.random() * 1000000), // Use a random id generator which generates integers
                title: this.title,
                image: this.imageUrl,
                description: this.description
            };
            this.$emit('addMemory', newMemory);
            this.title = '';
            this.imageUrl = '';
            this.description = '';
        }
    }
};
</script>
