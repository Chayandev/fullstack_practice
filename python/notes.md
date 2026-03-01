#Python Internal working:
First code complied down to bycode
Bytecode is stored in __pycache__.( THis most of the time is hidden onyl visisble when htere is file import happens) .pyc-> THis is frozen binaries ( source chancge+ python version)
Then that bycode is interpreted line by line by Python virtual machine .

Byte code is not machine code


Immutable and Mutable:
-> Everying in python is treated as object.
The value of a varible is created as reference which is immutable.
suppose:
username="chayan"
in memory "chayan" will be created in memory and it will be refered
then usernmae will refere thsi "chayan" which is immutable
so when we create a diffrent value "bera" will assign this to username then username will point to this bera, and "chayan" will be garbage collected.

Python module explain:
Previous version of python needs __init__.py to treat a folder as package inside a project, but now any directory that contains python scripts is able to be consider as a package.

When we need to executed a file like a standalone script to run e need to add if __name__==main because it will allow that file run as script when its execued alone.
---- only added in the main.py/ entry point of the project.

| Function       | Input         | Output        |
| -------------- | ------------- | ------------- |
| `json.loads()` | JSON string   | Python object |
| `json.load()`  | JSON file     | Python object |
| `json.dumps()` | Python object | JSON string   |
| `json.dump()`  | Python object | JSON file     |


When people say **“a generator loads everything and produces items one by one”**, they are usually comparing **normal collections (like lists)** with **generators**.

### 1. Normal approach (loads everything into memory)

Example with a list:

```python
def get_numbers():
    return [i for i in range(1_000_000)]
```

What happens:

1. Python creates **all 1,000,000 numbers first**.
2. Stores them in memory.
3. Then you start using them.

So memory usage is **high**, and computation happens **all at once**.

---

### 2. Generator approach (produces one by one)

Example:

```python
def get_numbers():
    for i in range(1_000_000):
        yield i
```

What happens:

1. It **does NOT create all numbers immediately**.
2. It generates **one value at a time** when requested.
3. After producing a value, it **pauses** and resumes later.

Example usage:

```python
nums = get_numbers()

print(next(nums))  # 0
print(next(nums))  # 1
print(next(nums))  # 2
```

Each call to `next()`:

* resumes the function
* runs until the next `yield`

---

### Key idea

**List**

```
Create everything → then use it
```

**Generator**

```
Create item → return it → pause → create next item when needed
```

---

### Memory difference

This is why generators are great for:

* large files
* large datasets
* streaming data
* pipelines

Example:

```python
sum(i for i in range(1_000_000_000))  # generator expression
```

This **does not store a billion numbers in memory**.

---

### Simple real-life analogy

Think of it like:

List → Cook **all meals first**, then serve
Generator → Cook **one meal when someone orders**

---

### Quick interview definition


