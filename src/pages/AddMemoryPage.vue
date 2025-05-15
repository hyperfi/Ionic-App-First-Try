<template>
<!-- add form to add new memory -->
    <base-layout title="Add Memory" defaultBackHref="/memories">
        <CreateMemoryForm  @addMemory="addMemory" />
    </base-layout>
</template>

<script>

import CreateMemoryForm from '@/components/memories/CreateMemoryForm.vue';

export default {
    components: {
        CreateMemoryForm
    },
    methods: {
        addMemory(newMemory) {
            this.$store.dispatch('addMemory', newMemory);
            this.title = '';
            this.imageUrl = '';
            this.description = '';
            this.$router.replace('/memories');
        }
    }
};
</script>