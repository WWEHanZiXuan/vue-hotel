<template>
  <div class="layout">
    <div class="header">
      <div class="left">
        <div class="left-img"></div>
        <div class="left-word">酒店服务管理平台</div>
      </div>
      <div class="right">
        <img src="../assets/images/singout.png" class="img" />
        <div class="singOut" @click="clickOut">退出</div>
      </div>
    </div>
    <div class="middle">
      <div class="left-Sidebar">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          :default-active="$route.path"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          style="background-color: #f8f8f8"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              <span slot="title">酒店管理</span>
            </template>
            <el-menu-item-group style="background-color: #f8f8f8">
              <el-menu-item index="/hotel">酒店管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">客房管理</span>
            </template>
            <el-menu-item-group style="background-color: #f8f8f8">
              <el-menu-item index="/guestRoom">客房管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span slot="title">服务管理</span>
            </template>
            <el-menu-item-group style="background-color: #f8f8f8">
              <el-menu-item index="/service">服务管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-shopping-cart-2"></i>
              <span slot="title">小超市管理</span>
            </template>
            <el-menu-item-group style="background-color: #f8f8f8">
              <el-menu-item index="/market">商品管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-folder-opened"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group style="background-color: #f8f8f8">
              <el-menu-item index="/order">订单详情</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-collection"></i>
              <span slot="title">旅游攻略</span>
            </template>
            <el-menu-item-group style="background-color: #f8f8f8">
              <el-menu-item index="/travel">旅游攻略</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div>
        <router-view></router-view>
      </div>
      <!--
    <div class="content">
      <div class="content-top">
        <div class="administration">酒店管理</div>
        <div class="information">酒店信息</div>
      </div>
      <div class="advertising-Column">
        <div class="text">搜索条件</div>
        <img src="../assets/images/help.png" class="help" />
      </div>
      <div class="search-Box">
        <div class="search">
          <el-input v-model="value" placeholder="输入酒店名称查找"></el-input>
        </div>
        <div class="button">
          <div class="block">
            <span class="demonstration">每页显示</span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="5" :page-sizes="[5, 10, 50, 100]" layout="sizes">
            </el-pagination>
          </div>
          <div class="danger">
            <el-button type="danger">搜索</el-button>
          </div>
        </div>
      </div>
      <div class="hotel">
        <div class="newly ">酒店信息</div>
        <div class="added">新增</div>
      </div>
      <div class="form">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" :index="indexMethod" fixed label="序号" width="100">
          </el-table-column>
          <el-table-column prop="name" label="酒店名称" width="200">
          </el-table-column>
          <el-table-column prop="date" label="创建时间" width="300">
          </el-table-column>
          <el-table-column prop="number" label="客房数量" width="100">
          </el-table-column>
          <el-table-column prop="employees" label="员工数量" width="100">
          </el-table-column>
          <el-table-column prop="account" label="管理员账号" width="120">
          </el-table-column>
          <el-table-column prop="telephone" label="管理员电话" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    --></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 退出登录
    clickOut() {
      localStorage.removeItem("userName");
      this.$router.push("/login");
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.header {
  width: 1473.61px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
}

.left {
  width: 340px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.left-img {
  width: 156px;
  height: 56px;
  background: chocolate;
}

.left-word {
  font-size: 20px;
  color: #f55d54;
}

.right {
  width: 100px;
  display: flex;
  align-items: center;
  margin-top: -14px;
}

.img {
  width: 16px;
  height: 16px;
}

.singOut {
  font-size: 14px;
  color: #f55d54;
  margin-left: 8px;
}

.left-Sidebar {
  width: 200px;
  height: 700px;
  border: 1px solid #f8f8f8;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 500px;
  border: 1px solid #fff;
}

.middle {
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
}

.content {
  width: 1200px;
  height: 700px;
  margin-top: 10px;
}

// .content-top {
//   width: 1190px;
//   height: 90px;
// }

// .administration {
//   color: #a2a4a2;
//   font-size: 14px;
//   margin-left: 10px;
//   margin-top: 10px;
// }

// .information {
//   color: #000;
//   font-size: 13px;
//   font-weight: 600;
//   margin-left: 20px;
//   margin-top: 20px;
// }

// .advertising-Column {
//   width: 1190px;
//   height: 62px;
//   background: #e0e0e0;
//   margin-top: 10px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .text {
//   font-size: 14px;
//   margin-left: 10px;
// }

// .help {
//   width: 20px;
//   height: 20px;
//   margin-right: 60px;
// }

// .search-Box {
//   width: 1190px;
//   height: 88px;
//   background: #ffffff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .search {
//   width: 204px;
//   height: 40px;
//   margin-left: 10px;
// }

// .button {
//   display: flex;
//   align-items: center;
//   margin-right: 40px;
// }

// .block {
//   display: flex;
//   align-items: center;
// }

// .demonstration {
//   font-size: 13px;
// }

// .hotel {
//   width: 1190px;
//   height: 50px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .newly {
//   font-size: 13px;
//   margin-left: 10px;
// }

// .added {
//   font-size: 10px;
//   margin-right: 60px;
//   margin-top: 20px;
// }

// .form {
//   width: 1190px;
//   height: 350px;
//   margin-top: 10px;
// }
</style>
