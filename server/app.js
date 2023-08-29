import express from 'express'

//import routes
import users from './routes/users.js'

const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/users',users)

app.use((req,res)=>{
    res.status(404).send('404 Not Found!')
})

app.listen(port, console.log(`port: ${port}`))
