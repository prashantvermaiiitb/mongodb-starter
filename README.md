This is a simple Mongo DB starter Kit for the beginners that need to see what
all can be done using Mongo DB console. 

Mac has been used while creating this repository, for windows same link can be
accessed for more information.

Here we will install and run some commands in the mongodb console.

1. For Mac Used Brew to install the MongoDb :-
   https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition

   A) brew tap mongodb/brew
   B) brew install mongodb-community@4.4
   C) In addition to the binaries, the install creates:

      i) the configuration file (/usr/local/etc/mongod.conf)
      ii) the log directory path (/usr/local/var/log/mongodb)
      iii) the data directory path (/usr/local/var/mongodb)

2. Start the MongoDB service 
   > brew services start mongodb-community@4.4

   for stopping it 
   > brew services stop mongodb-community@4.4
   
3. Post that you can create DB project or directory with Git repository.

4. After that create a configuration file for yourself using
   https://docs.mongodb.com/manual/reference/configuration-options/ 
   
   I have created 1 in the Collection for the Mongo

5.  After the install should start the community service for the Mongo DB brew
     services start mongodb-community@4.4

6.  Check for the Mongod has been started or not :-
    > ps aux | grep -v grep | grep mongod

7.  In Next Tab first try to update the conf file to the one that you have
    created 

8.  show dbs  - to check which all DB are being present 
   
9.  use <name-of-Db> - to create and use the newly created DB 

10. db - will tell you which DB you are currently using 

11. Reference links :-
    https://www.youtube.com/watch?v=pWbMrx5rVBE&ab_channel=TraversyMedia