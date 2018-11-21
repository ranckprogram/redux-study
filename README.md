这是一个简单的redux学习项目，react中使用redux，作为状态管理工具，通过异步action请求数据然后渲染到页面中

### 安装

```
npm install
```

### 运行
```
npm start
```

### 前置需要

- 你需要搭建一个简单的接口服务器，便与测试
- 在pakage中配置proxy代理，具体请参看该项目的pakage.json文件

> 服务接口示例如下
```
const express = require('express')
const app = express()

app.get('/', (req, res) => res.json('Hello World!'))
app.get('/list', (req, res) => res.json([1,2,4,5]))


app.listen(3001, () => console.log('Example app listening on port 3000!'))
```

### 简要讲解

1、一般是在reducers文件夹中创建包含switch的函数，函数名就是持久化数据的状态名称

2、状态的改变是在action里面进行

3、入口文件中使用 react-redux 包中的 <Provider/> 将状态和组件关联起来，然后在具体的组件中可以使用 react-redux 中的高阶函数 **connect** 将 状态/方法 和 组件关联起来

4、使用this.props调用方法或者获取状态值  

5、数据异步请求使用中间件 thunk 
