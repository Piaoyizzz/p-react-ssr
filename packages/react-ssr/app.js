const reactSSR = require("./dist/src/server/middlewares/react-ssr").default;
const Koa = require("koa2");
const koaStatic = require("koa-static");
const path = require("path");

const app = new Koa();

// 设置可访问的静态资源，就是webpack打包后的文件
app.use(koaStatic(path.join(__dirname, "./dist/static")));

app.use(reactSSR);

app.listen(9001);
console.log("server is running on 9001!");
