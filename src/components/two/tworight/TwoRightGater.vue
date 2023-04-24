<template>
    <div id="two-right-gater">
        <TwoRightOne></TwoRightOne>
        <TwoRightTwo></TwoRightTwo>
        <TwoRightThree></TwoRightThree>
    </div>
</template>
<script>
import TwoRightOne from './TwoRightOne.vue';
import TwoRightTwo from './TwoRightTwo.vue';
import TwoRightThree from './TwoRightThree.vue';

export default{
    name:'TwoRightGater',
    components:{
        TwoRightOne,
        TwoRightTwo,
        TwoRightThree
    }
}
</script>
<style>
#two-right-gater{
    width: 30%;
    height: 100%;
    float: left;
}
</style>