Asynchronous / callback
===

## 問題

```javascript
// 1秒待つ
setTimeout(function() {
	console.log("foo");
}, 1000);

// 2秒待つ
var t = Date.now() + 2000;
while(Date.now() < t);
console.log("bar");
```

何が表示される？

1. "foo", "bar"
2. "bar", "foo"
3. "foo"のあと無限ループ
4. 何も表示されずに無限ループ

[正解はこちら](a.md)
