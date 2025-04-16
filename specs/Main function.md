# FluentScript - Main function specification

The Main function serves as the entry point of a FluentScript application. It is where the program begins its execution. This function is commonly used to initialize the program and run essential logic.

## Purpose
The purpose of the Main function is to initialize and execute the core functionality of your FluentScript program. It is responsible for setting up the environment, defining initial variables, and triggering other functions or processes.

## Syntax

```fls
func Main(args: string[]): void {
    // Your code goes here.
}
```

### Parameters
- `args`: An array of strings representing command-line arguments passed to the program. This allows you to accept input from the user when the program is executed.

### Return value
- The Main function returns void, meaning it does not return a value. It serves to execute code and potentially call other functions, but it does not produce a direct return result.

## Examples

### Example 1: Basic Main function

```fls
func Main(args: string[]): void {
	
	var message: string = "Hello, FluentScript!";

	Write-Host message;
}
```