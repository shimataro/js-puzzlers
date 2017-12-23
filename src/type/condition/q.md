Syntax / variable
===

## 問題

```javascript
function func(value) {
    if (value) {
        console.log("true");
    } else {
        console.log("false");
    }
}

func();
func(0);
func("");
func("0");
func(new Boolean(false));
func(null);
func([]);
func({});
```

trueとfalse、どちらが表示回数が多い？

1. true
2. false
3. 同じ
4. 実行時エラーが出る

[正解はこちら](a.md)
