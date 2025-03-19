const express=require('express')
const app=express()
const port=4545
const router=require('./routes/login.route')

app.use(express.json())

app.get('/', (req, res)=>{
  res.status(200).json({"message":`Welcome to login page. Server is running on http://localhost:${port}`})
})

app.use('/', router)

app.listen(port, ()=>{
  try {
    console.log(`app is listening on http://localhost:${port}`)
  } catch (error) {
    console.log("error")
  }
})


