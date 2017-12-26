Libraries / Date-3
===

## 実行例

```bash
$ node q.js 
/path/to/js-puzzlers/src/date/timezone-2/q.js:2
d.setTimezoneOffset(0);
  ^

TypeError: d.setTimezoneOffset is not a function
```
正解: `4. エラー`

## 解説

* `Date.prototype.getTimezoneOffset()` はあるけど `Date.prototype.setTimezoneOffset()` は存在しない
* JavaScriptでタイムゾーンを考慮した時刻処理をする場合は [Moment.js](https://momentjs.com/) のようなサードパーティー製のライブラリを使いましょう。
