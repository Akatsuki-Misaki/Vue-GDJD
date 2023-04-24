<template>
    <div id="right-two-one">
        <dv-border-box-8>
            <div style="width:100%;height:100%;box-sizing:border-box;padding:5% 0 0 0 ">
                <div id="fff" style="width:100%;height:100%"></div>
            </div>
        </dv-border-box-8>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'OneCenterTwo',
    mounted: function () {
        var chartDom = document.getElementById('fff');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            title: {
                left: 'center',
                text: '用餐方式',
                textStyle: {
                    color: 'rgb(112,185,230)',
                    fontWeight: '700',
                    fontSize: 16
                }
            },
            legend: {
                right:10,
                width:120,
                itemWidth:10,
                itemHeight:10,
                textStyle: {
                    color: 'rgb(218,232,255)'
                }
            },
            grid: {
                left: '15%',
                right: '7%',
                bottom: '10%',
                top:'14%'
                // containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }

            },
            yAxis: {
                type: 'category',
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            series: [
                {
                    name: '食堂',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        color:'black'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                    
                },
                {
                    name: '团购',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        color:'black'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '外卖',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        color:'black'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '其他',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        color:'black'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    
                    data: [150, 212, 201, 154, 190, 330, 410]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        })
    }
}
</script>
<style>
#right-two-one {
    box-sizing: border-box;
    padding: 0 15px 10px 10px;
    width: 100%;
    height: 50vh;
}
</style>
