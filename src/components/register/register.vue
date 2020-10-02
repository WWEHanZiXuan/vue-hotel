<template>
<div class="login">
  <div class="text">酒店服务管理平台</div>
  <div class="input">
    <div class="username">
      <el-input v-model="username" placeholder="账户名"></el-input>
    </div>
    <div class="password">
      <el-input placeholder="账户密码" v-model="password" show-password></el-input>
    </div>
  </div>
  <div class="button">
    <div class="word">登录</div>
  </div>
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.login {
  width: 923px;
  height: 620px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text {
  text-align: center;
  font-size: 18px;
  color: #000;
}

.input {
  width: 394px;
  height: 100px;
  margin: 0 auto;
}

.username {
  width: 394px;
  height: 40px;
  padding: 15px 0;
}

.password {
  width: 394px;
  height: 40px;
}

.button {
  width: 350px;
  height: 40px;
  margin: 0px auto;
  border: 1px solid #f55d54;
  background: #f55d54;
  border-radius: 8px;
  margin-top: 20px;
}

.word {
  line-height: 40px;
  text-align: center;
  color: #ffffff;
}
</style>
