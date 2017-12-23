Syntax / closure
===

## 実行例

```bash
$ node q.js 
foo
bar
```
正解: `3. "foo", "bar"`

## 解説

セミコロン忘れでハマる例。
あとに続く関数が引数とみなされている。
```javascript
var foo = function(bar) {
    console.log("foo");
    return bar;
} // ここにセミコロンがない

(function() {
    console.log("bar")
})();
```

## 参考

* [Dangers of anonymous function closures](http://johntantalo.com/blog/dangers-of-anonymous-function-closures/)
