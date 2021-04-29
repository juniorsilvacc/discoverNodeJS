const Database = require("config");

Database();

Database.exec(`CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, 
  avatar TEXT, 
  monthly_budget INT, 
  hours_per_day INT,
  days_per_week INT,
  vacation_per_year INT,
  value_hours INT
)`);

Database.exec(`CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, 
  daily_hours INT, 
  total_hours INT, 
  created_at DATETIME
)`);

Database.run(`INSERT INTO profile (
  name, 
  avatar, 
  monthly_budget, 
  hours_per_day,
  days_per_week,
  vacation_per_year,
  value_hours
) VALUES (
  "Junior Silva",
  "https://avatars.githubusercontent.com/u/43589505?v=4",
  3000,
  5,
  5,
  4,
  75
);`);

Database.run(`INSERT INTO jobs (
  name, 
  daily_hours, 
  total_hours, 
  created_at
) VALUES (
  "Pizzaria Guloso",
  2,
  1,
  423435412313
);`);

Database.close();
