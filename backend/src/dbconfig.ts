import mongoose from 'mongoose'

const url = `mongodb://<dbuser>:<dbpassword>@ds119160.mlab.com:19160/<dbname>`

const connectMongoDB = async () => {
  await mongoose.connect(url, { useNewUrlParser: true })
  return new Promise((resolve, reject) => {
    mongoose.connection.once('open', () =>
      resolve(console.log(`Connected to mongo at ${url}`))
    )
    return
  })
}

export default connectMongoDB
