<template>
    <div id="three-gater">
        <div id="three-gater-left">
            <div id="three-gater-left-top">
                <ThreeLeftTopOne></ThreeLeftTopOne>
                <ThreeleftTopTwo></ThreeleftTopTwo>
            </div>
            <div id="three-gater-left-bottom">
                <ThreeLeftBottomOne></ThreeLeftBottomOne>
                <ThreeLeftBottomTwo></ThreeLeftBottomTwo>
            </div>
        </div>
        <div id="three-gater-right"><ThreeRight></ThreeRight></div>
    </div>
</template>
<script>
import ThreeLeftTopOne from './ThreeLeftTopOne.vue';
import ThreeleftTopTwo from './ThreeLeftTopTwo.vue';
import ThreeLeftBottomOne from './ThreeLeftBottomOne.vue';
import ThreeLeftBottomTwo from './ThreeLeftBottomTwo.vue';
import ThreeRight from './ThreeRight.vue';

export default{
    name: 'ThreeGater',
    components: {
        ThreeLeftTopOne,
        ThreeleftTopTwo,
        ThreeLeftBottomOne,
        ThreeLeftBottomTwo,
        ThreeRight
    }
}
</script>
<style>
#three-gater{
    width: 100%;
    height: 100%;
}
#three-gater-left{
    width: 60%;
    height: 100%;
    float: left;
}
#three-gater-right{
    width: 40%;
    height: 100%;
    float: left;
}
#three-gater-left-top{
    width: 100%;
    height: 60%;
}
#three-gater-left-bottom{
    width: 100%;
    height: 40%;
}
</style>