<template>
    <div id="right-merge">
        <OneRightOne></OneRightOne>
        <OneRightTwo></OneRightTwo>
    </div>
</template>
<script>
import OneRightOne from './OneRightOne.vue';
import  OneRightTwo  from './OneRightTwo.vue';

export default {
    name: 'rightMerge.vue',
    components: {
        OneRightOne,
        OneRightTwo,
    }
}
</script>
<style>
#right-merge {
    float: left;
    width: 27%;
    height: 87vh;
}
</style>