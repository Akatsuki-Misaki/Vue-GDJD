<template>
    <div id="one-left-one">
        <dv-border-box-12>
            <div style="width:100%;height:100%;">
                <div id="mbmc" style="width:100%;height:100%"></div>
            </div>
        </dv-border-box-12>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default{
    name: 'OneLeftOne',
    mounted: function () {
        var chartDom = document.getElementById('mbmc');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                show: true
            },
            legend: {
                textStyle: {
                    color: 'rgb(218,232,255)'
                }
            },
            title: {
                left: 'center',
                top: '5%',
                text: '人均消费',
                textStyle: {
                    color: 'rgb(112,185,230)',
                    fontWeight: 'bolder',
                    fontSize: 16,

                }
            },
            xAxis: {
                data: ['早餐', '午餐', '晚餐', '夜宵'],
                zlevel: 1,
                axisLabel: {
                    fontSize: 12,
                    inierval: 0,
                    inside: true,
                    color: 'rgb(218,232,255)',
                    formatter: function (value) {
                        return value.split("").join("\n");
                    }
                }
            },
            yAxis: {
                name: '元',
                nameTextStyle: {
                    color: 'rgb(218,232,255)'
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                }
            },
            grid:{
                top:'22%',
                bottom:'12%'
            },
            dataGroupId: '',
            animationDurationUpdate: 500,
            series: {
                type: 'bar',
                id: 'sales',
                data: [
                    {
                        value: 5,
                        groupId: 'a'
                    },
                    {
                        value: 10.01,
                        groupId: 'b'
                    },
                    {
                        value: 10.07,
                        groupId: 'c'
                    },
                    {
                        value: 7.6,
                        groupId: 'd'
                    }
                ],
                universalTransition: {
                    enabled: true,
                    divideShape: 'clone'
                }
            }
        };
        const drilldownData = [
            {
                dataGroupId: 'a',
                data: [
                    ['马克思主义学院', 4.3],
                    ['外国语学院', 5.6],
                    ['公共管理学院', 4.8],
                    ['信息管理学院', 4.2],
                    ['设计学院', 5.8],
                    ['计算机学院 ', 5.4],
                    ['电子与信息学院', 4.6],
                    ['轻工工程学院', 5.0],
                    ['生命科学学院', 5.9],
                    ['网络安全学院', 4.4]
                ]
            },
            {
                dataGroupId: 'b',
                data: [
                    ['马克思主义学院', 9.8],
                    ['外国语学院', 10.4],
                    ['公共管理学院', 11.4],
                    ['信息管理学院', 9.2],
                    ['设计学院', 8.9],
                    ['计算机学院 ', 10.1],
                    ['电子与信息学院', 9.9],
                    ['轻工工程学院', 10.6],
                    ['生命科学学院', 9.7],
                    ['网络安全学院', 10.1]
                ]
            },
            {
                dataGroupId: 'c',
                data: [
                    ['马克思主义学院', 10.4],
                    ['外国语学院', 9.4],
                    ['公共管理学院', 10.4],
                    ['信息管理学院', 10.2],
                    ['设计学院', 10.9],
                    ['计算机学院 ', 11.1],
                    ['电子与信息学院', 11.9],
                    ['轻工工程学院', 9.6],
                    ['生命科学学院', 8.7],
                    ['网络安全学院', 8.1]
                ]
            },
            {
                dataGroupId: 'd',
                data: [
                    ['马克思主义学院', 7.6],
                    ['外国语学院', 8.4],
                    ['公共管理学院', 7.0],
                    ['信息管理学院', 6.7],
                    ['设计学院', 7.2],
                    ['计算机学院 ', 7.9],
                    ['电子与信息学院', 8.1],
                    ['轻工工程学院', 8.3],
                    ['生命科学学院', 6.9],
                    ['网络安全学院', 8.1]
                ]
            }
        ];
        myChart.on('click', function (event) {
            if (event.data) {
                var subData = drilldownData.find(function (data) {
                    return data.dataGroupId === event.data.groupId;
                });
                if (!subData) {
                    return;
                }
                myChart.setOption({
                    xAxis: {
                        data: subData.data.map(function (item) {
                            return item[0];
                        })
                    },
                    series: {
                        type: 'bar',
                        id: 'sales',
                        dataGroupId: subData.dataGroupId,
                        data: subData.data.map(function (item) {
                            return item[1];
                        }),
                        universalTransition: {
                            enabled: true,
                            divideShape: 'clone'
                        }
                    },
                    graphic: [
                        {
                            type: 'text',
                            left: 292,
                            top: 22,
                            style: {
                                text: '返回',
                                fontSize: 14,
                                fill: 'white',
                            },
                            onclick: function () {
                                myChart.setOption(option);
                            }
                        }
                    ]
                });
            }
        });

        option && myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        })
    }
}
</script>
<style>
#one-left-one{
    box-sizing: border-box;
    padding: 0 15px 10px 10px;
    width: 100%;
    height: 40%;
}
</style>