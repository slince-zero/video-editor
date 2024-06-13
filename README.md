## 问题记录

### 1. 控制台报错
```
Warning: Extra attributes from the server: class at html at RootLayout (Server) at RedirectErrorBoundary
```

搜索了一些资料发现，这个问题的产生是由于插件，对没错，就是跟插件有关，有些插件会在这里注入一些内容，将插件禁用之后，就不会报错了。
这里有一个讨论这个问题的相关 [帖子](https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c)
![alt text](public/image.png)

### 2. Mobx 与 React Context 配合使用

这里我新建了两个文件，一个 `index.tsx` 一个 `store.ts`，一个用来存放关于store所有的内容，一个是用来存放 `mobx` 与 `react context` 的内容，其实就是将 `mobx` 创建的‘对象’放到 `context` 当中去，这样其他组件就可以很容易来使用数据和修改数据了。

将状态管理库（ MobX）与 React Context 结合使用是一种非常流行和实用的方法。这种方法不仅帮助分离了业务逻辑和 UI 逻辑，还简化了组件间的状态传递，使得整个应用更加模块化和易维护。