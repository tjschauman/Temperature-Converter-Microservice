# Temperature-Converter-Microservice
Microservice: Temperature Converter for CS361

This is a microservice that uses HTTP requests and responses as a communication pipeline. 

The server is found in server.js and runs locally on Port4000. The server receives three variables: current temperature unit, current temperature, and the desired temperature unit (in this example the server receives them from an HTML form). The server posts them to a localhost page where they'll then be put into a local text file (using JSON.stringify). The client.js can then access the file (temp.txt), parse it, compute the converted value, show it on the log and put it in the same text file.

