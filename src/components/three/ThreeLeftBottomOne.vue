<template>
    <div id="three-left-bottom-one">
        <dv-border-box-10>
            <div id="three-left-bottom-one-box"></div>
        </dv-border-box-10>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'ThreeLeftBottomOne',
    mounted: function () {
        var chartDom = document.getElementById('three-left-bottom-one-box');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '支付方式比例',
                left: 'center',
                textStyle: {
                    color: 'rgb(112,185,230)',
                }
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                top:'20%',
                textStyle: {
                    color: 'rgb(218,232,255)'
                }
            },
            label:{
                color: 'rgb(218,232,255)'
            },
            series: [
                {
                    name: '支付方式',
                    type: 'pie',
                    radius: '50%',
                    center: ['40%','50%'],
                    data: [
                        { value: 32, name: '支付宝' },
                        { value: 36, name: '微信' },
                        { value: 15, name: '校园卡' },
                        { value: 7, name: '银联' },
                        { value: 10, name: '电子手环' }
                    ]
                }
            ]
        }
        option && myChart.setOption(option);
    }
}
</script>
<style>
#three-left-bottom-one {
    width: 45%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    padding:1% 1% 1% 1%;
}

#three-left-bottom-one-box {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 5% 5% 0 0;
}
</style>