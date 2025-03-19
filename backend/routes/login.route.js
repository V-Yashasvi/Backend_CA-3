const express=require('express')
const router=express.Router();

router.post('/login', (req, res)=>{
  const {email, password}=req.body
  const payload={email, password}
  if(!email || email.trim()=="" || !email.inludes('@')){
    return res.status(400).json({"message":"Email cannot be empty"})
  }
  else if(!password || password.trim()==""){
    return res.status(400).json({"message":"Password cannot be empty"})
  }
  const new_user=payload
  console.log(new_user)
})

module.exports=router