import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import router from './routes/index.js'

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
