scratch file; --. this worked in terminal

ast login: Wed Dec 18 21:02:31 on ttys001

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
Devens-MacBook-Pro:~ devenbhattacharya$ mongosh
Current Mongosh Log ID:	676380213d668e0279162ba9
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.7
Using MongoDB:		8.0.4
Using Mongosh:		2.3.7

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-12-18T17:34:00.353-05:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use myDatabase
switched to db myDatabase
myDatabase> db.createCollection("users")
{ ok: 1 }
myDatabase> db.users.insertOne({ firstName: "John", lastName: "Doe" })
{
  acknowledged: true,
  insertedId: ObjectId('676380753d668e0279162baa')
}
myDatabase> db.users.find()
[
  {
    _id: ObjectId('676380753d668e0279162baa'),
    firstName: 'John',
    lastName: 'Doe'
  }
]
myDatabase> 
