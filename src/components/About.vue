<!-- 代表組件中所有JavaSvript程式碼 -->
<script setup></script>

<!-- 代表組件中所有html結構 -->
<template>
  <div class="about">
    <h3>【遊戲介紹】</h3>
    <p>
      這是一款
      惡趣味小遊戲，融合了一點小驚嚇元素（放心，不會太過頭），專門用來測試玩家的膽量。膽小的玩家可能覺得有點恐怖，但大膽的人應該會覺得「這就是惡搞」🤣。
    </p>
    <h3>【技術介紹】</h3>
    <p>
      本遊戲是基於 Vue 3 + Vue Router 所打造的前端專案：使用 Vue Router
      處理多頁切換（遊戲頁、關於頁）。採用 CSS
      動畫與音效事件觸發，營造小恐怖氛圍。結構上類似小型SPA，方便擴充更多關卡或事件。
    </p>

    <h3>【和經典小遊戲的差異】</h3>
    <p>
      貪食蛇 /
      彈跳球：偏向傳統邏輯與物理模擬。本遊戲：強調「氣氛體驗」＋「互動驚嚇」，在技術展示上比較貼近「組件協作
      + 音效 + 動畫 + UI 互動」的「多媒體整合」與「事件觸發」的應用。
    </p>
  </div>
</template>

<!-- 代表為組件中html設定的CSS樣式 -->
<style lang="sass" scoped>
.about
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    width: 100vw
    height: 80vh
    box-sizing: border-box
    border: 3px solid gray
    background: black
    color: lightgray
    h3
        font-size: 26px
        margin: 30px 0px
    p
        font-size: 18px
        padding: 0px 200px
</style>
