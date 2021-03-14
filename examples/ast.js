const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

// 源代码
const code = `function square(n) { return n * n; }`;

// parse 解析源代码生成AST
const ast = parse(code, {/*options*/ });

// transform 代码转换 
// 遍历AST节点（深度优先）
traverse(ast, {
    // 通过visitor访问Identifier(标识符)类型的节点
    Identifier(path) {
        // path表示访问到该节点的一条路径，基于path可以进行各种修改操作
        if (path.node.name == 'n') path.node.name = 'x'
    }
})

// generate AST生成目标代码
const output = generate(ast, {/*options*/ }, code);

console.log(output.code) // function square(x) { return x * x; }

// 作者：西西爸de札记
// 链接：https://juejin.cn/post/6921259065687900167
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。