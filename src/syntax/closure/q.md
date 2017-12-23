Syntax / closure
===

## 問題

```javascript
var foo = function(bar) {
    console.log("foo");
    return bar;
}

(function() {
    console.log("bar")
})();
```

何が表示される？

1. "foo"
2. "bar"
3. "foo", "bar"
4. 文法エラー

[正解はこちら](a.md)
