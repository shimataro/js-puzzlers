Date / getters
===

## 実行例

```bash
$ node q.js 
117-11-0
```
正解: `4. "117-11-0`

## 解説

* `Date.prototype.getYear()` は、 **1900年を基準とした西暦** を返す
* `Date.prototype.getMonth()` は、 **0を基準とした月** を返す
* `Date.prototype.getDay()` は、 **日曜日を0とした曜日** を返す
    * 「日」を取得したい場合は `Date.prototype.getDate()` を使う

## 参考

* [Date.prototype.getYear() - JavaScript | MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear)
* [Date.prototype.getMonth() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
* [Date.prototype.getDay() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)
* [Date.prototype.getDate() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
