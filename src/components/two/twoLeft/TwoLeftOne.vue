<template>
    <div id="two-left-one">
        <dv-border-box-13>
            <div id="two-left-one-box">                
            </div>
        </dv-border-box-13>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'TwoLeftOne',
    mounted: function () {
        var chartDom = document.getElementById('two-left-one-box');
        var myChart = echarts.init(chartDom);
        var option;
        const dataA = [[7.54, 8.23, 8.65, 9.71, 9.03, 9.01]];
        const dataB = [[6.51, 6.66, 7.5, 9.85, 6.79, 9.45]];
        const dataC = [[7.12, 7.57, 6.92, 8.48, 7.56, 9.38]];
        const dataD = [[9.34, 6.49, 8.52, 7.06, 6.84, 6.67]];
        const lineStyle = {
            width: 1,
            opacity: 0.5
        };
        option = {
            title: {
                text: '员工评分',
                left: 'center',
                textStyle: {
                    color: 'rgb(112,185,230)'
                }
            },
            legend: {
                bottom: 5,
                data: ['一食堂', '二食堂', '三食堂', '四食堂'],
                itemGap: 20,
                textStyle: {
                    color: 'rgb(218,232,255)',
                    fontSize: 14
                }
            },
            radar: {
                indicator: [
                    { name: '服务态度', max: 10 },
                    { name: '面貌', max: 10 },
                    { name: '健康', max: 10 },
                    { name: '培训和发展', max: 10 },
                    { name: '生产效率', max: 10 },
                    { name: '团队合作', max: 10 }
                ],
                shape: 'circle',
                radius:'60%',
                splitNumber: 5,
                axisName: {
                    color: 'rgb(218,232,255)'
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(112, 185, 230, 0.1)',
                            'rgba(112, 185, 230, 0.2)',
                            'rgba(112, 185, 230, 0.4)',
                            'rgba(112, 185, 230, 0.6)',
                            'rgba(112, 185, 230, 0.8)',
                            'rgba(112, 185, 230, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '一食堂',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataA,
                    symbol: 'none',
                    itemStyle: {
                        color: '#F9713C'
                    },
                    areaStyle: {
                        opacity: 0.1
                    }
                },
                {
                    name: '二食堂',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataB,
                    symbol: 'none',
                    itemStyle: {
                        color: '#B3E4A1'
                    },
                    areaStyle: {
                        opacity: 0.05
                    }
                },
                {
                    name: '三食堂',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataC,
                    symbol: 'none',
                    itemStyle: {
                        color: '#7FFF00'
                    },
                    areaStyle: {
                        opacity: 0.05
                    }
                },
                {
                    name: '四食堂',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataD,
                    symbol: 'none',
                    itemStyle: {
                        color: '#AEEEEE'
                    },
                    areaStyle: {
                        opacity: 0.05
                    }
                }
            ]
        };

        option && myChart.setOption(option);

    }
}
</script>
<style>
#two-left-one {
    width: 100%;
    height: 60%;
}
#two-left-one-box{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 5% 0 5% 0 ;
}
</style>