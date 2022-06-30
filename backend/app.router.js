import express from "express"
import Plan from "./plan.model.js"
import User from "./user.model.js"

const router = express.Router()

router.route("/create-plan").post((req, res) => {
   const name = req.body.name;
   const code = Number(req.body.code);
   const date = Date.parse(req.body.date);

   const newPlan = new Plan({
      name,
      code,
      date
   });

   newPlan.save()
   .then(() => res.json('Plan created successfully!'))
   .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/join-plan").get((req, res) => {
   const planName = req.query.name
   const planCode = Number(req.query.code)

   Plan.find({name: planName, code: planCode})
      .then((plan) => res.json(plan))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/plan/:id").post((req, res) => {
   const code = Number(req.params.id);
   const username = req.body.username;
   const day = req.body.day;
   const num1 = Number(req.body.min);
   const num2 = Number(req.body.max);

   const newUserInput = new User({
      code,
      username,
      day,
      num1,
      num2
   });

   newUserInput.save()
   .then(() => res.json('User entered data seuccessfully!'))
   .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/plan/:id").get((req, res) => {
   const planCode = req.query.code

   User.find({ code: planCode})
      .then((days) => res.json(days))
      .catch(err => res.status(400).json('Error: ' + err));
   
})


export default router