Date / timezone-2
===

## 問題

```javascript
var d = new Date("Sun, 24 Dec 2017 00:00:00 +0900");
d.setTimezoneOffset(0);
console.log(d.toISOString());
```

何が表示される？

1. "2017-12-23T15:00:00.000Z"
2. "2017-12-24T00:00:00.000+09:00"
3. "2017-12-23T04:00:00.000-09:00"
4. エラー

[正解はこちら](a.md)
