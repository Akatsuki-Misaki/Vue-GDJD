<template>
    <div id="two-right-three">
        <dv-border-box-4 :reverse="true">
            <div id="two-right-three-box3">
                <div id="two-right-three-box33"></div>
            </div>
        </dv-border-box-4>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'TwoRightThree',
    mounted: function () {
        var chartDom = document.getElementById('two-right-three-box33');
        var myChart = echarts.init(chartDom);
        var option;

        const data = [6, 6, 6, 6];
        const datas = [
            [7.56, 8.87, 9.67, 9.02],
            [9.57, 7.85, 7.61, 8.12],
            [7.58, 9.55, 9.14, 7.09],
            [8.5, 7.98, 6.72, 9.02],
            [7.52, 9.27, 6.99, 8.67],
            [8.47, 7.48, 9.21, 9.38],
            [7.54, 8.69, 8.96, 7.23, 9.13]
        ]
        option = {
            title: {
                text: '一周卫生评分',
                left:'center',
                top:'8%',
                textStyle: {
                    color:'rgb(112,185,230)',                  
                },
                axisLabel: {
                    color: 'rgb(218,232,255)'
                },
            },
            xAxis: {
                max: 10
            },
            yAxis: {
                type: 'category',
                data: ['一食堂', '二食堂', '三食堂', '四食堂'],
                inverse: true,
                axisLabel: {
                    color: 'rgb(218,232,255)'
                },
                animationDuration: 300,
                animationDurationUpdate: 300
            },
            grid:{
                left:'12%'
            },
            label:{
                    color: 'rgb(218,232,255)'
            },
            series: [
                {
                    realtimeSort: true,
                    type: 'bar',
                    data: data,
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    },
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265'];
                                return colorList[params.dataIndex]
                            }
                        }
                    }
                }
            ],
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        };
        var j = 0;
        function run() {
            for (var i = 0; i < data.length; ++i) {
                data[i] = datas[j][i]
            }
            if (j == 6) {
                j = 0
            } else {
                j++
            }
            myChart.setOption({
                series: [
                    {
                        type: 'bar',
                        data
                    }
                ]
            });
        }
        setTimeout(function () {
            run();
        }, 0);
        setInterval(function () {
            run();
        }, 7000);

        option && myChart.setOption(option);

    }
}
</script>
<style>
#two-right-three {
    width: 100%;
    height: 32%;

}

#two-right-three-box3 {
    width: 100%;
    height: 100%;
}

#two-right-three-box33 {
    width: 100%;
    height: 100%;
}
</style>