import mongoose from 'mongoose'
const connectToMongoDB=async()=>{
    try{
         await mongoose.connect(process.env.MONGO_DB_URI);
         console.log("Connected to Mongo Db");
    } catch(error){
        console.log("error connecting to mongosb",error.message)
    }
}

export default connectToMongoDB;