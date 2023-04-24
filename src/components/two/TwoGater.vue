<template>
    <div id="two-gater">
        <TwoLeftGater></TwoLeftGater>
        <TwoCenterGater></TwoCenterGater>
        <TwoRightGater></TwoRightGater>
    </div>
</template>
<script>
import TwoLeftGater from './twoLeft/TwoLeftGater.vue';
import TwoCenterGater from './twocenter/TwoCenterGater.vue'
import TwoRightGater from './tworight/TwoRightGater.vue'

export default {
    name: 'TwoGater',
    components:{
        TwoLeftGater,
        TwoCenterGater,
        TwoRightGater
    }
}
</script>
<style>
#two-gater{
    width: 100%;
    height: 100%;
}
</style>