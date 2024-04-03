<script setup lang="ts">
import { onMounted, ref } from 'vue'
import $ from 'jquery'

const count = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
const padstyle = ref('')
const boxstyle = ref('')
onMounted(() => {
  if ($('#jizhun').css('font-size') === '12px') {
    padstyle.value = 'pad-300'
    boxstyle.value = 'large'
  }
})
</script>
<template>
  <div class="container" :class="padstyle">
    <div class="container-left">
      <div class="config-one">
        <div class="left">
          <div class="left-title">机人何店量方案R</div>
          <div class="left-info">
            <span>订货号：29847393846</span>
            <span>物料名称：负载10KG换枪盘R忙总成</span>
          </div>
        </div>
        <div class="config-group">
          <button>删除当前配置方案</button>
          <button>保存配置方案</button>
          <button>配置报价单</button>
        </div>
      </div>
      <div :class="boxstyle" class="box-group" style="margin-bottom: 29px;">
        <div :class="boxstyle" class="box box1">
          <img class="bg-img" src="~@/assets/微信图片_20240401232334.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span id="jizhun">物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box3">
          <img src="~@/assets/编组 5.png" />
          <span class="ope">添加模块</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box3">
          <img src="~@/assets/编组 4.png" />
          <span class="ope">添加附件</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box4">
          <div class="note-info">
            <img src="~@/assets/微信图片_20240402095817.png" />
            <span>特殊请求请备注</span>
          </div>
          <span class="place-info">请输入200字以内</span>
          <span class="limit">0/200</span>
        </div>
      </div>
      <div class="divider" />
      <div class="config-two">
        <div class="left">
          <div class="left-title">
            <span>工具测配置 方案T-1</span>
            <div class="title-info">
              <span class="label">数量：</span>
              <span class="value">3</span>
            </div>
          </div>
          <div class="left-info">
            <span>订货号：29847393846</span>
            <span>物料名称：负载10KG换枪盘R忙总成</span>
          </div>
        </div>
        <div class="del">
          <img src="~@/assets/微信图片_20240402095433.png" />
          <span>删除</span>
        </div>
      </div>
      <div :class="boxstyle" class="box-group" style="margin-bottom: 29px;">
        <div :class="boxstyle" class="box box1">
          <img class="bg-img" src="~@/assets/微信图片_20240401232424.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box3">
          <img src="~@/assets/编组 5.png" />
          <span class="ope">添加模块</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box3">
          <img src="~@/assets/编组 4.png" />
          <span class="ope">添加附件</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box4">
          <div class="note-info">
            <img src="~@/assets/微信图片_20240402095817.png" />
            <span>特殊请求请备注</span>
          </div>
          <span class="place-info">请输入200字以内</span>
          <span class="limit">0/200</span>
        </div>
      </div>
      <div class="config-three">
        <div class="left">
          <div class="left-title">
            <span>工具测配置 方案T-1</span>
            <div class="title-info">
              <span class="label">数量：</span>
              <span class="value">3</span>
            </div>
          </div>
          <div class="left-info">
            <span>订货号：29847393846</span>
            <span>物料名称：负载10KG换枪盘R忙总成</span>
          </div>
        </div>
        <div class="del">
          <img src="~@/assets/微信图片_20240402095433.png" />
          <span>删除</span>
        </div>
      </div>
      <div :class="boxstyle" class="box-group" style="margin-bottom: 29px;">
        <div :class="boxstyle" class="box box1">
          <img class="bg-img" src="~@/assets/微信图片_20240401232424.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box2">
          <div class="wuliao-num">
            <span>物料号：123456789</span>
            <div class="circle-group">
              <div class="circle" />
              <div class="circle" />
              <div class="circle" />
            </div>
          </div>
          <img class="bg-img" src="~@/assets/微信图片_20240401232136.png" />
          <span class="type-num">型号：92290290</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box3">
          <img src="~@/assets/编组 5.png" />
          <span class="ope">添加模块</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box3">
          <img src="~@/assets/编组 4.png" />
          <span class="ope">添加附件</span>
          <span class="type-info">
            介绍介绍介绍介绍介绍介绍介绍
          </span>
          <div class="del">
            <img src="~@/assets/微信图片_20240402095433.png" />
            <span>删除整套模块</span>
          </div>
        </div>
        <div :class="boxstyle" class="box box4">
          <div class="note-info">
            <img src="~@/assets/微信图片_20240402095817.png" />
            <span>特殊请求请备注</span>
          </div>
          <span class="place-info">请输入200字以内</span>
          <span class="limit">0/200</span>
        </div>
      </div>
      <button class="submit-btn">
        添加工具侧
      </button>
    </div>
    <div class="container-right">
      <div class="tabbar">
        <span>盘体</span>
        <span>传感器</span>
        <span>模块</span>
        <span>附件</span>
      </div>
      <div class="tabbar-info">
        建议：盘体负载大于等于机器人负载
      </div>
      <div :class="boxstyle" class="box-group">
        <div :class="boxstyle" class="box" v-for="item in count" :key="`${item}`">
          <img src="~@/assets/微信图片_20240401232136.png" />
          <span class="model">型号：2333333</span>
          <span class="info">介绍介绍介绍介绍介绍介绍介</span>
          <button>详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  padding: 0 360px;
  gap: 8px;
  &.pad-300 {
    padding: 0 290px;
  }
  .box {
    width: 116.79px;
    height: 208px;
    border-radius: 6px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    &.large {
      width: 136.79px;
      height: 238px;
    }
    .bg-img {
      height: 117px;
    }
    &.box1 {
      align-items: center;
      .type-num {
        font-size: 9px;
        color: #212020;
        margin: 23px 0 18px 0;
        font-weight: 600;
      }
      .type-info {
        font-size: 9px;
        color: #616161;
        text-align: left;
        margin: 0 13px 0 9px;
      }
    }
    &.box2 {
      display: flex;
      .wuliao-num {
        margin: 11px 10px 2px 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 7px;
        color: #000000;
        .circle-group {
          display: flex;
          align-items: center;
          gap: 1px;
          .circle {
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background-color: #575B66;
          }
        }
      }
      .type-num {
        font-size: 9px;
        color: #212020;
        margin: 6px auto 8px auto;
        font-weight: 600;
      }
      .type-info {
        font-size: 9px;
        color: #616161;
        text-align: left;
        margin: 0 15px 2px 7px;
      }
      .del {
        display: flex;
        align-items: center;
        gap: 3px;
        margin-left: 24px;
        font-size: 7px;
        color: #000000;
        img {
          height: 7px;
        }
      }
    }
    &.box3 {
      >img {
        height: 50px;
        margin: 31px auto 27px auto;
      }
      .ope {
        margin: 0 auto 40px auto;
        color: #000000;
        font-size: 11px;
      }
      .type-info {
        font-size: 9px;
        color: #616161;
        text-align: left;
        margin: 0 12px 3px 3px;
      }
      .del {
        display: flex;
        align-items: center;
        gap: 3px;
        margin-left: 24px;
        font-size: 7px;
        color: #000000;
        img {
          height: 7px;
        }
      }
    }
    &.box4 {
      .note-info {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: 13px;
        color: #000000;
        font-size: 11px;
        margin-top: 11px;
        img {
          height: 11px;
        }
      }
      .place-info {
        color: #CCCCCC;
        font-size: 7px;
        margin: 63px 0 77px 30px;
      }
      .limit {
        color: #5E5C5C;
        font-size: 12px;
        margin-left: 74px;
      }
    }
  }
  .container-right {
    min-width: 307px;
    height: 774px;
    border-radius: 8px;
    background-color: #FFFFFF;
    margin-top: 23px;
    position: sticky;
    top: 0;
    .box-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      margin-top: 17px;
      .box {
        width: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 90px;
          width: 90px;
        }
        .model {
          font-size: 9px;
          color: #000000;
          margin-top: 7px;
          font-weight: 700;
        }
        .info {
          font-size: 8px;
          color: #616161;
          text-align: left;
          margin: 11px 0 8px 0;
        }
        button {
          width: 87px;
          height: 24px;
          background: #F08E21;
          border-radius: 2px;
          font-size: 7px;
          color: #FFFFFF;
          line-height: 24px;
          text-align: center;
        }
      }
    }
    .tabbar {
      height: 50px;
      background-color: #080808;
      font-size: 11px;
      color: #F0F0F0;
      display: flex;
      align-items: center;
      >:first-child {
        display: inline-block;
        width: 45px;
        height: 28px;
        background: #F08E21;
        border-radius: 4px;
        line-height: 28px;
        text-align: center;
        margin-left: 48px;
      }
      >:nth-child(2) {
        margin: 0 34px 0 25px;
      }
      >:nth-child(3) {
        margin-right: 40px;
      }
    }
    .tabbar-info {
      width: 307px;
      height: 20px;
      background: #FFF6E6;
      line-height: 20px;
      text-align: center;
      font-size: 9px;
      color: #A37018
    }
  }
  .container-left {
    display: flex;
    flex-direction: column;
    .config-one,
    .config-two,
    .config-three {
      box-sizing: border-box;
    }
    .config-one {
      height: 80px;
      box-sizing: border-box;
      padding: 19px 7px 18px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        .left-title {
          font-size: 15px;
          color: #000000;
          font-weight: 600;
        }
        .left-info {
          display: flex;
          font-size: 11px;
          gap: 31px;
          align-items: center;
        }
      }
      .config-group {
        display: flex;
        gap: 18px;
        button {
          width: 150px;
          height: 41px;
          background: #0A0A0A;
          border-radius: 2px;
          color: #FFFFFF;
        }
      }
    }
    .config-two,
    .config-three {
      height: 90px;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        margin: auto 0;
        .left-title {
          font-size: 15px;
          color: #000000;
          font-weight: 600;
          display: flex;
          gap: 24px;
          align-items: center;
          .title-info {
            display: flex;
            align-items: center;
            gap: 3px;
            font-size: 11px;
            font-weight: 400;
            .value {
              display: inline-block;
              width: 102px;
              height: 19px;
              background: #EDEDED;
              border-radius: 2px;
              line-height: 19px;
              text-align: center;
            }
          }
        }
        .left-info {
          display: flex;
          font-size: 11px;
          gap: 31px;
          align-items: center;
        }
      }
      .del {
        font-size: 11px;
        color: #6E6E6E;
        margin: 66px 22px 0 0;
        display: flex;
        align-items: center;
        img {
          height: 16px
        }
      }
    }
    .config-three {
      height: 101px;
      
    }
    .box-group {
      display: flex;
      gap: 11px;
    }
    .divider {
      padding: 0 7px;
      background-color: #BDBDBD;
      height: 1px;
    }
    .submit-btn {
      background-color: #0F0F0F;
      width: 240px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      color: #FFFFFF;
      font-size: 11px;
      border-radius: 2px;
      margin-bottom: 37px;
    }
  }
}
</style>