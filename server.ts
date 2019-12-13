import express from 'express';
const app: express.Application = express()
import cors from 'cors'
const PORT:any = process.env.PORT || 3000;
app.use(cors())

const moongose = require('./dist/config/database')
var db = moongose.connection;


db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
console.log('Portal is connected succesfully')
});


app.listen(PORT,() => {
console.log('server is running')
})
                                                    

app.use(express.json())
var myViews = require('./dist/routes');
app.use('/',myViews)
