let data = {
  name: "Junior Silva",
  avatar: "https://avatars.githubusercontent.com/u/43589505?v=4",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hours": 75,
};

module.exports = {
  get(){
    return data;
  },
  update(newData){
    data = newData;
  }
}
