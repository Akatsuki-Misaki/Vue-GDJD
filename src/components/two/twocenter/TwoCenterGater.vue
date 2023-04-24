<template>
    <div id="two-center-gater">
        <TwoCenterOne></TwoCenterOne>
        <TwoCenterTwo></TwoCenterTwo>
    </div>
</template>
<script>
import TwoCenterOne from './TwoCenterOne.vue'
import TwoCenterTwo from './TwoCenterTwo.vue'

export default{
    name:'TwoCenterGater',
    components:{
        TwoCenterOne,
        TwoCenterTwo
    }
}
</script>
<style>
#two-center-gater{
    width: 40%;
    height: 100%;
    float: left;
}
</style>