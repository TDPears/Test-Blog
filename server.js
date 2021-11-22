import express from 'express'
import mongoose from 'mongoose'
import articleRouter from './routes/articles.js'
const app = express()

mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')

app.use('/articles',articleRouter)
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdDate: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdDate: new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', { articles: articles})
})

app.listen(5000)