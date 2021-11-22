import { Router } from 'express'
import Article from './../models/article.js'
const router = Router()

router.get('/new', (req,res) => {
    res.render('articles/new')
})

router.post('/', async (req,res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,        
    })
    try{
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        res.render('articles/new', {article: article })
    }
})

export default router 