const Profile = require('../model/Profile');

module.exports = {
  index(req, res){
    return res.render("profile", {profile: Profile.get()});
  },
  
  update(req, res){ 
    //req.body para pegar os dados
    const data = req.body;
    //definir quantas semanas tem no ano
    const weeksPerYear = 52;
    //remover as semanas de ferias do ano, para pegar quantas semanas tem 1 mês
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;
    //total de horas trabalhadas na semana
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
    //horas trabalhadas no meses
    const monthlyTotalHours = weekTotalHours * weeksPerMonth;
    //qual será o valor da minha hora
    const valueHours = data["value-hours"] = data["monthly-budget"] / monthlyTotalHours;

    Profile.update({
      ...Profile.get(),
      ...req.body,
      "value-hours": valueHours
    });

    return res.redirect("/profile");
  }
}