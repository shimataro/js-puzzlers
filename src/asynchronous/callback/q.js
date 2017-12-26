// 1秒待つ
setTimeout(function() {
    console.log("foo");
}, 1000);

// 2秒待つ
var t = Date.now() + 2000;
while(Date.now() < t);
console.log("bar");
