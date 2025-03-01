# 代理
在前后端分离的今天，跨域也成了每个前端工程师都需要了解的基本知识，在各种面试题中的日经话题。这个文章就是想总结一下关于同源策略的前世今生，以及怎么解决它。

## 同源策略
在[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)中我们可以看到关于同源策略是一个安全机制。详细的说明如下：

```bash
同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
```
这个机制本身出发点是很好的，但是同源的限制非常严格，url，端口任一不同都会造成跨域错误。
![](https://user-images.githubusercontent.com/59959718/227846530-0b341502-b59e-4606-be22-04c60806e4db.png)

而且在控制台中你不会发现任何问题。随着前后端分离越来越普遍，这件事就越来越常见。那么它应该如何解决呢?

同源策略全称叫《浏览器的同源策略》，它是浏览器内建的一种安全机制。那么我们不要使用浏览器请求就能完美解决问题了。对于前端来说最方便的自然就是 node.js 了。

## 在开发中使用

```js
// config/config.js
proxy: {
  '/api': {
    'target': 'http://jsonplaceholder.typicode.com/',
    'changeOrigin': true,
    'pathRewrite': { '^/api' : '' },
  }
}
```

## License

Licensed under the MIT License.