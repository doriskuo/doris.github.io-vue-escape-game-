<!-- 代表組件中所有JavaSvript程式碼 -->
<script setup>
import { ref } from "vue";
import { playSound, stopSound, playRunSound } from "./sounds";
import { onUnmounted } from "vue";
const sprintlineSrc = import.meta.env.BASE_URL + "pictures/sprintline.png";
const isShow = ref(false);
const isOn = ref(false);
const isOff = ref(true);
const isCount = ref(false);
const isRestart = ref(false);
const sprintActive = ref(false);
const horrorActive = ref(false);
const chapterShow = ref("block");
const isNext = ref(false);
const counter = ref(3);
const isHorror = ref(false);
const imageSrc = ref("");
const hp = ref(50);
const x = ref(null);
const holeSize = ref(10);
const sucessSitch = ref("none");
const failSwitch = ref("none");
const gameOver = ref(false);
const failmsg = ref("");
const emit = defineEmits(["finished", "isChtwo"]);

const failmsghandler = () => {
  x.value = Math.floor(Math.random() * 10);
  isHorror.value = false;
  requestAnimationFrame(() => {
    imageSrc.value = import.meta.env.BASE_URL + `pictures/horror${x.value}.png`;
    isHorror.value = true; // 顯示圖片
  });
  switch (x.value) {
    case 0:
      failmsg.value = "你就乖乖跟我去陰曹地府吧";
      playSound("fail0");
      break;
    case 1:
      failmsg.value = "您手指有事嗎？";
      playSound("fail1");
      break;
    case 2:
      failmsg.value = "恭喜你成為此洞窟中，永、遠、的、NPC";
      playSound("fail2");
      break;
    case 3:
      failmsg.value = "抓、到、你、了......";
      playSound("fail3");
      break;
    case 4:
      failmsg.value = "不是、我看您是腿軟了吧？";
      playSound("fail4");
      break;
    case 5:
      failmsg.value = "回頭看看我....";
      playSound("fail5");
      break;
    case 6:
      failmsg.value = "這都能輸，要給你一個靠腰的BGM嗎？";
      playSound("fail6");
      break;
    case 7:
      failmsg.value = "追上了....";
      playSound("fail7");
      break;
    case 8:
      failmsg.value = "前面沒路了，你要去哪？";
      playSound("fail8");
      break;
    case 9:
      failmsg.value = "前面那個你確定是人？";
      playSound("fail9");
      break;
  }
  horrorActive.value = true;
};
let timerId = null;

const onOffHandler = () => {
  chapterShow.value = "none";
  playSound("bgsound");
  stopSound("ghostbreath");
  isOn.value = true;
  isShow.value = true;
  isOff.value = false;
  gameOver.value = true;

  setTimeout(() => {
    timerId = setInterval(() => {
      if (counter.value > 1) {
        counter.value -= 1;
      } else if (counter.value === 1) {
        isShow.value = false;
        clearInterval(timerId);
        gameOver.value = false;
        startHandler();
      }
    }, 1000);
  }, 12000);
};

const startHandler = () => {
  playSound("escape", { loop: true });
  isCount.value = true;
  counter.value = 10;
  timerId = setInterval(() => {
    if (counter.value > 0 && hp.value > 0) {
      counter.value -= 1;
      hp.value -= 40;
      if (hp.value <= 0) {
        hp.value = 0; // 避免負數
        clearInterval(timerId);
        failmsghandler();
        isCount.value = false;
        failSwitch.value = "block";
        isRestart.value = true;
        gameOver.value = true;
        isOn.value = false;
        stopSound("escape");
      }
    } else if (counter.value === 0) {
      clearInterval(timerId);
      failmsghandler();
      isCount.value = false;
      failSwitch.value = "block";
      gameOver.value = true;
      isRestart.value = true;
      isOn.value = false;
      stopSound("escape");
    }
  }, 1000);
};

const restart = () => {
  playSound("escape", { loop: true });
  stopSound("ghostbreath");
  horrorActive.value = false;
  isRestart.value = false;
  hp.value = 80;
  holeSize.value = 10;
  counter.value = 10;
  isCount.value = true;
  failSwitch.value = "none";
  gameOver.value = false;
  isOn.value = true;
  timerId = setInterval(() => {
    if (counter.value > 0 && hp.value > 0) {
      counter.value -= 1;
      hp.value -= 40;
      if (hp.value <= 0) {
        hp.value = 0; // 避免負數
        clearInterval(timerId);
        failmsghandler();
        isCount.value = false;
        failSwitch.value = "block";
        isRestart.value = true;
        gameOver.value = true;
        isOn.value = false;
        stopSound("escape");
      }
    } else if (counter.value === 0) {
      clearInterval(timerId);
      failmsghandler();
      isCount.value = false;
      failSwitch.value = "block";
      gameOver.value = true;
      isRestart.value = true;
      isOn.value = false;
      stopSound("escape");
    }
  }, 1000);
};

