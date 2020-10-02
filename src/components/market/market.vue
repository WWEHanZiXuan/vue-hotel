<template>
<div class="box">
  <div class="content">
    <div class="content-top">
      <div class="administration">商品管理</div>
      <div class="information">客房信息</div>
    </div>
    <div class="advertising-Column">
      <div class="text">搜索条件</div>
      <div class="help">导出</div>
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
        <el-table-column prop="name" label="商品名称" width="200">
        </el-table-column>
        <el-table-column prop="url" label="缩列图" width="140">
        </el-table-column>
        <el-table-column prop="price" label="单价" width="140">
        </el-table-column>
        <el-table-column prop="stock" label="库存" width="140">
        </el-table-column>
        <el-table-column prop="hotel" label="所属酒店" width="160">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="160">
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="text" size="small">修改</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small">上架</el-button>
            <el-button type="text" size="small">下架</el-button>
          </template>
        </el-table-column>
      </el-table>
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
    return {
      value: "",
      tableData: [{
          name: "王老吉",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 20,
          stock: 20,
          hotel: "汉庭酒店",
          state: "上架",
        },
        {
          name: "王老吉",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 20,
          stock: 20,
          hotel: "汉庭酒店",
          state: "上架",
        },
        {
          name: "王老吉",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 20,
          stock: 20,
          hotel: "汉庭酒店",
          state: "上架",
        },
        {
          name: "王老吉",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          price: 20,
          stock: 20,
          hotel: "汉庭酒店",
          state: "上架",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row) {
      console.log(row);
    },
    indexMethod(index) {
      return index + 1;
    },
  },
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
  background: #e0e0e0;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  margin-left: 10px;
}

.help {
  font-size: 13px;
  margin-right: 30px;
  margin-top: 20px;
  color: #898989;
}

.search-Box {
  width: 1190px;
  height: 88px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search {
  width: 204px;
  height: 40px;
  margin-left: 10px;
}

.button {
  display: flex;
  align-items: center;
  margin-right: 40px;
}

.block {
  display: flex;
  align-items: center;
}

.demonstration {
  font-size: 13px;
}

.hotel {
  width: 1190px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.newly {
  font-size: 13px;
  margin-left: 10px;
}

.added {
  font-size: 10px;
  margin-right: 60px;
  margin-top: 20px;
}

.form {
  width: 1190px;
  height: 350px;
  margin-top: 10px;
}
</style>
