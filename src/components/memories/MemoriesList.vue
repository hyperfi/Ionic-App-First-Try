<template>
    <ion-list>
        <memories-list-item
            v-for="memory in memories"
            :key="memory.id"
            :memory="memory"
        />
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import MemoriesListItem from './MemoriesListitem.vue';
export default {
    components: {
        IonList,
        MemoriesListItem
    },
    props: {
        memories: {
            type: Array,
            required: true
        }
    }
};

</script>