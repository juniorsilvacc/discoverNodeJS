const Job = require('../model/Job');
const Profile = require('../model/Profile');
const JobUtils = require('../utils/JobUtils');

module.exports = {
  index(req, res) {
    const jobs = Job.get();
    const profile = Profile.get();

    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length
    }

    //Total de horas por dia de cada Job em progress
    let jobTotalHours = 0;

    const updatedJobs = jobs.map((job) => {
      //Ajuste no jobs
      const remaining = JobUtils.remainingDays(job);
      const status = remaining <= 0 ? "done" : "progress";

      //status = done
      //statusCount[done] += 1
      //Somando a quantidade de status
      statusCount[status] += 1;

      //Total de horas por dia de cada Job em progress
      if(status == "progress"){
        jobTotalHours += Number(job['daily-hours'])
      }
    

      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile["value-hours"]),
      };
    });

    //Qtd de horas que quero trabalhar dia (profile)
    //MENOS 
    //A qtd de horas/dia de cada job em progress
    const freeHours = profile["hours-per-day"] - jobTotalHours;

    return res.render("index", { jobs: updatedJobs, profile, statusCount, freeHours});
  },
};
