<template>
<div class="box">
  <div class="content">
    <div class="content-top">
      <div class="administration">商品够买</div>
      <div class="information">订单详情</div>
    </div>
    <div class="advertising-Column">
      <div class="text">详细信息</div>
    </div>
    <div class="order">
      <div class="oddNumbers">服务单号:20121203</div>
      <div class="hotel">所属酒店:汉庭酒店</div>
      <div class="tenantNumber">房客号:2012</div>
      <div class="commodity">商品:</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  height: 700px;
  margin-top: 10px;
  border: 1px solid red;
}

.content-top {
  width: 1190px;
  height: 90px;
}

.administration {
  color: #a2a4a2;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
}

.information {
  color: #000;
  font-size: 13px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
}

.advertising-Column {
  width: 1190px;
  height: 62px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dddddd;
}

.text {
  font-size: 14px;
  margin-left: 10px;
}

.order {
  width: 1190px;
  height: 321px;
  border: 1px solid red;
}
</style>
