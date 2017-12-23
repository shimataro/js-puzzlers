Syntax / variable
===

## 問題

```javascript
var value = null;
if (typeof value === "object") {
    console.log(value + " is object");
}
if (value instanceof Object) {
    console.log(value + " is instance of Object");
}
```

何が表示される？

1. "null is object"
2. "null is instance of Object"
3. "null is object", "null is instance of Object"
4. 何も表示されない

[正解はこちら](a.md)
