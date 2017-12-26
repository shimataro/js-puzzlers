Libraries / parseInt
===

## 実行例

```bash
$ node q.js 
8
```
正解: `1. "8"`

## 解説

`parseInt("08")` の戻り値は何？という問題。

`parseInt()` の第一引数の先頭に"0"があったら、第二引数を指定しないと8進数として解釈される。
そのため、 `08` を8進数として先頭から解析できるところまでした場合、先頭の0しか解析できないので0が返る。

…というのは昔の話で、ECMAScript5の仕様ではデフォルトが10になったので今のエンジンでは8が返る。

ただし、この問題はECMAScriptのバージョンやエンジンの指定はないので、上記の考えで `2. "0"` を選んだ人はそれでもOK。
今は違うということは覚えておいてね。

## 参考

* [parseInt() - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
