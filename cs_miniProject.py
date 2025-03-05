import requests
import json
import os
import time
FILE_NAME="users_datas.json"
def login():
    apiUrl = "https://reqres.in/api/login"
    
    email = input("Enter the email : ")
    password = input("Enter the password : ")
    
    response = requests.post(apiUrl, json={
        'email': email,
        'password': password
    })
    
    if response.status_code == 200 or response.status_code==201:
        info = response.json()
        token = info.get('token', '')

        with open('token_file.json', "w") as file:
            json.dump({'token': token}, file, indent=4)

        return token  

    print("Invalid Credentials..!!")
    return ""

def fetchAllUser():
    apiUrl = "https://reqres.in/api/users?page=1"
   
    response = requests.get(apiUrl)

    if response.status_code == 200:
        obj = response.json()
        data = obj.get('data', [])

        # Ensure proper reading of JSON file
        try:
            with open(FILE_NAME, "r") as file:
                fetchedData = json.load(file)
                if not isinstance(fetchedData, list):  
                    fetchedData = []
        except (FileNotFoundError, json.JSONDecodeError):
            fetchedData = []

        existing_ids = {user.get('id') for user in fetchedData}

        for i in data:
            if i['id'] not in existing_ids:  # Avoid duplicates
                fetchedData.append({
                    'id': i['id'],
                    'email': i['email'],
                    'name': f"{i['first_name']} {i['last_name']}"
                })

        # Write back the updated list
        with open(FILE_NAME, "w") as file:
            json.dump(fetchedData, file, indent=4)


        print("Successfully all users are inserted into the file")

def displayAllUsers():
    with open(FILE_NAME, "r") as file:
        data = json.load(file)
    for j in data:
        print(j)

while True:
    req = int(input("\n1. Login \n 2. Fetch All Users \n 3. Display All Users \n 4. Auto Fetch \n 5. Exit \n Enter your choice: "))

    if req == 1:
        token = login()
        if token:
            print("Token is:", token)

    elif req == 2:
        fetchAllUser()

    elif req == 3:
        displayAllUsers()
        
    elif req == 4:
        while(True):
            fetchAllUser()
            time.sleep(30)

    elif req == 5:
        print("Exiting...")
        break  

    else:
        print("Invalid req!!!!... Please try again.")