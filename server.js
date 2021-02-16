import express from "express"

const app=express()

app.get('/', (req, res) => {
	res.send('<h1>Yuppi!!!</h1>')
})

app.listen(8000)

