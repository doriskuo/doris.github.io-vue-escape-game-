<!-- 代表組件中所有JavaSvript程式碼 -->
<script setup>
import { onMounted, defineEmits } from "vue";
const emit = defineEmits(["finished"]);

onMounted(() => {
  setTimeout(() => {
    emit("finished");
  }, 18000);
});
</script>

<!-- 代表組件中所有html結構 -->
<template>
  <div class="opening">
    <div class="container">
      <div class="head"></div>
      <div class="exclamation">！</div>
      <div class="sweat"></div>
      <div class="body"></div>
      <div class="leftarm up"></div>
      <div class="leftarm low"></div>
      <div class="rightarm up"></div>
      <div class="rightarm low"></div>
      <div class="leftleg up"></div>
      <div class="leftleg low"></div>
      <div class="rightleg"></div>
      <div class="line a"></div>
      <div class="line b"></div>
      <div class="line c"></div>
      <div class="line d"></div>
    </div>
    <div class="exit"></div>
    <div class="text text1">
      利用你的聰明才智，從這個不見天日的洞窟裡逃脫吧！
    </div>
    <div class="text text2">小心！不要讓後面的東西追上！</div>
    <div class="text text3">按下開始鍵，體驗腦洞大開惡搞遊戲！</div>
  </div>
</template>

<!-- 代表為組件中html設定的CSS樣式 -->
<style lang="sass" scoped>
.opening
    position: absolute
    width: 100%
    height: 100%
    animation: opening 1s forwards
    .container
        position: absolute
        width: 500px
        height: 500px
        opacity: 0
        animation: showup 2s 4s forwards, movein 3s 4s forwards
        .head
            position: absolute
            width: 80px
            height: 80px
            top: 130px
            left: 420px
            background: gray
            border-radius: 50%
        .exclamation
            font-size: 38px
            color: white
            position: absolute
            top: 90px
            left: 490px
            opacity: 0
            animation: shock 2s 6s forwards
        .sweat
            position: absolute
            width: 3px
            height: 28px
            background: black
            top: 130px
            left: 440px
            opacity: 0
            animation: sweat 3s 6s forwards
            &::before
                content: ""
                display: block
                position: absolute
                width: 3px
                height: 30px
                background: black
                top: 0px
                left: 10px
            &::after
                content: ""
                display: block
                position: absolute
                width: 3px
                height: 20px
                background: black
                top: 0px
                left: 20px

        .body
            position: absolute
            top: 220px
            left: 280px
            width: 150px
            height: 80px
            background: gray
            border-radius: 10px
            transform: rotate(140deg)
        .leftarm
            position: absolute
            width: 30px
            background: gray
            border-radius: 20px
            &.up
                height: 60px
                top: 155px
                left: 345px
                transform: rotate(120deg)
            &.low
                height: 100px
                top: 125px
                left: 285px
                transform: rotate(90deg)
        .rightarm
            position: absolute
            width: 30px
            background: gray
            border-radius: 20px
            &.up
                height: 60px
                top: 230px
                left: 410px
                transform: rotate(160deg)
            &.low
                height: 80px
                top: 250px
                left: 445px
                transform: rotate(90deg)

        .leftleg
            position: absolute
            width: 40px
            background: gray
            border-radius: 20px
            &.up
                height: 100px
                top: 305px
                left: 343px
                transform: rotate(140deg)
            &.low
                height: 140px
                top: 310px
                left: 315px
                transform: rotate(90deg)

        .rightleg
            position: absolute
            width: 40px
            background: gray
            border-radius: 20px
            height: 100px
            top: 370px
            left: 300px
            transform: rotate(220deg)

        .line
            position: absolute
            height: 10px
            background: gray
            border-radius: 20px
            &.a
                width: 230px
                top: 220px
                left: 60px
            &.b
                width: 190px
                top: 260px
                left: 60px
            &.c
                width: 200px
                top: 300px
                left: 60px
            &.d
                width: 220px
                top: 340px
                left: 60px

    .exit
        position: absolute
        right: 50px
        bottom: 300px
        width: 50px
        height: 50px
        background: #fff
        box-shadow: 0 0 20px 10px gray
        border-radius: 30px
        opacity: 0
        animation: showup 2s 2s forwards , showoff 2s 5s forwards

    .text
        font-size: 20px
        position: absolute
        color: gray
        width: 0
        display: inline-block
        overflow: hidden
        white-space: nowrap
        border-right: 2px solid transparent

    .text1
        top: 150px
        left: 100px
        animation: typing 3s steps(25, end) 7s forwards
    .text2
        top: 230px
        left: 100px
        animation: typing 3s steps(25, end) 11s forwards
    .text3
        top: 310px
        left: 100px
        animation: typing 3s steps(25, end) 14s forwards

@keyframes opening
    0%
        transform: scale(0) rotate(0deg)
    100%
        transform: scale(1) rotate(360deg)


@keyframes showup
    0%
        opacity: 0
    100%
        opacity: 1

@keyframes showoff
    0%
        opacity: 1
    100%
        opacity: 0

@keyframes movein
    0%
        left: -200px
    100%
        left: 600px
        transform: scale(0.5)

@keyframes sweat
    0%
        opacity: 0
    100%
        opacity: 1

@keyframes backforth
    0%
        transform: scaleX(0.5)
    30%
        transform: scaleX(-0.5)
    60%
        transform: scaleX(0.5)
    100%
        transform: scaleX(-0.5)

@keyframes shock
    0%
        opacity: 1
        transform: scale(3) translate(3px)
    10%
        transform: translate(-3px)
    20%
        transform: translate(3px)
    30%
        transform: translate(-3px)
    100%
        opacity: 0
        transform: scale(0)

@keyframes typing
    from
        width: 0
    to
        width: 24em
</style>
