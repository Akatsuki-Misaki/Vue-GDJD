<template>
    <div id="three-left-top-two">
        <dv-border-box-8>
            <div id="three-left-top-two-title">口味分布占比</div>
            <div id="three-left-top-two-box">
            </div>
        </dv-border-box-8>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'ThreeLeftTopTwo',
    mounted: function () {
        var chartDom = document.getElementById('three-left-top-two-box');
        var myChart = echarts.init(chartDom);
        var option;
        const suanData = [[3.62, 5.89], [6.26, 2.12], [7.35, 5.74], [5.85, 5.23], [4.41, 6.33], [8.18, 3.95], [7.15, 5.24], [6.59, 6.25], [4.88, 2.47], [4.64, 5.13]];
        const tianData = [[5.23, 4.67], [7.98, 6.12], [8.32, 7.44], [4.11, 3.78], [6.87, 5.99], [7.24, 4.21], [8.17, 4.65], [4.89, 5.31], [5.31, 6.98], [7.45, 6.03]];
        const kuData = [[1.23, 1.87], [3.45, 2.99], [5.11, 3.77], [4.68, 4.22], [6.89, 3.01], [5.32, 2.43], [1.98, 1.12], [4.79, 3.55], [6.66, 4.44], [6.02, 2.78]];
        const laData = [[3.45, 2.79], [6.01, 3.29], [5.22, 7.87], [8.69, 5.32], [7.15, 4.23], [6.31, 6.13], [2.43, 1.59], [4.85, 4.33], [7.57, 3.11], [8.03, 8.91]];
        const xianData = [[5.23, 4.18], [6.63, 6.79], [3.87, 3.56], [5.34, 6.92], [6.91, 2.13], [5.54, 4.89], [4.25, 2.01], [5.49, 4.33], [7.77, 3.45], [6.24, 5.11]];
        function calculateAverage(data, dim) {
            let total = 0;
            for (var i = 0; i < data.length; i++) {
                total += data[i][dim];
            }
            return (total /= data.length);
        }
        const scatterOption = (option = {
            legend: {
                data: ['suan', 'tian', 'ku', 'la', 'xian'],
                left: 'center',
                bottom: 10,
                show: true
            },
            grid: {
                top:'24%',
                right: '13%'
            },
            xAxis: {
                name: '喜好\n程度',
                max: 10,
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            yAxis: {
                name: '口味深度',
                max: 10,
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            series: [
                {
                    type: 'scatter',
                    id: 'suan',
                    dataGroupId: 'suan',
                    itemStyle: {
                        color: '#f6fe01'
                    },
                    universalTransition: {
                        enabled: true,
                        delay: function () {
                            return Math.random() * 400;
                        }
                    },
                    data: suanData
                },
                {
                    type: 'scatter',
                    id: 'tian',
                    dataGroupId: 'tian',
                    itemStyle: {
                        color: '#fe01bf'
                    },
                    universalTransition: {
                        enabled: true,
                        delay: function () {
                            return Math.random() * 400;
                        }
                    },
                    data: tianData
                },
                {
                    type: 'scatter',
                    id: 'ku',
                    dataGroupId: 'ku',
                    itemStyle: {
                        color: '#0fc729'
                    },
                    universalTransition: {
                        enabled: true,
                        delay: function () {
                            return Math.random() * 400;
                        }
                    },
                    data: kuData
                },
                {
                    type: 'scatter',
                    id: 'la',
                    dataGroupId: 'la',
                    itemStyle: {
                        color: '#c70f16'
                    },
                    universalTransition: {
                        enabled: true,
                        delay: function () {
                            return Math.random() * 400;
                        }
                    },
                    data: laData
                },
                {
                    type: 'scatter',
                    id: 'xian',
                    dataGroupId: 'xian',
                    itemStyle: {
                        color: '#fbfefd'
                    },
                    universalTransition: {
                        enabled: true,
                        delay: function () {
                            return Math.random() * 400;
                        }
                    },
                    data: xianData
                }
            ]
        });
        const barOption = {
            legend: {
                data: ['suan', 'tian', 'ku', 'la', 'xian'],
                left: 'center',
                bottom: 10,
                show: true
            },
            grid: {
                top:'24%',
                right: '13%'
            },
            xAxis: {
                type: 'category',
                data: ['酸', '甜', '苦', '辣', '咸'],
                name: '口味',
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            yAxis: {
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            series: [
                {
                    type: 'bar',
                    id: 'total',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#f6fe01', '#fe01bf', '#0fc729', '#c70f16', '#fbfefd'];
                                return colorList[params.dataIndex % colorList.length];
                            }
                        }
                    },
                    data: [
                        {
                            value: calculateAverage(xianData, 0),
                            groupId: 'xian'
                        },
                        {
                            value: calculateAverage(laData, 0),
                            groupId: 'la'
                        },
                        {
                            value: calculateAverage(kuData, 0),
                            groupId: 'ku'
                        },
                        {
                            value: calculateAverage(tianData, 0),
                            groupId: 'tian'
                        },
                        {
                            value: calculateAverage(suanData, 0),
                            groupId: 'suan'
                        }
                    ],
                    universalTransition: {
                        enabled: true,
                        seriesKey: ['suan', 'tian', 'ku', 'la', 'xian'],
                        delay: function () {
                            return Math.random() * 400;
                        }
                    }
                }
            ]
        };
        let currentOption = scatterOption;
        setInterval(function () {
            currentOption = currentOption === scatterOption ? barOption : scatterOption;
            myChart.setOption(currentOption, true);
        }, 4000);

        option && myChart.setOption(option);
    }
}
</script>
<style>
#three-left-top-two {
    width: 45%;
    height: 100%;
    float: left;
}

#three-left-top-two-box {
    width: 100%;
    height: 100%;
}
#three-left-top-two-title{
    position: absolute;
    left:36%;
    top: 6%;
    color:rgb(112,185,230);
    font-size: 2.2rem;
}
</style>