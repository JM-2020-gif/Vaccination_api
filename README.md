# Vaccination_api
Api's documentation
###### Persons
1. read <br>
endpoint: /api/v1/readPerson/  <br>
type: Get <br>
Description: this endpoin get all persons in the database to can get the vaccination <br>
body: <br>
headers: auth, authorization <br>
2. read specific <br>
endpoint: /api/v1/readPerson/:id  <br>
type: Get <br>
Description: this endpoin get one person in the database to can get the vaccination <br>
body: <br>
headers: auth, authorization <br>
3. Create <br>
endpoint: /api/v1/createPerson/  <br>
type: POST <br>
Description: create person in the tables person to can get the vaccination <br>
body: person = {
        "Id":,
        "Name": ,
        "Age": ,
        "profession":,
        "Email": ,
        "phone": 
    } <br>
headers: auth, authorization <br>
