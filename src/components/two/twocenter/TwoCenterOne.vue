<template>
    <div id="two-center-one">
        <dv-border-box-13>
            <div id="two-center-one-box"></div>
        </dv-border-box-13>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'TwoCenterOne',
    mounted: function () {
        var chartDom = document.getElementById('two-center-one-box');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '宿舍到食堂距离',
                left: 'center',
                textStyle: {
                    color: 'rgb(112,185,230)',

                }
            },
            legend: {
                right: '5%',
                orient: 'vertical',
                textStyle: {
                    color: 'rgb(218,232,255)'
                }
            },
            tooltip: {},
            dataset: {
                source: [
                    ['product', '一二食堂', '三四食堂'],
                    ['学1', 53, 342],
                    ['学2', 134, 242],
                    ['学3', 192, 100],
                    ['学4', 84, 267],
                    ['学5', 154, 177],
                    ['学6', 394, 30],
                    ['学7', 412, 110],
                    ['学8', 72, 376],
                    ['学9', 92, 392],
                    ['学10', 124, 431]
                ]
            },
            xAxis: {
                type: 'category',
                name: '建筑',
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            yAxis: {
                name: '米',
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            series: [{ type: 'bar' }, { type: 'bar' }]
        };

        option && myChart.setOption(option);

    }
}
</script>
<style>
#two-center-one {
    width: 100%;
    height: 60%;
}


#two-center-one-box {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 6% 0 0 0;
}
</style>