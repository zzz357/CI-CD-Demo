import Koa from 'koa'


const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});


let port=3000;
app.listen(port);

console.log(`服务运行于如下地址：http://localhost:${port}`);