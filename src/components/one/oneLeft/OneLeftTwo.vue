<template>
    <div id="one-left-two">
        <dv-border-box-8>
            <div style="width:100%;height:100%;">
                <div class="xf">
                    <div class="xx">宿舍的外卖数量</div>
                    <dv-scroll-board :config="config" style="color:rgb(218,232,255);width:98%;height:83%" />
                </div>
            </div>
        </dv-border-box-8>
    </div>
</template>
<script>
export default {
    name: 'OneLeftTwo',
    data() {
        return {
            config: {
                header: ['公寓', '早', '中', '晚', '夜宵'],
                data: [
                    ['学1', '25', '107', '87', '43'],
                    ['学2', '19', '129', '98', '56'],
                    ['学3', '14', '94', '103', '77'],
                    ['学4', '17', '110', '79', '33'],
                    ['学5', '39', '89', '125', '29'],
                    ['学6', '22', '127', '114', '64'],
                    ['学7', '31', '134', '139', '58'],
                    ['学8', '18', '145', '133', '26'],
                    ['学9', '23', '159', '96', '47'],
                    ['学10', '27', '98', '89', '39']
                ],
                index: true,
                columnWidth: [45],
                headerBGC: 'rgb(62, 92, 110)',
                align: ['center']
            }
        }
    }
}
</script>
<style>
#one-left-two{
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 60%;
}

.xx {
    box-sizing: border-box;
    padding: 15px 0px 15px 0px;
    color: rgb(112, 185, 230);
    text-align: center;
    font-size: 16px;
    font-weight: bolder;
}

.xf {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 3%;
}
</style>