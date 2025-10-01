

function print(value) {
    console.log(value)
}


async function main() {
    function test() {
        return 10;
    }
    function do_nothing() {
        return 1;
    }
    function name(a, b, c = 3) {
        return a+b+c;
    }
    x = 4;
    if (x == 4) {
        print("hi");
    }
    for (let A_Index1 = 0; A_Index1 < x; A_Index1++) {
        print("hi: "+A_Index1);
    }
    name(test(), 5);
    do_nothing();

}
main();