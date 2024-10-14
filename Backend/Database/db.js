import mongoose from 'mongoose';

 const connection =  async (Username , Password)=>{
    const URL = `mongodb+srv://${Username}:${Password}@blog-app.eaysp.mongodb.net/?retryWrites=true&w=majority&appName=Blog-app`
    try{
         await mongoose.connect(URL , {useNewUrlParser:true});
         console.log("Database Has been connected Succesfully")
    }catch(err){
        console.log("Some Error while connecting Database" , err)
    }
}

export default connection;