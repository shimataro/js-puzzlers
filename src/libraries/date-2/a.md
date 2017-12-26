Libraries / Date-2
===

## 実行例

```bash
$ node q.js
-540
```
正解: `4. 上記以外`

## 解説

`Date.prototype.getTimezoneOffset()` は
* UTCからの時差を **分単位で** 返す
* 符号は **UTCより後の時刻は正、UTCより前の時刻は負**
    * わかりにくいけど、要するに太陽が昇るのがイギリスより後なら正
    * つまり、一般的な `UTC+9` と符号が逆

## 参考

* [Date.prototype.getTimezoneOffset() - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
