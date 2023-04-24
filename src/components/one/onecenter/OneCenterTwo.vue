<template>
    <div id="one-center-two">
        <dv-border-box-10>
            <div id="one-right-two-two">
                <div id="right-tow">
                    <div id="toptext">菜品推荐榜</div>
                    <a href="#" class='left jiantou'>&lt;</a>
                    <a href="#" class='right jiantou'>&gt;</a>
                    <div class="box" style="margin-right:3.5%">
                        <ul class='pic'>
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/2.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：番茄小面</p>
                                    <p>厨师：张大厨</p>
                                    <p>含量：375大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/5.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：血鸭拌粉</p>
                                    <p>厨师：李大厨</p>
                                    <p>含量：256大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/8.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：鸡蛋肠粉</p>
                                    <p>厨师：谢大厨</p>
                                    <p>含量：165大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/11.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：韩式炸鸡</p>
                                    <p>厨师：蔡大厨</p>
                                    <p>含量：395大卡</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="box">
                        <ul class='pic' id="pictwo">
                            <li>
                                <div class="pictext">一食堂</div>
                                <a href="#"><img src="../../img/3.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：蜜汁叉烧饭</p>
                                    <p>厨师：方大厨</p>
                                    <p>含量：196大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext">二食堂</div>
                                <a href="#"><img src="../../img/6.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：拌云吞</p>
                                    <p>厨师：周大厨</p>
                                    <p>含量：275大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext">三食堂</div>
                                <a href="#"><img src="../../img/9.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：番茄鱼</p>
                                    <p>厨师：许大厨</p>
                                    <p>含量：245大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext">四食堂</div>
                                <a href="#"><img src="../../img/12.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：火腿蛋包饭</p>
                                    <p>厨师：陈大厨</p>
                                    <p>含量：205大卡</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="box" style="float:right">
                        <ul class='pic' id="picthree">
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/4.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：烤盘饭</p>
                                    <p>厨师：王大厨</p>
                                    <p>含量：456大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/7.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：牛筋丸粿条</p>
                                    <p>厨师：黄大厨</p>
                                    <p>含量：482大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/10.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：麻辣烫</p>
                                    <p>厨师：刘大厨</p>
                                    <p>含量：285大卡</p>
                                </div>
                            </li>
                            <li>
                                <div class="pictext"></div>
                                <a href="#"><img src="../../img/13.jpg" alt=""></a>
                                <div class="litext">
                                    <p>菜名：木耳瘦肉面</p>
                                    <p>厨师：苏大厨</p>
                                    <p>含量：180大卡</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul class="lis">
                    </ul>
                </div>
            </div>
        </dv-border-box-10>
    </div>
