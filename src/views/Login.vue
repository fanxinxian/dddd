<template>
  <div class="login">
    <h4>圈子登录</h4>
    <div>
      <el-input v-model="username" placeholder="请输入账户名" class="el-input"></el-input>
      <el-input v-model="password" placeholder="请输入密码" :type="type"></el-input>
      <span :class="['iconfont', flag?'icon-yanjing':'icon-yanjing_bi']"  @click="btnEay"></span>
      <el-button type="danger" class="el-button" @click="btnLogin">用户登录</el-button>
    </div>
    <router-link to='' tag="span">没有账号，快速注册</router-link>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      type:'password',
      flag:false
    };
  },
  methods:{
    btnEay(){
      this.flag = !this.flag;
      if(this.flag){
        this.type = 'text'
      }else{
        this.type = 'password'
      }
    },
    btnLogin(){
      window.console.log(this.username,this.password);
      //判断你的用户名和密码不为空
      if(!this.username.trim()||!this.password.trim()){
         alert('不能为空');
      }else{
         axios.post('/api/login',{username:this.username,password:this.password}).then(res=>{
           if(res.data.code==1){
             this.$router.push('/home');
           }else{
             alert(res.data.msg);
              window.location.reload();
             return
           }
           alert(res.data.msg);
         })
      }
    }
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
h4 {
  width: 100%;
  height: 45px;
  display: inline-block;
  text-align: center;
  line-height: 45px;
  border-bottom: 1px solid #cccccc;
}
.el-input {
  margin: 10px 0;
}
.el-button {
  width: 100%;
  margin: 10px 0;
}
span {
  font-size: 12px;
  color: #cccccc;
}
</style>