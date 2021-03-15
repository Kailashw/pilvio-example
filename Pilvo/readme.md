# Coding Assignment: Basic Pilvo App for outbound call

Make a NodeJs app to connect two people overcall using Cloud Phony more here:
https://www.plivo.com/docs/voice/guides/make-outbound-calls/.
Can use any free service available for example - Plivo.

The goal of the application:
1. Ask for a name and phone number.
2. Ask for the other phone number whom to connect and select duration - 5, 10, or
15 min.
3. Click on the call button to connect to a specified number.
4. Connect calls for specified minutes and then disconnect.
5. Show timer on the app.
6. Once done save the details to the database.

Preferred Stack:
1. Node (Mandatory)
2. React (Basic Implementation)
3. MySQL

    a. Sequelize ORM (Mandatory)

    b. Architecture

4. Shell script - To run the application.
5. Readme instructions to run the code.

## Steps to Run
Run following set of commands in order to isntall the project dependencies and run the application

```
>> npm i 
>> npm run start
```

## Steps to Use
The front end app will call the ```/api/makecall``` with specified parameters.