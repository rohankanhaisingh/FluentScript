# 🚀 FluentScript

**FluentScript** is a programming language that blends elements of PowerShell and TypeScript. The aim of FluentScript is to make programming more readable and applicable across different technologies. By drawing inspiration from both PowerShell and TypeScript, FluentScript aims to simplify the way developers write code and interact with systems, focusing on user-friendliness and flexibility.

This repository will contain both example scripts and the full source code for the parser and language infrastructure.

## ✨ Features

- ✅ Generics with **runtime type constraints**
- ✅ `where` keyword to define allowed types on generics
- ✅ `optional`, `default`, and `required` parameter keywords
- ✅ Type inference and compile-time type checking
- ✅ Blend of functional and object-oriented styles
- ✅ Easily extendable syntax & plugin support
- ✅ (Coming Soon) FSX: JSX-style UI rendering in FluentScript

## 🧠 Code Examples

### 📌 Generics with type constraints
```fls
func Generic-Function2<T where T is boolean | int>(): T {
    if(type<T> is int) {
        return 10;
    }

    if(type<T> is boolean) {
        return true;
    }

    throw "Unhandled type in Generic-Function2: " + type<T>;
}
```

### 📌 Optional and default parameters
```fls
func Function-WithOptionalAndDefaultParameter(default optional Param1: string) {
    if(Param1 exists) {
        return "Value: " + Param1;
    } else {
        return "No value given.";
    }
}
```

### 📌 Required parameters
```fls
func Function-WithRequiredParameters(required Param1: string): string {
    return Param1;
}
```

## The Parser
The FluentScript parser is written in TypeScript. It processes .fls files by:

- Tokenizing the input
- Generating an AST (Abstract Syntax Tree)
- Performing type checking
- Managing variable/function scopes
- (Coming soon) Interpreting or compiling the code

## Roadmap

- ✔️ Creating examples to showcase the language features
- ◻️ Initial parser implementation
- ◻️ Parser with AST generation
- ◻️ Type system with generics and constraints
- ◻️ Parameter keywords (optional, default, required)
- ◻️ Runtime interpreter or JS transpiler
- ◻️ FSX (JSX-style FluentScript)
- ◻️ Language server & syntax highlighting
- ◻️ Compilation to WebAssembly or native

## 🤝 Contributions
Contributions are very welcome! You can help by:

- Improving the parser or runtime
- Extending syntax and language features
- Adding documentation and examples
- Building editor extensions (VS Code, etc.)
- To contribute, feel free to fork this repo and open a pull request. Make sure to describe your changes clearly and keep the code clean and documented.