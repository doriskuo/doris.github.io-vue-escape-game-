<!-- 代表組件中所有JavaSvript程式碼 -->
<script setup></script>

<!-- 代表組件中所有html結構 -->
<template>
  <nav>
    <ul>
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/about">關於這個遊戲</router-link></li>
    </ul>
  </nav>
</template>

<!-- 代表為組件中html設定的CSS樣式 -->
<style lang="sass" scoped>
nav
  border: 1px solid gray
  display: flex
  height: 10vh
  box-sizing: border-box
  align-items: center
  background: black
  ul
    display: flex
    padding-left: 20px
    li
      list-style: none
      padding: 10px
      a
        text-decoration: none
        color: gray
</style>
