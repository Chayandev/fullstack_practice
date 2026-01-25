for i in range(3):
    print("Number", (i+1), (i+1)*".")

for i in range(1, 4):
    print(i)

# complex types : range
# this is iteratble , that mean we can run for loop on it directly

for c in "Python":  # this is also iterable
    print(c)

# We can create our own iterbale

# While loop
command = ""
while command.lower() != "quit":
    command = input(">")
    print(command)

# or
while True:
    command2 = input(">")
    print(command2)
    if (command2.lower() == "quit"):
        break


# Function
def greet():
    print("Hi there")
    print("Welcome abord")


greet()

# In python fucntio are 2 types on which perfom task one which return value
# for he fuction which return value if we dont return an ything explcitly
# it will return None

# xargs


def call(*numbers):
    print(numbers)
# no this parameter is being tuple, which is immutable but iterable


call(1, 2, 3, 4)
