import usermodel from "../model/usermodel.js";
import bcrypt from "bcrypt";




export const userSignup = async (request, response) => {

    console.log("request",request.body)
    try{

        const hashedpassword = await bcrypt.hash(request.body.password , 10)
        console.log( "hashed", hashedpassword)
        const user = { fullname:request.body.fullname ,  email:request.body.email , phone:request.body.phone ,  password:hashedpassword}
        const newuser = new usermodel(user);    
        await newuser.save();
        return response.status(200).json({message :'signup succesful'}) 
    }catch(error){
        console.log("erroe",error)
        return response.status(500).json({message:"some error in signup"}) 
    }
}

export const userLogin = async (request, response) => {

    let user = await usermodel.findOne({email:request.body.email});
    if(!user){
       return  response.status(401).json({message:"user not found"})
    }
    try{
        let compare = await bcrypt.compare(request.body.password , user.password);
        if(compare){
            console.log("compare successfully" );
            response.status(200).json({message:"user login successfully"})

        }
    }catch(err){

        console.log("some error in password" , err)
        response.status(404).json({message:"error while compare"})

    }
   
    
}