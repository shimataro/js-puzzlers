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
