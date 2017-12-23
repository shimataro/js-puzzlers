Syntax / variable
===

## 問題

```javascript
var value = 1;

function main() {
    if (value) {
        var value = 2;
        console.log("foo " + value);
    } else {
        console.log("bar " + value);
    }
}

main();
```

何が表示される？

1. "foo 2"
2. "bar 1"
3. "bar 2"
4. 上記以外

[正解はこちら](a.md)
