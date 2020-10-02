<template>
<div class="login">
  <div class="text">酒店服务管理平台</div>
  <div class="input">
    <div class="username">
      <el-input v-model="userName" placeholder="账户名"></el-input>
    </div>
    <div class="password">
      <el-input placeholder="账户密码" v-model="passWord" show-password></el-input>
    </div>
  </div>
  <div class="button">
    <div class="words" @click="clickRegister">注册</div>
    <div class="word" @click="clickLogin">登录</div>
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
      userName: "",
      passWord: "",
    };
  },
  methods: {
    // 注册
    clickRegister() {
      this.$api
        .getRegister(this.userName, this.passWord)
        .then((res) => {
          if (res.code === 200) {
            console.log(res);
            this.$message.success("注册成功");
          } else {
            // this.$message.error("注册失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 登录
    clickLogin() {
      this.$api
        .getLogin(this.userName, this.passWord)
        .then((res) => {
          if (res.code === 200) {
            console.log(res);
            this.$message.success("登录成功");
            localStorage.setItem("userName", this.userName);
            this.$router.push("/");
          } else {
            // this.$message.error("登录失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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
  display: flex;
  margin-top: 20px;
}

.words {
  width: 160px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #67c23a;
  background: #67c23a;
  color: #fff;
}

.word {
  width: 160px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #f55d54;
  background: #f55d54;
  margin-left: 20px;
  color: #fff;
}
</style>
