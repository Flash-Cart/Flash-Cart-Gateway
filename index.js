import fetch from 'node-fetch'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const market = process.env.MARKET_SYSTEM

const getProducts = async(request, response) => {
  const url = `${ market }/products?ids=${request.query.ids}`;
  
  console.log(url);

  try {
    const data = await fetch(url)
    const text = await data.text()
    console.log(text)
  } catch (e) {
    console.log(e);
  }

  response
    .status(200)
    .json({})
}

const port = process.env.PORT
const app = express()
app.use(cors())

app.get('/products', getProducts)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
