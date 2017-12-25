Asynchronous / callback
===

## 実行例

```bash
$ node q.js
bar
foo
```
正解: `2. "bar", "foo"`

## 解説

JavaScriptは基本的にシングルプロセス・シングルスレッドであり、 `setTimeout()` では新しいプロセスやスレッドを作るわけではない。

`setTimeout()` のコールバック関数はキューイングされ、指定時間経過しても現在の処理が終わるまでコールされない
