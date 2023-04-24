<template>
    <div id="three-left-top-one">
        <dv-border-box-8>
            <div style="width:100%;height:100%">
                <div id="three-left-top-tit">优惠活动力度</div>
                <dv-scroll-ranking-board :config="config" id="three-left-top-one-box" />
            </div>
        </dv-border-box-8>
    </div>
</template>
<script>


export default {
    name: 'ThreeLeftTopOne',
    data: function () {
        return {
            config: {
                data: [
                    {
                        name: '大众餐',
                        value: '8.5折'
                    },
                    {
                        name: '莫小楠水饺',
                        value: '7.7折'
                    },
                    {
                        name: '蜜雪冰城',
                        value: '6.4折'
                    },
                    {
                        name: '啊杏饭团',
                        value: '7.2折'
                    },
                    {
                        name: '东北大饼',
                        value: '7.5折'
                    },
                    {
                        name: '肠粉',
                        value: '6.9折'
                    },
                    {
                        name: '烤肉饭',
                        value: '7.5折'
                    },
                    {
                        name: '益禾堂',
                        value: '8.5折'
                    },
                    {
                        name: '遇见小面',
                        value: '9.6折'
                    },
                    {
                        name: '关东煮',
                        value: '6.6折'
                    },
                    {
                        name: '水果店',
                        value: '8.1折'
                    },
                    {
                        name: '血鸭拌粉',
                        value: '7.1折'
                    },
                    {
                        name: '壹乐',
                        value: '7.9折'
                    },
                    {
                        name: '杰西五汉堡',
                        value: '8.1折'
                    },
                    {
                        name: '烧腊',
                        value: '6.9折'
                    },
                    {
                        name: '古茗',
                        value: '7.2折'
                    },
                    {
                        name: '麻辣烫',
                        value: '8.3折'
                    },

                ]
            }
        }
    }
}
</script>
<style>
#three-left-top-one {
    width: 55%;
    height: 100%;
    float: left;
}

#three-left-top-one-box {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10% 5% 0% 5%;
}

#three-left-top-tit {
    position: absolute;
    left: 38%;
    top: 5%;
    color: rgb(112, 185, 230);
    font-size: 2.2rem;
}
</style>