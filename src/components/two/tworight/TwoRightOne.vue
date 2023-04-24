<template>
    <div id="two-right-one">
        <dv-border-box-1>
            <div id="two-right-one2">
                <div id="two-right-one-title">今日卫生打扫情况</div>
                <div id="two-right-one-box">
                    <div id="two-right-one-box2" style="position: absolute;">
                        <img src="../../img/twoimg/1.jpg" />
                        <img src="../../img/twoimg/2.jpg" />
                        <img src="../../img/twoimg/3.jpg" />
                        <img src="../../img/twoimg/4.jpg" />
                        <img src="../../img/twoimg/5.jpg" />
                        <img src="../../img/twoimg/6.jpg" />
                        <img src="../../img/twoimg/7.jpg" />
                        <img src="../../img/twoimg/8.jpg" />
                        <img src="../../img/twoimg/9.jpg" />
                        <img src="../../img/twoimg/10.jpg" />
                        <img src="../../img/twoimg/1.jpg" />
                        <img src="../../img/twoimg/2.jpg" />
                        <img src="../../img/twoimg/3.jpg" />
                        <img src="../../img/twoimg/4.jpg" />
                    </div>
                </div>
            </div>
        </dv-border-box-1>
    </div>
</template>
<script>
export default {
    name: 'TwoRightOne',
    mounted: function () {
        var timer3 = null
        function change() {
            clearInterval(timer3);
            var box2 = document.getElementById('two-right-one-box2')
            timer3 = setInterval(function () {
                box2.style.left = box2.offsetLeft - 1 + 'px';
                if (box2.offsetLeft <= -1500) {
                    box2.style.left = '0px'
                }
            }, 30);
        }
        change();
        var box = document.getElementById('two-right-one-box');
        box.addEventListener('mouseenter', function () {
            clearInterval(timer3);
        })
        box.addEventListener('mouseleave', function () {
            change()
        })
    }
}
</script>
<style>
#two-right-one{
    width: 100%;
    height: 34%;
}
#two-right-one2 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 5% 0 5%;
}

#two-right-one-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

#two-right-one-box2 {
    width: 170vw;
    height: 12vw;
}

img {
    width: 12vw;
    height: 8.5vw;
    float: left;

}
#two-right-one-title{
    width: 100%;
    padding: 5% 0 3% 0;
    text-align: center;
    font-size: 2.3rem;
    color: rgb(112,185,230);
}
</style>