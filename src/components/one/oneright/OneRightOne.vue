<template>
    <div id="right-one">
        <dv-border-box-12>
            <div id="right-one-tow1">
                <div id="right-one-two-box" style="width:100%;height:100%"></div>
            </div>
        </dv-border-box-12>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'OneRightOne',
    data: function () {
        return {
            timer:null
        }
    },
    mounted: function () {
        var app = {};
        var chartDom = document.getElementById('right-one-two-box');
        var myChart = echarts.init(chartDom);
        var option;

        //初始化时间轴
        const categories = (function () {
            let now = new Date();
            let res = [];
            let len = 10;
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(+now - 2000);
            }
            return res;
        })();
        //初始化上面？
        const categories2 = (function () {
            let res = [];
            let len = 10;
            while (len--) {
                res.push(10 - len - 1);
            }
            return res;
        })();
        //生成随机数据大
        const data = (function () {
            let res = [];
            let len = 0;
            while (len < 10) {
                res.push(Math.floor(+(Math.random() * 100)));
                len++;
            }
            return res;
            // let res = [];
            // let len = 10;
            // while (len--) {
            //   res.push(Math.round(Math.random() * 1000));
            // }
            // return res;
        })();
        //生成随机数据小
        const data2 = (function () {
            let res = [];
            let len = 0;
            while (len < 10) {
                res.push(Math.floor(+(Math.random() * 100)));
                len++;
            }
            return res;
        })();
        //实例化
        option = {
            title: {
                left: 'center',
                text: '食堂进出人数',
                textStyle: {
                    color: 'rgb(112,185,230)',
                    fontWeight: '700',
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                height: '60%'
            },
            legend: {
                itemHeight: 8,
                itemWidth: 18,
                right: 0,
                orient: 'vertical',
                inactiveColor: '#aaa',
                textStyle: {
                    color: 'white',
                    fontSize: 8
                },

            },
            xAxis: [

                {
                    type: 'category',
                    boundaryGap: true,
                    data: categories,
                    axisLabel: {
                        color: 'rgb(218,232,255)'
                    }
                },
                {
                    type: 'category',
                    boundaryGap: true,
                    data: categories,
                    axisLabel: {
                        color: 'rgb(218,232,255)'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    max: 100,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    axisLabel: {
                        color: 'rgb(218,232,255)'
                    }
                },
                {
                    type: 'value',
                    scale: true,
                    max: 100,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                    axisLabel: {
                        color: 'rgb(218,232,255)'
                    }
                }
            ],
            series: [
                {
                    name: '进入人数',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: data
                },
                {
                    name: '出去人数',
                    type: 'line',
                    data: data2
                }
            ]
        };

        app.count = 11;
        setInterval(function () {
            let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
            data.shift();
            // data.push(Math.round(Math.random() * 1000));
            data.push(Math.floor(+(Math.random() * 100)));
            data2.shift();
            data2.push(Math.floor(+(Math.random() * 100)));
            categories.shift();
            categories.push(axisData);
            categories2.shift();
            categories2.push(app.count++);
            myChart.setOption({
                xAxis: [
                    {
                        data: categories
                    },
                    {
                        data: categories
                    }
                ],
                series: [
                    {
                        data: data
                    },
                    {
                        data: data2
                    }
                ]
            });
        }, 2100);
        option && myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        })

    },
    onBeforeUnmount: function () {
        clearInterval(this.timer)
        this.timer = null;
    }
}
</script>
<style>
#right-one {
    box-sizing: border-box;
    padding: 0 15px 10px 10px;
    width: 100%;
    height: 37vh;
}

#right-one-tow1 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 4%;
}
</style>