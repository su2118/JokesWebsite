const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'publice/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/img'))
//set view
app.set('views', './views')
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('index')
}) 
//MySQL

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            :'root',
    password        : '',
    database        : 'jokes'
})


//get all jokes
/* app.get('',(req, res)=>{
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        //query
        connection.query('SELECT * from Jokes', (err,rows)=>{
            connection.release() //return the coonection to pool

            if(!err)
            {
                res.send(rows)
            }
            else
            {
                console.log(err)
            }
        })
    })
}) */

//get a joke Random 
app.get('/show',(req, res)=>{
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        //query
        connection.query('SELECT * from Jokes ORDER BY RAND() LIMIT 1', (err,rows)=>{
            connection.release() //return the coonection to pool
           // const params = req.body


            if(!err)
            {
                res.send(rows)
              // res.send(rows[0].setup)
             // res.status(200).json({info: rows})
               // res.send(`Jokes questions: ${req.params.setup}`)
            }
            else
            {
                console.log(err)
            }
        })
    })
})

/* //get a joke by Id
app.get('/:id',(req, res)=>{
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        //query
        connection.query('SELECT * from Jokes WHERE id = ?', [req.params.id], (err,rows)=>{
            connection.release() //return the coonection to pool

            if(!err)
            {
                res.send(rows)
            }
            else
            {
                console.log(err)
            }
        })
    })
}) */

//add a joke 
app.post('',(req, res)=>{
    pool.getConnection((err, connection)=> {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body
        //query
        connection.query('INSERT INTO Jokes SET ?', params, (err,rows)=>{
            connection.release() //return the coonection to pool

            if(!err)
            {
                res.send(`Joke with the Record ID: ${params.id} has been added.`)
            }
            else
            {
                console.log(err)
            }
        })
        console.log(req.body)
    })
})

//Listen on env port or 5000
app.listen(port, ()=> console.log(`Listen on port ${port}`))