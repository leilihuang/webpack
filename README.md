# webpack
初识webpack

##学习重点
* 学习webpack配置
* 学习webpack各种属性，插件用法
* 学习React
* 学习地址https://hainuo.gitbooks.io/react-webpack-cookbook/content/content/Optimizing-rebundling.html

## npm run dev执行命令里面的配置信息
* webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
* --devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
* --progress - 显示合并代码进度
* --colors - Yay，命令行中显示颜色！
* --content-base build - 指向设置的输出目录

# 有用的信息
* url-loader 传入的 limit 参数是告诉它图片如果不大于 50KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。
* 字体图片也可以用url-loader来加载，进行转换支持格式（.woff  .svg）

# 配置信息
###module.loaders每个项目可以有这些属性:
1. test :一个必须满足的条件
2. exclude :一个条件不能满足
3. include :一个必须满足的条件
4. loader :一串”! “分开装入器
5. loaders :加载程序的数组作为字符串


# 常用命令
* npm run build 开发编译，生成结果文件
* npm run dev 开启页面自动刷新，实时监听文件改变，自动生成改变文件
* npm run pro 启用生产配置文件webpack.production.config.js.