const hpup = () => {
  if (gameOver.value) return;
  if (hp.value < 380) {
    hp.value += 10;
    holeSize.value += 1;
    sprintActive.value = false;
    playRunSound();
    requestAnimationFrame(() => {
      sprintActive.value = true;
    });
  } else if (hp.value == 380) {
    clearInterval(timerId);
    isCount.value = false;
    sucessSitch.value = "block";
    stopSound("escape");
    playSound("powerfull");
    gameOver.value = true;
    setTimeout(() => {
      playSound("ghostbreath", { loop: true });
    }, 2000);
    isNext.value = true;
  }
};

const goNext = () => {
  stopSound("ghostbreath");
  emit("isChtwo");
};

onUnmounted(() => {
  // 離開頁面或組件卸載時停止所有音效
  stopSound("escape");
  stopSound("bgsound");
  stopSound("ghostbreath");
});
</script>

<!-- 代表組件中所有html結構 -->
<template>
  <div class="chapter-wrapper">
    <div class="storycard" @click="hpup">
      <div
        class="exit"
        v-if="isOn"
        :style="{ width: holeSize + 'px', height: holeSize + 'px' }"
      ></div>
      <div class="chapterOne" :style="{ display: chapterShow }">第一章</div>
      <button class="startbtn" v-if="isOff" @click="onOffHandler">
        開始遊戲
      </button>
    </div>
    <button class="restart" v-if="isRestart" @click="restart">
      厚著臉皮重新開始
    </button>
    <button class="next" v-if="isNext" @click="goNext">開始下一章</button>
    <div class="sprintline" :class="{ active: sprintActive }">
      <img :src="sprintlineSrc" />
    </div>
    <div class="horror" v-if="isHorror" :class="{ active: horrorActive }">
      <img :src="imageSrc" />
    </div>
    <div class="text text1" v-if="isShow">
      快跑～！10秒內快速點擊滑鼠，拉滿你的血條....
    </div>
    <div class="text text2" v-if="isShow">
      否則你將沒有力氣再走出這座洞窟了！
    </div>
    <div class="text text3" v-if="isShow">集中注意力，倒數3秒.... ....</div>
    <div class="text countdown" v-if="isShow">{{ counter }}</div>

    <div class="hpbox" v-if="isOn">
      <div class="hp" :style="{ height: hp + 'px' }"></div>
    </div>
    <div class="counter" v-if="isCount">{{ counter }}</div>
    <div class="success" :style="{ display: sucessSitch }">
      恭喜你，你成功集滿血條了！
    </div>
    <div class="fail" :style="{ display: failSwitch }">{{ failmsg }}</div>
  </div>
</template>

