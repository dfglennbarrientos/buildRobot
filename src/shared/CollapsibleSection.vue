<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open=!open">&#x25B2; Collapse</span>
            <span v-if="!open" @click="open=!open">&#x25BC; Expand</span>
        </div>
        <slot v-if="open">
            this is a default content, it may not be working
        </slot>
    </div>
</template>

<script setup>    
    import {ref} from "vue";
    const open = ref(true);
</script>

<style>
.header{
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
    font-size: 22px;
}
</style>