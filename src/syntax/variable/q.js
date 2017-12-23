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
