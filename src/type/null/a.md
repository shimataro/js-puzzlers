Type / null
===

## 実行例

```bash
$ node q.js 
null is object
```
正解: `1. "null is object"`

## 解説

JavaScriptの歴史的背景…

> JavaScript の最初の実装では、値は、型を表す「タグ」と「値そのもの」で表されていました。
オブジェクトの型タグは 0 で。
そして `null` のそれは NULL ポインタ（0x00 は殆どのプラットフォームに存在する）で示されていました。
その為 Null の型タグは 0 と見做され、「`typeof Null` は "object"」という、悪い冗談の様な結果になったのです。

## 参考

* [typeof 演算子 - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/typeof)
* [The history of “typeof null”](http://2ality.com/2013/10/typeof-null.html)
