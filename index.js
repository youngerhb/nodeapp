import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())

// 这个变量用于接受数据，使用的时候把数据换成区块链拉下来的数据即可
let accountData = [{ "Key": "CAR0", "Record": { "colour": "blue", "make": "Toyota", "model": "Prius", "owner": "Tomoko" } },
{ "Key": "CAR1", "Record": { "colour": "red", "make": "Ford", "model": "Mustang", "owner": "Brad" } },
{ "Key": "CAR2", "Record": { "colour": "green", "make": "Hyundai", "model": "Tucson", "owner": "Jin Soo" } },
{ "Key": "CAR3", "Record": { "colour": "yellow", "make": "Volkswagen", "model": "Passat", "owner": "Max" } },
{ "Key": "CAR4", "Record": { "colour": "black", "make": "Tesla", "model": "S", "owner": "Adriana" } },
{ "Key": "CAR5", "Record": { "colour": "purple", "make": "Peugeot", "model": "205", "owner": "Michel" } },
{ "Key": "CAR6", "Record": { "colour": "white", "make": "Chery", "model": "S22L", "owner": "Aarav" } },
{ "Key": "CAR7", "Record": { "colour": "violet", "make": "Fiat", "model": "Punto", "owner": "Pari" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR8", "Record": { "colour": "indigo", "make": "Tata", "model": "Nano", "owner": "Valeria" } },
{ "Key": "CAR9", "Record": { "colour": "brown", "make": "Holden", "model": "Barina", "owner": "Shotaro" } }]

app.get('/accountBook', (req, res) => {
  res.send(accountData)
})

app.listen(8888, () => {
  console.log('service on')
})