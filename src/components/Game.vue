<!-- 代表組件中所有JavaSvript程式碼 -->
<script setup>
import Chapterone from "./chapterone/Chapterone.vue";
import Chaptertwo from "./chaptertwo/Chaptertwo.vue";
import Opening from "./Opening.vue";
import { ref } from "vue";
const currentChapter = ref("opening");

function handleFinished() {
  currentChapter.value = "chapterone";
}
function chtwoHandler() {
  currentChapter.value = "chaptertwo";
}

function getComponent(chapter) {
  switch (chapter) {
    case "opening":
      return Opening;
    case "chapterone":
      return Chapterone;
    case "chaptertwo":
      return Chaptertwo;
  }
}
</script>

<!-- 代表組件中所有html結構 -->
<template>
  <div class="container">
    <!-- 🔹 修改：用 <component> 動態切換章節 -->
    <transition name="fade" mode="out-in">
      <component
        :is="getComponent(currentChapter)"
        :key="currentChapter"
        @finished="handleFinished"
        @isChtwo="chtwoHandler"
      />
    </transition>
  </div>
</template>

<!-- 代表為組件中html設定的CSS樣式 -->
<style lang="sass" scoped>
.container

  border: 3px solid gray
  width: 100vw
  height: 80vh
  box-sizing: border-box
  background: black
  overflow: hidden

.fade-leave-active
  transition: opacity 3s ease
.fade-enter-active
  transition: opacity 3s ease

.fade-leave-to,.fade-enter-from
  opacity: 0
</style>