<!-- 代表為組件中html設定的CSS樣式 -->
<style lang="sass" scoped>
.chapter-wrapper
  position: relative
  width: 100%
  height: 100%
  .storycard
      width: 100%
      height: 100%
      display: flex
      flex-direction: column
      justify-content: flex-end
      align-items: center
      .exit
          width: 10px
          height: 10px
          background: #fff
          margin-bottom: 350px
          border-radius: 50%
          box-shadow: 0px 0px 20px 5px #fff
      .chapterOne
          font-size: 40px
          opacity: 0
          color: gray
          animation: showup 1s forwards
          margin-bottom: 200px
      .startbtn
          width: 200px
          height: 50px
          font-size: 30px
          background: none
          user-select: none
          color: gray
          border: 1px solid gray
          border-radius: 3px
          margin-bottom: 40px
          cursor: pointer



  .hpbox
      position: absolute
      right: 180px
      top: 80px
      width: 50px
      height: 380px
      border: 1px solid gray
      display: flex
      align-items: flex-end
      pointer-events: none
      user-select: none
      .hp
          width: 50px
          min-height: 0px
          max-height: 380px
          background-color: red
          pointer-events: none
          user-select: none


  .counter
      position: absolute
      right: 80px
      top: 50px
      color: #fff
      font-size: 36px
      animation: blink 1s infinite
      pointer-events: none

  .success
      z-index: 5
      position: absolute
      top:50%
      left: 50%
      transform: translate(-50%,-50%)
      font-size: 30px
      color: #fff
      animation: showup 2s forwards
  .fail
      z-index: 7
      position: absolute
      top:50%
      left: 50%
      transform: translate(-50%,-50%)
      font-size: 30px
      color: #fff
      animation: showup 2s forwards
      width: 100%
      text-align: center

  .text
      font-size: 20px
      position: absolute
      color: gray
      width: 0
      display: inline-block
      overflow: hidden
      white-space: nowrap

  .text1
      top: 150px
      left: 100px
      animation: typing 3s steps(25, end) 1s forwards
  .text2
      top: 230px
      left: 100px
      animation: typing 3s steps(25, end) 5s forwards
  .text3
      top: 310px
      left: 100px
      animation: typing 3s steps(25, end) 9s forwards
  .countdown
      font-size: 50px
      top: 320px
      left: 380px
      animation: blink 1s 12s infinite

  .restart
    z-index: 10
    opacity: 0
    bottom: 15px
    left: 50%
    right: 50%
    transform: translate(-50%,-50%)
    position: absolute
    width: 200px
    height: 50px
    font-size: 20px
    background: none
    user-select: none
    color: gray
    border: 1px solid gray
    border-radius: 3px
    cursor: pointer
    animation: showup 2s 2s forwards

  .next
    z-index: 10
    opacity: 0
    bottom: 15px
    left: 50%
    right: 50%
    transform: translate(-50%,-50%)
    position: absolute
    width: 200px
    height: 50px
    font-size: 20px
    background: none
    user-select: none
    color: gray
    border: 1px solid gray
    border-radius: 3px
    cursor: pointer
    animation: showup 2s 2s forwards

  .sprintline
    z-index: 5
    position: absolute
    opacity: 0
    top: -80px
    left: 470px
    width: auto
    height: auto
    user-select: none
    pointer-events: none
    img
      width: 500px
      height: 500px
      pointer-events: none

  .sprintline.active
    animation: smallblink 1s ease
    pointer-events: none

  .horror
    z-index: 6
    opacity: 0
    position: absolute
    top: -80px
    left: 250px
    width: auto
    height: auto
    user-select: none
    pointer-events: none
    img
      width: 1000px
      height: 800px
      pointer-events: none

  .horror.active
    animation: thriller 1s 1s forwards

@keyframes showup
  0%
    pointer-events: none
    opacity: 0
  100%
    pointer-events: auto
    opacity: 1


@keyframes typing
  from
      width: 0
  to
      width: 24em

@keyframes blink
  0%
    width: auto
    transform: scale(1)
    opacity: 0
  50%
    transform: scale(3)
    opacity: 1

  100%
    opacity: 0
    transform: scale(1)

@keyframes smallblink
  0%
    width: auto
    transform: scale(0.8)
    opacity: 0
  50%
    transform: scale(1.2)
    opacity: 1

  100%
    opacity: 0
    transform: scale(0.8)

@keyframes thriller
  0%
    opacity: 0
    transform: rotate(5deg) scale(0)
  10%
    transform: rotate(-5deg)
  20%
    transform: rotate(5deg)
  30%
    transform: rotate(-5deg)
  100%
    opacity: 1
    transform: scale(0.8)


@media screen and (max-width:500px)
  .chapter-wrapper
    .fail,.success
      font-size: 12px

    .hpbox
      position: absolute
      right: 30px
      top: 50px
      width: 30px
      height: 380px
      border: 1px solid gray
      display: flex
      align-items: flex-end
      pointer-events: none
      user-select: none
      .hp
          width: 30px
          min-height: 0px
          max-height: 380px
          background-color: red
          pointer-events: none
          user-select: none

    .counter
      position: absolute
      right: 90px
      top: 50px
      color: #fff
      font-size: 30px
      animation: blink 1s infinite
      pointer-events: none

    .horror
      z-index: 6
      opacity: 0
      position: absolute
      display: flex
      justify-content: center
      top: -20px
      left: -10px
      width: 100%
      height: 100%
      user-select: none
      pointer-events: none
      img
        width: 500px
        height: auto
        pointer-events: none

    .text
      font-size: 12px
    .text1
      top: 150px
      left: 30px
      animation: typing 3s steps(25, end) 1s forwards
    .text2
        top: 230px
        left: 30px
        animation: typing 3s steps(25, end) 5s forwards
    .text3
        top: 310px
        left: 30px
        animation: typing 3s steps(25, end) 9s forwards
    .countdown
      font-size: 40px
      top: 320px
      left: 270px
      animation: blink 1s 12s infinite

    .sprintline
      z-index: 5
      position: absolute
      opacity: 0
      top: 20px
      left: 60px
      width: auto
      height: auto
      user-select: none
      pointer-events: none
      img
        width: 70vw
        height: auto
        pointer-events: none
</style>
