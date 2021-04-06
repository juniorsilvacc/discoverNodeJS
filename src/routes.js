const express = require('express');
const routes = express();

const views = __dirname+"/views/"

const Job = {
  data: 
  [
    {
      id: 1,
      name: "Pizzaria Guloso",
      "daily-hours": 2,
      "total-hours": 2,
      created_at: Date.now()
    },
    {
      id: 2,
      name: "OneTwo Project",
      "daily-hours": 3,
      "total-hours": 47,
      created_at: Date.now()
    },
  ],
  controllers: {
    index(req, res){ 

      const updatedJobs = Job.data.map((job) => {
        //Ajuste no jobs
        const remaining = Job.services.remainingDays(job);
        const status = remaining <= 0 ? 'done' : 'progress';
    
        return {
          ...job,
          remaining,
          status,
          budget: profile['value-hours'] * job['total-hours']
        }
        
      });
    
    
      return res.render(views + "index", {jobs: updatedJobs});
    

    },

    create(req, res){
      return res.render(views + "job");
    },

    save(req, res){
      const lastId = Job.data[Job.data.length - 1].id || 1;
      jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() //Atribuindo data de hoje
      });
    
      return res.redirect("/")
    },
  },
  services:{
    remainingDays(job){
    //Calculo de tempo restante
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDays);
    const dueDateInMs = createdDate.setDate(dueDay);

    const timeDiffInMs = dueDateInMs - Date.now();

    //Transformar Millisegundos em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.floor(timeDiffInMs / dayInMs);

    //Restam x dias
    return dayDiff;
  }
  }
}

const profile = {
  name: "Junior Silva",
  avatar: "https://avatars.githubusercontent.com/u/43589505?v=4",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hours": 75
} 

routes.get("/", Job.controllers.index);
routes.get("/job", Job.controllers.create);
routes.post("/job", Job.controllers.save);

routes.get("/job/edit", (req, res) => res.render(views + "job-edit"));
routes.get("/profile", (req, res) => res.render(views + "profile", {profile}));

module.exports = routes;