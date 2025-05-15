<template>
    <base-layout :title="memory ? memory.title : 'Loading...'" defaultBackHref="/memories">
        <memory-overview v-if="memory" :memory="memory" />
    </base-layout>
</template>

<script>

import MemoryOverview from '@/components/memories/MemoryOverview.vue';
export default {

    data() {
        return {
            id: this.$route.params.id,
        };
    },
    components: {
        MemoryOverview
    },

    computed: {
        memory() {
            // console.log(this.id, 'currentRoute.params.id',this.$store.getters.getMemoryById(this.id));
            return this.$store.getters.getMemoryById(this.id);
        }

    }
};
</script>