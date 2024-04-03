<script setup lang="ts">
import Bottom from '@/components/Bottom.vue';
import { onMounted, ref } from 'vue';
import $ from 'jquery'
const padstyle = ref('')
onMounted(() => {
  if ($('#jizhun').css('font-size') === '12px') {
    padstyle.value = 'pad-300'
  }
})
</script>

<template>
  <main class="main">
    <header class="header" :class="padstyle">
      <div class="title">
        <img src="~@/assets/矩形.png" />
        <span>换枪盘选型软件</span>
      </div>
      <div class="user-info">
        <span>登录</span>
        <span>注册</span>
      </div>
    </header>
    <div class="middle" :class="padstyle">
      <div class="round-group">
        <div class="round-rect hover">
          <div class="top">
            总成配量方率：Xx
          </div>
          <div class="bottom">
            <span class="label">整套数量：</span>
            <span class="value">3</span>
          </div>
          <img src="~@/assets/编组 11.png" />
          <div class="divider" />
        </div>
        <div class="round-rect">
          <div class="top">
            总成配量方率：Xx
          </div>
          <div class="bottom">
            <span class="label">整套数量：</span>
            <span class="value">3</span>
          </div>
          <div class="divider" />
        </div>
        <div class="round-rect">
          <div class="top">
            总成配量方率：Xx
          </div>
          <div class="bottom">
            <span class="label">整套数量：</span>
            <span class="value">3</span>
          </div>
          <div class="divider" />
        </div>
        <div class="round-rect">
          <div class="top">
            总成配量方率：Xx
          </div>
          <div class="bottom">
            <span class="label">整套数量：</span>
            <span class="value">3</span>
          </div>
          <div class="divider" />
        </div>
        <div class="round-rect">
          <div class="top">
            总成配量方率：Xx
          </div>
          <div class="bottom">
            <span class="label">整套数量：</span>
            <span class="value">3</span>
          </div>
          <div class="divider" />
        </div>
        <div class="add-rect">
          <img src="~@/assets/编组 10.png" />
          <span>添加</span>
        </div>
      </div>
      <div class="allocation-group">
        <span class="label">配置清单：</span>
        <button>预览</button>
        <button>下载</button>
      </div>
    </div>
    <Bottom />
  </main>
</template>

<style scoped lang="scss">
.main {
  height: 100vh;
  width: 1920px;
  overflow: auto;
  .header {
    height: 82px;
    background: #EBEBEB;
    padding: 0 362px 0 396px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    &.pad-300 {
      padding: 0 292px 0 326px;
    }
    .title {
      font-size: 22px;
      display: flex;
      align-items: center;
      gap: 15px;
      img {
        height: 25px;
      }
    }
    .user-info {
      display: flex;
      gap: 22px;
      align-items: center;
      font-size: 11px;
    }
  }
  .middle {
    height: 101px;
    border-bottom: 1px solid #E0E0E0;
    padding: 24px 359px 0 362px;
    display: flex;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    &.pad-300 {
      padding: 24px 289px 0 292px;
    }
    .allocation-group {
      margin-top: 10px;
      font-size: 11px;
      .label {
        margin-right: 9px;
        color: #B6B6B6;
      }
      button {
        width: 49px;
        height: 21px;
        border: 1px solid #9E9E9E;
        border-radius: 2px;
        line-height: 21px;
        text-align: center;
        color: #6E6E6E;
      }
      &>:last-child {
        margin-left: 7px;
      }
    }
    .round-group {
      display: flex;
      gap: 16px;
      .round-rect {
        width: 149px;
        height: 77px;
        border-radius: 16px 16px 0 0;
        position: relative;
        background-color: #535353;
        font-size: 13px;
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        .top {
          height: 40px;
          line-height: 40px;
          padding-left: 9px;
        }
        .bottom {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 4px 26px 8px 17px;
          .value {
            display: inline-block;
            width: 40px;
            height: 24px;
            border-radius: 2px;
            background-color: #DBDBDB;
            line-height: 24px;
            text-align: center;
            color: #404040;
            font-size: 0.5625rem;
          }
        }
        img {
          height: 14px;
          position: absolute;
          right: 14px;
          top: 17px;
        }
        .divider {
          position: absolute;
          height: 1px;
          background-color: #6B6B6B;
          width: 100%;
          top: 40px;
        }
        &.hover {
          background-color: #F08E21;
          .divider {
            background-color: #F2AE61;
          }
        }
      }
      .add-rect {
        border-radius: 16px 16px 0 0;
        height: 77px;
        width: 99px;
        box-sizing: border-box;
        padding: 25px 0 21px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 0.625rem;
        color: #FFFFFF;
        margin-left: 8px;
        background-color: #000000;
        img {
          height: 12px;
        }
      }
    }
  }
}
</style>