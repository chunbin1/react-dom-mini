## 教你写一个react-mini渲染器

### 原理
react分为两个阶段，一个是Reconciler，一个是Renderer，Reconciler是负责维护VritualDOM树，通过diff算法决定更新。而它不会负责渲染，渲染工作交由Renderer实现，具体要渲染成什么，看你在什么平台实现。如常用的react-dom就是把虚拟树的变化渲染为网页

### 初始化项目
```
create-react-app react-dom-mini
cd react-dom-mini
yarn
yarn run start
```

### 


