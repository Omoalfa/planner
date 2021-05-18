import express from 'express'
import db from './db'

const app = express()

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const results = await db(
        `SELECT id, name, pickup_location, delivery_location FROM customer_requests`
    )
    const date = new Date()
    const days = [1,2,3,4,5,6,7]
    res.render('index', { results, date, days })
})

app.listen(2000, () => {
    console.log('listening on port 2000...')
})