const { LLVM } = require('smake');
const { LibJson5 } = require('./lib');

const test = new LLVM('test', 'arm64-apple-darwin');
test.files = ['test.cc'];
LibJson5.config(test);
test.stdcxx = 'c++17';

module.exports = [test];
