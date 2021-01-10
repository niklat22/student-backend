import {Students} from './student.modal'

// Get students
export const getStudents = async (req,res) =>{
  try{
      const studentsData = await Students.find({})
      if(!studentsData){
        return res.status(404).send({
            success: false,
            message: "Data not found"
        });
      }else{
        return res.status(201).send({
            success: true,
            data: studentsData,
            message:'data find successfully'
        });
      }
  }
  catch(err){
      res.status(422).send({ success: false, message: err.message });
  }
}

// Insert students
export const studentInsert = async (req,res) =>{
    try{
        const {name,roll_no,s_class,standard,city} = req.body;
        await Students.create({
            name,
            roll_no,
            s_class,
            standard,
            city
        })
        return res.status(201).send({
          success: true,
          message: "Student created successfully."
        });
    }
    catch(err){
        res.status(422).send({ success: false, message: err.message });
    }
}

// Insert students
export const getEditStudents = async (req,res) =>{
    try{
        const {id} = req.query;
        const studentsData = await Students.findOne({_id: id})
        if(!studentsData){
          return res.status(404).send({
              success: false,
              message: "Data not found"
          });
        }else{
          return res.status(201).send({
              success: true,
              data: studentsData,
              message:'data find successfully'
          });
        }
    }
    catch(err){
        res.status(422).send({ success: false, message: err.message });
    }
  }

//edit student
export const studentUpdate = async(req,res) =>{
  try{
      const {studentId,name,roll_no,s_class,standard} = req.body;
      const success = await Students.findByIdAndUpdate({_id:studentId},{
        name,roll_no,s_class,standard
      })
      if(!success){
          res.status(401).send({
              success:false,
              message:'data update process failed due to user not found error'
          })
      }
      res.status(201).send({
          success:true,
          message:'data update successsully'
      })
  }
  catch(err){
      res.status(401).send({
          success:false,
          message:err.message
      })
  }
}

//delete student
export const studentDelete = async(req,res) =>{
  try{
      const {studentId} = req.body;
      const success = await Students.deleteOne({_id:studentId})
      if(!success){
          res.status(401).send({
              success:false,
              message:'data not deleted'
          })
      }
      res.status(201).send({
          success:true,
          message:'data deleted successsully'
      })
  }
  catch(err){
      res.status(401).send({
          success:false,
          message:err.message
      })
  }
}