import json
json_string='''
[
    {
        "name": "John Doe",
        "age": 30,
        "city": "New York"
    },
    {
        "name": "Jane Doe",
        "age": 25,
        "city": "Los Angeles"
    }
]
'''

data=json.loads(json_string)
# print(data[1])

# dump python dictionary to json string
python_dict={
    "name": "Alice",
    "age": 28,
    "city": "Chicago"
}
json_string=json.dumps(python_dict,indent=4) # indent is used to pretty print the json stringss
print(json_string)