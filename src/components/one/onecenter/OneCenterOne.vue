<template>
    <div id="one-center-one">
        <dv-border-box-10>
            <div id="one-center-one-box">
                <div id="one-center-one-box-two">
                    <div style="width:100%;height:100%" id="center-one-box-three"></div>
                </div>
            </div>
        </dv-border-box-10>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  name: "centerOne",
  mounted: function () {
    var chartDom = document.getElementById('center-one-box-three');
    var myChart = echarts.init(chartDom);
    var option;

    let base =
      +new Date(new Date().toLocaleDateString()).getTime() - 31 * 24 * 3600 * 1000;
    let oneDay = 24 * 3600 * 1000;
    let data = [[base, (Math.random() * 0.04 + 0.01).toFixed(2)]];
    for (let i = 1; i < 30; i++) {
      let now = new Date((base += oneDay));
      data.push([+now, (Math.random() * 0.04 + 0.01).toFixed(2)]);
    }
    option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '人均残食量',
        textStyle: {
          color: 'rgb(112,185,230)',
          fontWeight: '700',
          fontSize: 16
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel: {
          color: 'rgb(218,232,255)'
        }
      },
      yAxis: {
        name: '斤',
        type: 'value',
        boundaryGap: [0, '100%'],
        max: 0.08,
        nameTextStyle: {
          color: 'rgb(218,232,255)'
        },
        axisLabel: {
          color: 'rgb(218,232,255)'
        }
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 3600
        },
        {
          start: 0,
          end: 20
        }
      ],
      series: [
        {
          name: '人均残食',
          type: 'line',
          smooth: false,
          symbol: 'none',
          data: data
        }
      ]
    };

    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    })
  }
}
</script>
<style>
#one-center-one {
  box-sizing: border-box;
  padding: 1% 1% 0 0;
  float: left;
  width: 50%;
  height: 100%;
}

#one-center-one-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2% 0% 2% 2%;
}

#one-center-one-box-two {
  width: 100%;
  height: 100%;
}
</style>