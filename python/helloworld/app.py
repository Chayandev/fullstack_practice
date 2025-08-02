print("Hello World 😸")
print("*" * 10)  # prints * 10 times

# variables declaration
x = 1
y = 2

students_coun = 1000
rating = 4.99
is_published = True
course_name = "Python Programming"

message = """Hi John,

I am learnign python
"""

print(len(course_name))  # this will give the lenght of the string
print(course_name[0])  # Index of the first character
print(course_name[-1])  # this will give the last character

# this will print substring f 0 to 2 not including 3th index
print(course_name[0:3])
print(course_name[0:])  # this will give the entire string, form 0 to end.
print(course_name[:3])  # this will give the substring of starting form 0 to 2


print(course_name[:])  # thsi give the entire copy of the string


# Formating string
first = "Chayandev"
last = "Bera"
full = f"{first} {last}"  # This is how we have to format string
exp = f"{len(first)} {2+2}"
print(exp)
print(full)

# Operation wihtout modifying the origin string
print(full.upper())
print(full.lower())
print(full.title())
print(full.strip())
