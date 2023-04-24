<template>
    <div id="three-left-bottom-two">
        <dv-border-box-10>
            <div id="three-left-bottom-two-ze"></div>
        </dv-border-box-10>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default{
    name: 'ThreeLeftBottomTwo',
    mounted: function () {
        var chartDom = document.getElementById('three-left-bottom-two-ze');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '平均出餐速度',
                left: 'center',
                textStyle: {
                    color: 'rgb(112,185,230)',
                }
            },
            tooltip: {
                trigger: 'axis',
                formatter:
                    '{a} {b}:{c}分钟<br>{a1} {b1}:{c1}分钟<br>{a2} {b2}:{c2}分钟<br>{a3} {b3} {c3}分钟<br> {a4} {b4}:{c4}分钟<br> {a5} {b5}:{c5}分钟<br> {a6} {b6}:{c6}分钟'
            },
            legend: {
                right:'2%',
                top:'20%',
                data: ['一饭堂', '二饭堂', '三饭堂', '四饭堂', '点外卖', '点团购', '其它的'],
                orient:'vertical',
                textStyle: {
                    color: 'rgb(218,232,255)'
                }
            },
            grid: {
                left: '5%',
                right: '20%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            yAxis: {
                name: '分钟',
                type: 'value',
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            series: [
                {
                    name: '一饭堂',
                    type: 'line',
                    data: [34, 45, 20, 18, 32, 34, 40]
                },
                {
                    name: '二饭堂',
                    type: 'line',
                    data: [27, 43, 28, 26, 27, 24, 30]
                },
                {
                    name: '三饭堂',
                    type: 'line',
                    data: [24, 34, 24, 19, 22, 19, 21]
                },
                {
                    name: '四饭堂',
                    type: 'line',
                    data: [13, 23, 18, 20, 14, 23, 17]
                },
                {
                    name: '点外卖',
                    type: 'line',
                    data: [56, 66, 47, 65, 76, 39, 58]
                },
                {
                    name: '点团购',
                    type: 'line',
                    data: [56, 45, 42, 49, 63, 52, 40]
                },
                {
                    name: '其它的',
                    type: 'line',
                    data: [16, 31, 42, 30, 29, 31, 22]
                },
            ],
        };
        myChart.setOption(option);
    }
}
</script>
<style>
#three-left-bottom-two{
    width: 55%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    padding:1% 1% 1% 1%;
}
#three-left-bottom-two-ze{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 3%;
}
</style>