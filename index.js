import express from 'express'
import cors from 'cors'

import dataArmes from './data/dataArmes.js'

const app = express()

app.use(cors("*"))

app.get('/', (req, res) => {
  res.json('je suis dans le /')
}) 

app.get('/armes', (req, res) => {
  res.json(dataArmes)
}) 


app.listen(4242, console.log('http://localhost:4242'))