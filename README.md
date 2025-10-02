# H-Sharp: An Unforgiving Esoteric Language

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

H-Sharp (`.hss`) is an esoteric programming language designed for one purpose: **maximum code density**. It's a language for one-liners, for those who find modern syntax bloated and pathetic. It's a frontend for the powerful **HTVM** engine.

This is not a standalone language. It requires the HTVM ecosystem to function.

## The Law: The Toolchain and Workflow
To use H-Sharp, you must follow the correct procedure. Do not skip steps.

### Step 1: Get the Tools
You need two separate repositories.

1.  **The HTVM Engine:** This is the core system. Get the **[HTVM IDE](https://github.com/TheMaster1127/HT-IDE)**. Go to the main **[HTVM repository page](https://github.com/TheMaster1127/HTVM)**, watch the video, and learn how to set up the IDE and toolchain.
2.  **The H-Sharp Repository:** This language is its own project. Clone it:
    ```bash
    git clone https://github.com/TheMaster1127/h-sharp
    ```

### Step 2: Configure the HTVM IDE
The IDE is useless until you teach it the rules of H-Sharp.

1.  Inside the `h-sharp` repository you just cloned, you will find the crucial instruction file: `HTVM-instructions.txt`.
2.  Open the HTVM IDE, go to "Manage Instructions," and import this `HTVM-instructions.txt` file.

### Step 3: Write and Transpile
With the IDE configured, you can begin.

1.  Write your code in a file with the `.hss` extension (e.g., `main.hss`).
2.  Use the IDE to transpile your `.hss` file to the `HTVM` target. This will generate an intermediate `main.htvm` file.
3.  Use the IDE again to transpile that `main.htvm` file to your final target language (JavaScript, Python, C++, etc.).

---

## Syntax Reference: The Unbreakable Rules
The parser is not your friend. It is strict. Memorize this or fail.

### Variables
Assignment is performed with a colon (`:`). **NO SPACES** are permitted around the colon.
```hss
; Correct.
x:4
```

### Functions (`#`)
Defined with a hashtag `#`. The body is a single return expression prefixed with `<`. The definition must be terminated.

#### Multi-line Definitions
```hss
; A function with parameters and a default value
#add a b c:3
<a+b+c
.

; A function with NO parameters
#get_ten
<10
.
```

#### One-Liner Definitions
For one-liners, the block is terminated with `]`.
```hss
; A function with parameters, on one line
#add a b c:3]<a+b+c

; A function with NO parameters, on one line
#get_ten]<10
```

### Control Flow (`?`, `???`, `??`)
Conditional blocks. Each `if`, `else if`, and `else` is a complete statement and **MUST be terminated with a dot `.`**. They are not chained.
- `?` is `if`.
- `???` is `else if`.
- `??` is `else`.
- Body statements are prefixed with `^`.
```hss
x:5
?x=4
^"x is four"
.
???x=5
^"x is five"
.
```

### Loops (`{...}`)
A "repeat N times" loop.
- `variable{...}`
- `$` is the **0-based** loop index.
```hss
iterations:3
iterations{^"Loop: "+$}
```

### Function Calls (`/`)
Calls are prefixed with `/`. Arguments are space-separated.

-   **Calls with arguments:** `)` is used to close a nested function's parameter list. If this nested call is followed by another argument, you **must** place a comma `,` immediately after the closing parenthesis.
    ```hss
    ; Calls name(test(), 5)
    /name /test ), 5
    ```
-   **Calls with NO arguments:** For a function with no parameters, you must put a **space** after the function name, followed by a closing parenthesis `)`.
    ```hss
    #do_nothing
    <1
    .
    ; Correct way to call it:
    /do_nothing )
    ```

### Terminators and Separators
-   `.` (dot): Terminates a block construct (`#`, `?`, etc.) on its own line.
-   `]` (closing bracket): Terminates a block construct inline.
-   `\` (backslash): Separates individual statements on a single line.

---

## Full Example

#### `main.hss`
```hss
#test]<10.#do_nothing]<1.#name a b c:3]<a+b+c.x:4\?x=4]^"hi"\.x{^"hi: "+$}/name /test ), 5)\/do_nothing )
```

#### Transpiled JavaScript Output
```javascript


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
```

## License
H-Sharp is licensed under the **GNU General Public License v3.0**.