<template>
    <div id="one-left-gater">
        <OneLeftOne></OneLeftOne>
        <OneLeftTwo></OneLeftTwo>
    </div>
</template>
<script>
import OneLeftOne from './OneLeftOne.vue'
import OneLeftTwo from './OneLeftTwo.vue'

export default {
    name: 'OneLeftGater',
    components: {
        OneLeftOne,
        OneLeftTwo
    }
}
</script>
<style>
#one-left-gater {
    float: left;
    width: 27%;
    height: 100%;
}
</style>