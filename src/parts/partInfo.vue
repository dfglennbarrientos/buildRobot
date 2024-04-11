<template>
    <div>
        <h1>{{ part.title }}</h1>
        {{ part.description }}
    </div>
</template>

<script setup>
import parts from '@/data/parts';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


    // const part = {
    //     title:"Glenn",
    //     description:"LeionePavel",
    // };

const part = computed(  () => {
    console.log("in parts");
    const route = useRoute();  
    
    const partType = route.params.partType;
    const partId = route.params.id;
    // console.log("partType"+partType);
    // console.log("partId:"+partId);

    // const p = parts[partType][partId];
    /// is using "+" to cast to string
    const p = parts[partType].find( p => p.id === +partId  ) ;

    // console.log(p);
    return p;
});


</script>