Type / condition
===

## 実行例

```bash
$ node q.js 
false
false
false
true
true
false
true
true
```
正解: `3. 同じ`

## 解説

* `undefined` / `0` / `""` / `null` はfalseとみなす
* `"0"` は自動的に整数型に変換されない（PHPと違うので注意）
* オブジェクトは常にtrue
* ボクシングされたオブジェクトも常にtrue

## 参考

* [Boolean - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
