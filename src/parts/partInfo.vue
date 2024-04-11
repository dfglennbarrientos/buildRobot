<template>
    <div>
        <h1>{{ part.title }}</h1>
        {{ part.description }}
    </div>
</template>

<script setup>
import parts from '@/data/parts';
import { computed } from 'vue';
// import { useRoute } from 'vue-router';

 
const props = defineProps(['partType','id']);


const part = computed(  () => {
    /// is using "+" to cast to string

    // const route = useRoute();  
    // const partType = route.params.partType;
    // const partId = route.params.id;
    // const p = parts[partType].find( p => p.id === +partId  ) ;
    
    const p = parts[props.partType].find( p => p.id === +props.id  ) ;
    return p;
});


</script>