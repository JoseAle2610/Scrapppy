import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/page', (req, res) => {
  const pageId = res
  console.log(res.body.id)
  res.send('load')
})

app.listen(port, () => {
  console.log('Example app listening at port 3000')
})