import mongoose from "mongoose"

async  function DatabaseConnected(){
    mongoose.connect(process.env.MONGO_URI,{}).then(
      ()=>( console.log("database connected"))
    ).catch( ()=>{ console.log(error)})

}
export default DatabaseConnected