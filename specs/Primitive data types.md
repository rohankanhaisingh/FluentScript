# FluentScript - Primitive Data Types Specification

FluentScript supports several primitive data types that can be used for defining variables. These types are the building blocks of your programs and are fundamental for performing operations and storing data. Below is an overview of the primitive types available in FluentScript.

## Supported Primitive Data Types

### 1. **String**

A `string` is used to represent text.

```fls
var name: string = "John";
```

- **Example**: A variable storing a name or any other text-based data.
- **Operations**: Concatenation, length, substring, etc.

### 2. **Char**

A `char` is used to store a single character. It is enclosed in double quotes.

```fls
var singleCharacter: char = "a";
```

- **Example**: A variable representing a single character such as `'a'`, `'b'`, or `'z'`.

### 3. **Int**

An `int` is used to store whole numbers (integers). It does not support decimals.

```fls
var roundedNumber: int = 13;
```

- **Example**: Storing count values, ages, or any other whole number.
- **Range**: Typically `-2^31` to `2^31 - 1`, but this depends on the architecture.

### 4. **Float**

A `float` is used to store numbers with decimal points, but it has limited precision.

```fls
var floatingNumber: float = 0.53;
```

- **Example**: Numbers that require a floating-point representation with fewer decimal places.
- **Range**: Typically `±3.40282347 × 10^38` (for 32-bit).

### 5. **Double**

A `double` is a more precise floating-point type than `float`. It can store numbers with more decimal points.

```fls
var numberWithManyDecimals: double = 0.0483985;
```

- **Example**: Used for precise calculations, like scientific computations, or when more accuracy is required.
- **Range**: Typically `±1.7976931348623157 × 10^308` (for 64-bit).

### 6. **Long**

A `long` is used to store large integer values that exceed the limits of the `int` type.

```fls
var veryLongNumber: long = 29389021874901489029;
```

- **Example**: Large numeric values such as timestamps or high-scale counters.
- **Range**: Typically `-2^63` to `2^63 - 1` (64-bit).

### 7. **Byte**

A `byte` is used to store a small integer value, typically between `0` and `255`.

```fls
var numberBetween0And255: byte = 52;
```

- **Example**: Values that fall within a small range, such as RGB values or low-level flags.
- **Range**: `0` to `255`.

### 8. **Boolean**

A `boolean` is used to represent true or false values.

```fls
var isTrue: boolean = true;
var isFalse: boolean = false;
```

- **Example**: Conditional logic, flags, or binary states.
- **Operations**: Logical operations like `AND`, `OR`, and `NOT`.

### 9. **Null**

The `null` type is used to represent the absence of any value.

```fls
var nullType: null = null;
```

- **Example**: Used to represent the absence of an object or an uninitialized value.

### 10. **Unknown**

The `unknown` type can hold a value of any type, but the type itself is unknown until it is used.

```fls
var unknownType1: unknown = 32;
var unknownType2: unknown = "This is a text";
var unknownType3: unknown = true;
var unknownType4: unknown = null;
```

- **Example**: A flexible type that can hold any value, making it useful for dynamic types or when the type is determined at runtime.

---

## Examples of Using Primitive Data Types

### Example 1: String Concatenation

```fls
func Main(args: string[]): void {

    var greeting: string = "Hello, ";
    var name: string = "John";
    var fullGreeting: string = greeting + name;

    Write-Host fullGreeting;  // Output: Hello, John
}
```

### Example 2: Boolean Logic

```fls
func Main(args: string[]): void {

    var isAdult: boolean = true;

    if (isAdult) {
        Write-Host "You are an adult.";
    } else {
        Write-Host "You are a minor.";
    }
}
```

### Example 3: Handling Null Type

```fls
func Main(args: string[]): void {
    
    var test: null = null;

    if (test == null) {
        Write-Host "The variable is null.";
    }
}
```

---

## Best Practices

- Use **`int`** when dealing with whole numbers, and **`float`** or **`double`** for decimal numbers that require more precision.
- **`boolean`** is best for simple yes/no or true/false decisions.
- **`char`** is ideal for representing single characters, while **`string`** is better for multiple characters.
- The **`unknown`** type can be very useful for flexibility, but it is important to handle it carefully, as operations on `unknown` types are limited until the actual type is determined.