</template>
<script>
export default {
    name: 'OneRightTwo',
    mounted: function () {
        var hrefff = window.location.href
        var timer = null
        //动画
        function animate(obj, target, callback) {
            clearInterval(obj.timer)
            obj.timer = setInterval(function () {
                var step = (target - obj.offsetLeft) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (obj.offsetLeft == target) {
                    clearInterval(obj.timer);
                    if (callback) {
                        callback();
                    }
                }
                obj.style.left = obj.offsetLeft + step + 'px';
            }, 30);
        }
        //定义
        var left = document.querySelector('.left');
        var right = document.querySelector('.right');
        var box = document.querySelector('.box');
        //鼠标移入
        document.getElementById('right-tow').addEventListener('mouseenter', function () {
            left.style.display = 'block';
            right.style.display = 'block';
            clearInterval(timer);
        })
        //鼠标移出
        document.getElementById('right-tow').addEventListener('mouseleave', function () {
            left.style.display = 'none';
            right.style.display = 'none';
            time2();
        })
        //获取节点
        var pic = document.querySelector('.pic');
        var pictwo = document.getElementById('pictwo');
        var picthree = document.getElementById('picthree');
        var lis = document.querySelector('.lis');
        var boxWidth = box.offsetWidth;
        //循环创建li
        for (var i = 0; i < pic.children.length; i++) {

            var li = document.createElement('li');
            lis.appendChild(li);
            //设置索引号
            li.setAttribute('index', i);
            li.addEventListener('click', function () {
                //获得索引号
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                for (var i = 0; i < lis.children.length; i++) {
                    lis.children[i].className = '';
                }
                this.className = 'selected';
                animate(pic, -index * boxWidth)
                animate(pictwo, -num * boxWidth)
                animate(picthree, -num * boxWidth)
            })
        }
        lis.children[0].className = 'selected';
        //克隆第一个li
        var first = pic.children[0].cloneNode(true);
        pic.appendChild(first);
        first = pictwo.children[0].cloneNode(true);
        pictwo.appendChild(first);
        first = picthree.children[0].cloneNode(true);
        picthree.appendChild(first);
        var num = 0;
        var circle = 0;
        //右侧按钮的功能
        right.addEventListener('click', function () {
            clearInterval(timer);
            if (num == pic.children.length - 1) {
                pic.style.left = 0;
                pictwo.style.left = 0;
                picthree.style.left = 0;
                num = 0;
            }
            num++;
            animate(pic, -num * boxWidth);
            animate(pictwo, -num * boxWidth);
            animate(picthree, -num * boxWidth);
            circle++;
            if (circle == lis.children.length) {
                circle = 0;
            }
            for (var i = 0; i < lis.children.length; i++) {
                lis.children[i].className = '';
            }
            lis.children[circle].className = 'selected';
            time2();
        })
        //左侧按钮功能
        left.addEventListener('click', function () {
            clearInterval(timer);
            if (num == 0) {
                num = pic.children.length - 1;
                pic.style.left = -num * boxWidth + 'px';
                pictwo.style.left = -num * boxWidth + 'px';
                picthree.style.left = -num * boxWidth + 'px';
            }
            num--;
            animate(pic, -num * boxWidth);
            animate(pictwo, -num * boxWidth);
            animate(picthree, -num * boxWidth);
            circle--;
            if (circle < 0) {
                circle = lis.children.length - 1;
            }
            for (var i = 0; i < lis.children.length; i++) {
                lis.children[i].className = '';
            }
            lis.children[circle].className = 'selected';
        })
        // this.timer = setInterval(function () {

        //     if (window.location.href == this.hrefs) {
        //         console.log(123);
        //         right.click();
        //     } else {
        //         clearInterval(this.timer);
        //     }
        // }, 5000)

        function time2() {
            timer = setTimeout(() => {
                if (window.location.href == hrefff) {
                    right.click()
                }
            }, 2000)
        }
        time2()
    }
}

</script>
<style>
#one-center-two {
    box-sizing: border-box;
    padding: 1% 1% 0 0;
    float: left;
    width: 50%;
    height: 100%;
}

#one-right-two-two {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 2% 3% 0% 3%;
}

#right-tow {
    width: 100%;
    height: 100%;
}

li {
    list-style: none;
}

.box {
    position: relative;
    overflow: hidden;
    width: 6.6vw;
    height: 90%;
    float: left;
    color: rgb(218, 232, 255);
}

.pic img {
    width: 6.6vw;
    height: 6.6vw;
}

.pictext {
    height: 20px;
    text-align: center;
}

.jiantou {
    font-size: 24px;
    text-decoration: none;
    display: block;
    text-align: center;
    width: 20px;
    height: 30px;
    line-height: 30px;
    background: rgba(158, 154, 154, 0.7);
    color: white;
    z-index: 999;
}

.left {
    position: absolute;
    top: 50%;
    left: 10px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: none;
}

.right {
    position: absolute;
    top: 50%;
    right: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display: none;
}


.box .pic {
    width: 500%;
}

.pic {
    position: absolute;
}

.pic li {
    float: left;
}

.lis {
    position: absolute;
    bottom: 5px;
    left: 50%;
    margin-left: -35px;
    width: 70px;
    height: 13px;
    border-radius: 7px;
    /* background: rgba(158, 154, 154, 0.7); */
}

.lis li {
    float: left;
    width: 8px;
    height: 8px;
    margin: 3px;
    border-radius: 50%;
    background-color: #fff;

}

.lis .selected {
    background-color: cyan;
}

#toptext {
    color: rgb(112, 185, 230);
    text-align: center;
    font-weight: bolder;
}

.litext {
    width: 6vw;
    font-size: 0.7rem;
}
</style>
