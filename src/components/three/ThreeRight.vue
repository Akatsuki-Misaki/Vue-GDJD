<template>
    <div id="three-right">
        <dv-border-box-1>
            <div id="three-right-title">美食来源地</div>
            <div id="three-right-china"><dv-flyline-chart-enhanced :config="config" style="width:90%;height:90%;margin: 0 auto;" /></div>
            <div id="three-right-bar"><div id="barbarbar" style="width: 100%;height: 100%;"></div></div>
        </dv-border-box-1>
    </div>
</template>
<script>
import china from "../img/china.png"
import * as echarts from 'echarts';

export default {
    name: 'ThreeRight',
    data: function () {
        return {
            config: {
                line: {
                    color: 'white',
                    width: 2
                },
                points: [
                    {
                        //中心点
                        name: '广东',
                        coordinate: [0.73, 0.77],
                        halo: {
                            show: true,
                            color: "white"
                        },
                        text: {
                            show: true,
                            color: "white"
                        },

                    },
                    {
                        name: '北京',
                        text: {
                            color: "white"
                        },
                        flylineColor: "black",
                        coordinate: [0.75, 0.39]
                    },
                    {
                        name: '黑龙江',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.9, 0.2]
                    },
                    {
                        name: '吉林',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.89, 0.29]
                    },
                    {
                        name: '西藏',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.3, 0.63]
                    },
                    {
                        name: '青海',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.38, 0.47]
                    },
                    {
                        name: '四川',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.49, 0.60]
                    },
                    {
                        name: '山东',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.78, 0.47]
                    },
                    {
                        name: '山西',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.68, 0.47]
                    },
                    {
                        name: '云南',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.47, 0.76]
                    },
                    {
                        name: '贵州',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.6, 0.7]
                    },
                    {
                        name: '湖北',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.7, 0.6]
                    },
                    {
                        name: '安徽',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.79, 0.58]
                    },
                    {
                        name: '福建',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.82, 0.71]
                    },
                    {
                        name: '甘肃',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.53, 0.5]
                    },
                    {
                        name: '陕西',
                        text: {
                            color: "white"
                        },
                        coordinate: [0.61, 0.54]
                    }
                ],
                lines: [
                    {
                        source: '北京',
                        target: '广东'
                    },
                    {
                        source: '黑龙江',
                        target: '广东'
                    },
                    {
                        source: '吉林',
                        target: '广东'
                    },
                    {
                        source: '西藏',
                        target: '广东'
                    },
                    {
                        source: '青海',
                        target: '广东'
                    },
                    {
                        source: '四川',
                        target: '广东'
                    },
                    {
                        source: '山东',
                        target: '广东'
                    },
                    {
                        source: '山西',
                        target: '广东'
                    },
                    {
                        source: '云南',
                        target: '广东'
                    },
                    {
                        source: '贵州',
                        target: '广东'
                    },
                    {
                        source: '湖北',
                        target: '广东'
                    },
                    {
                        source: '安徽',
                        target: '广东'
                    },
                    {
                        source: '福建',
                        target: '广东'
                    },
                    {
                        source: '甘肃',
                        target: '广东'
                    },
                    {
                        source: '陕西',
                        target: '广东'
                    }
                ],
                icon: {
                    show: true,
                },
                text: {
                    show: true,
                },
                k: 0.5,
                bgImgSrc: china
            }
        }
    },
    mounted: function () {
        var chartDom = document.getElementById('barbarbar');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'item'
            },
            label:{
                color: 'rgb(218,232,255)'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    center: ['50%','60%'],
                    data: [
                        { value: 100, name: '广东' },
                        { value: 76, name: '四川' },
                        { value: 45, name: '北京' },
                        { value: 65, name: '湖北' },
                        { value: 44, name: '安徽' },
                        { value: 33, name: '吉林' },
                        { value: 23, name: '青海' },
                        { value: 88, name: '山东' },
                        { value: 65, name: '山西' },
                        { value: 42, name: '云南' },
                        { value: 32, name: '贵州' },
                        { value: 72, name: '福建' },
                        { value: 56, name: '甘肃' },
                        { value: 33, name: '陕西' },
                        { value: 22, name: '黑龙江' },
                        { value: 16, name: '西藏' }
                    ]
                }
            ]
        }
        option && myChart.setOption(option);
    }
}
</script>
<style>
#three-right {
    width: 100%;
    height: 100%;
}

#three-right-title {
    width: 25%;
    font-size: 3rem;
    position: absolute;
    top: 5%;
    right: 37.5%;
    color: rgb(112, 185, 230);
}

#three-right-china {

    width: 40vw;
    height: 40vw;
}
#three-right-bar{
    position: absolute;
    width: 45%;
    height: 45%;
    left: 0%;
    bottom: 0%;
}
</style>