<template>
    <div id="two-left-gater">
        <TwoLeftOne></TwoLeftOne>
        <TwoLeftTwo></TwoLeftTwo>
    </div>
</template>
<script>
import TwoLeftOne from './TwoLeftOne.vue'
import TwoLeftTwo from './TwoLeftTwo.vue'

export default{
    name:'TwoLeftGater',
    components: {
        TwoLeftOne,
        TwoLeftTwo
    }
}
</script>
<style>
#two-left-gater{
    width: 30%;
    height: 100%;
    float: left;
}
</style>