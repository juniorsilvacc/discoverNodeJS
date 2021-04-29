const Database = require("config");

Database();

Database.exec(`CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, 
  avatar TEXT, 
  monthly-budget INT, 
  hours-per-day INT,
  days-per-week INT,
  vacation-per-year INT,
  value-hours INT
)`);

Database.close();
