<template>
    <div id="two-right-two">
        <dv-border-box-1>
            <div id="two-right-two2">
                <div id="two-right-two-title">营业执照展示</div>
                <div id="two-right-two-box">
                    <div id="two-right-two-box2" style="position: absolute;">
                        <img src="../../img/twoimg/11.jpg" />
                        <img src="../../img/twoimg/12.jpg" />
                        <img src="../../img/twoimg/13.jpg" />
                        <img src="../../img/twoimg/14.jpg" />
                        <img src="../../img/twoimg/15.jpg" />
                        <img src="../../img/twoimg/16.jpg" />
                        <img src="../../img/twoimg/17.jpg" />
                        <img src="../../img/twoimg/18.jpg" />
                        <img src="../../img/twoimg/19.jpg" />
                        <img src="../../img/twoimg/20.jpg" />
                        <img src="../../img/twoimg/21.jpg" />
                        <img src="../../img/twoimg/22.jpg" />
                        <img src="../../img/twoimg/23.jpg" />
                        <img src="../../img/twoimg/24.jpg" />
                        <img src="../../img/twoimg/25.jpg" />
                        <img src="../../img/twoimg/26.jpg" />
                        <img src="../../img/twoimg/11.jpg" />
                        <img src="../../img/twoimg/12.jpg" />
                        <img src="../../img/twoimg/13.jpg" />
                    </div>
                </div>
            </div>
        </dv-border-box-1>
    </div>
</template>
<script>
export default{
    name:'TwoRightTwo',
    mounted: function () {
        var timer3 = null
        function change() {
            clearInterval(timer3);
            var box2 = document.getElementById('two-right-two-box2')
            timer3 = setInterval(function () {
                box2.style.left = box2.offsetLeft - 1 + 'px';
                if (box2.offsetLeft <= -1500) {
                    box2.style.left = '0px'
                }
            }, 30);
        }
        change();
        var box = document.getElementById('two-right-two-box');
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

#two-right-two{
    width: 100%;
    height: 34%;
}
#two-right-two2 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 5% 0 5%;
}

#two-right-two-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

#two-right-two-box2 {
    width: 229vw;
    height: 12vw;
}

img {
    width: 12vw;
    height: 8.5vw;
    float: left;

}
#two-right-two-title{
    width: 100%;
    padding: 5% 0 3% 0;
    text-align: center;
    font-size: 2.3rem;
    color: rgb(112,185,230);
}
</style>