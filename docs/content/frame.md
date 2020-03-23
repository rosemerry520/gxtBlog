### 基于Vue的uni.app框架
前端框架[Vue](https://cn.vuejs.org/v2/guide/)

样式框架[uni.app](https://uniapp.dcloud.io/)

---

### 前后端交互API
数据请求`uni.request()`

实时通讯`uni.connectSocket()`

---

### 功能模块
* **首页**
   * 查大学
   * 查分数线
   * 查假大学

* **我的**
   * 登录
   * 登出
   * 关注的院校
   * MBTI测试

---

### 组件间通讯
页面注册全局事件`uni.$on('eventName', function(resBase))`

任何页面调用事件`uni.$emit('eventName', resBase)`
