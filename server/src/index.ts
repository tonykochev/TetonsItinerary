import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import app from './utils/app' // (server)
import mongo from './utils/mongo' // (database)
import { PORT } from './constants/index'
import authRoutes from './routes/auth'
import hikesRoutes from './routes/hikes';
import campsRouter from './routes/camps';

const bootstrap = async () => {
  await mongo.connect()

  app.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
  })

  app.get('/healthz', (req, res) => {
    res.status(204).end()
  })

  app.use('/auth', authRoutes)
  // add rest of routes here...

  app.use('/api/hikes', hikesRoutes);

  app.use('/api/camps', campsRouter);

  app.use(cors({
    origin: "https://purple-moss-00a24661e.6.azurestaticapps.net"
  }))

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
