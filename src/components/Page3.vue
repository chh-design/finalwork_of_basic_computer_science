<template>
    <div id="page3">
        <h1>照片展示</h1>
        <div id="display">
        <button id="l" v-on:click="left"><b>&lt;</b></button>
            <img :src='require("../assets/p" + (num%13+1) + ".jpg")'>
        <button id="r" v-on:click="right"><b>&gt;</b></button>
        <br>
        <label>第{{(num%13+1)}}张，共13张</label>
        </div>
    </div>
</template>
<style scoped>
    h1 {text-align:center;font-size:40px;}
    button
        {
        height:100px;
        width:40px;
        vertical-align:middle;
        background-color: rgba(67, 67, 245, 0.527);

        }
    [id="display"]
        {
            margin-top:50px;
            margin-bottom:40px;
            text-align: center;
        }
    img
        {
            /* width: 600px; */
            height: auto;
            max-height: 500px;
            max-width: 600px;
            min-width: 350px;
            overflow: hidden;
            vertical-align:middle;
            margin-inline:40px;
        }
    label
        {
            text-align: center;
        }
</style>

<script>
export default {
    data(){
        return{
        num:1300,
        }
    },
    methods:{
        left(){this.num -= 1},
        right(){this.num += 1}
    }
}
</script>