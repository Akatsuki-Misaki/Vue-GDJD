<template>
    <div id="one-center-merge">
        <div id="one-center-merge-top">
            <OneCenterOne></OneCenterOne>
            <OneCenterTwo></OneCenterTwo>
        </div>
        <div id="one-center-merge-buttom">
            <OneCenterThree></OneCenterThree>
        </div>
    </div>
</template>
<script>
import OneCenterOne from './OneCenterOne.vue'
import OneCenterTwo from './OneCenterTwo.vue'
import OneCenterThree from './OneCenterThree.vue'

export default{
    name: 'OneCenterGater',
    components:{
        OneCenterOne,
        OneCenterTwo,
        OneCenterThree
    }
}
</script>
<style>
#one-center-merge{
    float: left;
    width: 46%;
    height: 100%;
    box-sizing: border-box;
}
#one-center-merge-top{
    width: 100%;
    height: 36%; 
}
#one-center-merge-buttom{
    width: 100%;
    height: 64%;
}
</style>