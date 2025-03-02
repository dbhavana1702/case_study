import json
def fetchData():
    try:
        #open the file in read mode
        with open("users.json","r") as file:
            fetchTodos=json.load(file)
        for t in fetchTodos:
            print(t)
    except Exception as e:
        print(e)
fetchData()