## 问题记录

### 1. 控制台报错
```
Warning: Extra attributes from the server: class at html at RootLayout (Server) at RedirectErrorBoundary
```

搜索了一些资料发现，这个问题的产生是由于插件，对没错，就是跟插件有关，有些插件会在这里注入一些内容，将插件禁用之后，就不会报错了。
这里有一个讨论这个问题的相关 [帖子](https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c)
![alt text](public/image.png)