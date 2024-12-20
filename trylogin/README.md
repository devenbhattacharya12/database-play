README

To run the program:
In termninal, navigate to the foler with server.js inside of it
Connect to server by typing node server.js
open http://localhost:3000 in the web (don't go from index.html because it won't work)
Fill in the form with the first name and last name.
After submitting the form, the data will be sent to the server, saved in the myDatabase MongoDB database, and returned as a response. The stored information will be displayed on the webpage.
This should now store the user data in MongoDB rather than just in memory. You can verify by checking the MongoDB myDatabase database and ensuring the users collection has the saved documents.