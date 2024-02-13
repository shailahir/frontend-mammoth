Q: Why Java and JavaScript have some similarities in syntax?
A: Both are created to cater the C and C++ developers, so they picked some of the syntax from C/C++

Q: Who owns the trademark for JavaScript?
A: Oracle

Q: Are Java and JavaScript related?
A: Nope

Q: Who creates the JS Proposals and decides the direction of the language?
A: TC39

Q: Who maintains the standards?
A: ECMA

Q: JavaScript is compiled or not?
A: compiled, we get the syntax errors before running the code.

Q: JS is backwards compatibile or forwards compatible?
A: Backwards compatible

Q: How to make JS forwards comaptible?
A: Using transpilers, such as Babel. Run new syntax on old engines by converting new syntax to old syntax.

Q: What if the old syntax does not have the API method?
A: Use polyfills (shims)

Q: What is the process of the JavaScript execution?
A:  1. After the program leaves the developer's editor, it gets         transpiled by Babel, then packed by Webpack, then it gets delivered in that very different form to a JS engine.
    2. The JS engine parses the code to an AST.
    3. Then the engine converts that AST to a kind of byte code, a binary intermediate representation (IR), which is then refined/converted even further by the optimizing JIT compiler.
    4. Finally, the JS VM executes the program.

Q: How to enable strict mode?
A: use the pragma "use strict"; // nothing is allowed before this except comments and whitespace

Q: Can we have function level strict mode?
A: Yes, but if file level strict mode is enabled, then we cannot use function level strict mode.

Q: Is strict mode enabled by default?
A: No, to support the backwards compatibility.

