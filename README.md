# SMake C++ lib json5
[json5pp](https://github.com/kimushu/json5pp/tree/master)

```js
const { LLVM } = require('@smake/llvm');
const { vscode } = require('@smake/llvm-vscode');
const { LibJson5 } = require('@smake/json5');

const test = new LLVM('test', 'aarch64-apple-darwin');
test.files = ['src/test.cc'];
LibJson5.config(test);
vscode(test);

module.exports = [test];
```