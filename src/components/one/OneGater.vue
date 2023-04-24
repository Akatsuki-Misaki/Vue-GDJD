<template>
    <div id="one-box">
        <OneleftGater></OneleftGater>
        <OneCenterGater></OneCenterGater>
        <OneRightGater></OneRightGater>
    </div>
</template>
<script>
import OneleftGater from './oneLeft/OneLeftGater.vue'
import OneCenterGater from './onecenter/OneCenterGater.vue';
import OneRightGater from './oneright/OneRightGater.vue';

export default {
    name: 'OneGater',
    components: {
        OneleftGater,
        OneCenterGater,
        OneRightGater
    }
}
</script>
<style>
#one-box{
    width: 100%;
    height: 100%;
}
</style>