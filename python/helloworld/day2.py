# numbers in python

import math
x = 1  # integer number
x = 1.1  # float point
x = 1+2j  # complex number

# Operations

print(10+3)
print(10-3)
print(10*3)
print(10/3)  # this will give the floating point value
print(10//3)  # this will give the integer number after division
print(10 % 3)  # this will give the remainder
print(10**3)  # exponent


x = 3
x = x+3
x += 3


# Some mathamatical function to apply

print(round(2.9))
print(abs(-2.9))

print(math.floor(2.5))  # this will give the lower bound
print(math.ceil(2.5))  # his will give the upper boudn


x = input("X:")  # this will take input in x which is string
# y = x+1  # "1"+1

y = int(x)+1  # type conversion to int
print(f"x: {x}, y: {y}")
print(y)


# Truthy and falsy value
print(bool(0))  # give false, as it's falsy
print(bool(1))  # give true
print(bool(-1))  # give true
print(bool(5))  # give true
print(bool(""))  # give false


# conditionas

temperature = 10
if temperature > 30:
    print("It's warm")
    print("Drink water")
elif temperature > 20:
    print("it's nice")
else:
    print("None is true")

print("Done")

# ternary operator
age = 10
message = "Eligible" if age > 18 else "Not eligible"
print(message)


# complex conditionals
student = True
hihg_income = False

if student:
    print("Eligible")
elif not student and not hihg_income:
    print("Partial Eligible")


# Chaining comparison operattors
age = 40
if 18 <= age < 65:
    print("Eligible")
