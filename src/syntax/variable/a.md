Syntax / variable
===

## 実行例

```bash
$ node q.js 
bar undefined
```
正解: `4. 上記以外`

## 解説

変数の巻き上げ問題（hoisting）

関数の途中で宣言された変数は、関数の先頭で宣言 **だけ** された（初期化はされない）のと同じ状態になる。

つまり、問題のコードは以下と同等。
```javascript
var value = 1;

function main() {
    var value;
    if (value) {
        value = 2;
        console.log("foo " + value);
    } else {
        console.log("bar " + value);
    }
}
```

ECMAScript6の `let` ではこの問題が発生しないので、 `var` は撲滅しましょう。

## 参考

* [var - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/var)
* [let - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/let)
