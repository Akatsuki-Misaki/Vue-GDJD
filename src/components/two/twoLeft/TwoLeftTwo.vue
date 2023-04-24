<template>
    <div id="two-left-two">
        <dv-border-box-12 title="dv-border-box-11">
            <div id="two-left-two-box"></div>
        </dv-border-box-12>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'TwoLeftTwo',
    mounted: function () {
        var chartDom = document.getElementById('two-left-two-box');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '今日食物类别比',
                left: 'center',
                textStyle: {
                    color: 'rgb(112,185,230)',
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                top:'10%',
                textStyle: {
                    color: 'rgb(218,232,255)'
                }
            },
            label:{
                color: 'rgb(218,232,255)'
            },
            series: [
                {
                    name: '类别',
                    type: 'pie',
                    radius: '60%',
                    center: ['49%','50%'],
                    data: [
                        { value: 1048, name: '肉类' },
                        { value: 1290, name: '蔬菜' },
                        { value: 789, name: '面食' },
                        { value: 484, name: '海鲜' },
                        { value: 300, name: '奶制品' },
                        { value: 233, name: '糕点类' },
                        { value: 465, name: '水果' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        option && myChart.setOption(option);

    }
}
</script>
<style>
#two-left-two {
    width: 100%;
    height: 40%;
}
#two-left-two-box{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 5% 7% 0 0 ;
}
</style>