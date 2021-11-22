import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required:true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.model('Article', articleSchema)