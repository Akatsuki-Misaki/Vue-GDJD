<template>
    <div id="center-three">
        <dv-border-box-11>
            <div id="center-three-title">就餐情况</div>
            <div id="center-three-one">
                <div id="center-three-two">
                </div>
            </div>
        </dv-border-box-11>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'OneCenterThree',
    mounted: function () {
        var chartDom = document.getElementById('center-three-two');
        var myChart = echarts.init(chartDom);
        var option;

        setTimeout(function () {
            option = {
                legend: {
                    inactiveColor: '#aaa',
                    textStyle: {
                        color: 'rgb(218,232,255)'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    showContent: false
                },
                dataset: {
                    source: [
                        ['product', '一月', '二月', '三月', '四月', '五月', '六月'],
                        ['一食堂', 7430, 7934, 6934, 7832, 7298, 8202],
                        ['二食堂', 6735, 6390, 7289, 6890, 6308, 7422],
                        ['三食堂', 8234, 8423, 8123, 7420, 8020, 8308],
                        ['四食堂', 7187, 7209, 7329, 6932, 7290, 7523]
                    ]
                },
                xAxis: {
                    type: 'category',
                    name: '月份',
                    boundaryGap: false,
                    nameTextStyle: {
                        color:'rgb(218,232,255)'
                    },
                    axisLabel: {
                        color: 'rgb(218,232,255)'
                    }
                },
                yAxis: {
                    name: '平均人数/天',
                    gridIndex: 0,
                    min: 6000,
                    max: 9000,
                    nameTextStyle: {
                        color:'rgb(218,232,255)'
                    },
                    axisLabel: {
                        color: 'rgb(218,232,255)'
                    }
                },
                grid: { 
                    top: '55%' ,
                    bottom:'10%'
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'line',
                        smooth: true,
                        seriesLayoutBy: 'row',
                        emphasis: { focus: 'series' }
                    },
                    {
                        type: 'pie',
                        id: 'pie',
                        radius: '34%',
                        top:'5%',
                        center: ['50%', '25%'],
                        emphasis: {
                            focus: 'self'
                        },
                        label: {
                            formatter: '{b}: {@一月} ({d}%)',
                            color: 'rgb(218,232,255)'
                        },
                        encode: {
                            itemName: 'product',
                            value: '一月',
                            tooltip: '一月'
                        }
                    }
                ]
            };
            myChart.on('updateAxisPointer', function (event) {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    const dimension = xAxisInfo.value + 1;
                    myChart.setOption({
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });
            myChart.setOption(option);
        });

        option && myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        })
    }
}
</script>
<style>
#center-three {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 1% 0 1% 0;
}

#center-three-one {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 8% 3% 3% 3%;
}

#center-three-two {
    width: 100%;
    height: 100%;
    background-color: rgba(19, 25, 47, 0.6);
}

#center-three-title {
    color: rgb(112, 185, 230);
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: 3.8%;
    left: 45%;
}</style>