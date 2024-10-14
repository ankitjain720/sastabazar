import mongoose from "mongoose";


const userinfo = mongoose.Schema({
    fullname:{
        type:String,
        required:false 
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // cart: {
    //     items: [
    //         {
    //             productId: {
    //                 type: mongoose.Schema.Types.ObjectId,
    //                 ref: 'Product',
    //                 required: true,
    //             },
    //             quantity: { type: Number, required: true, min: 1 },
    //         },
    //     ],
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

// userinfo.pre('save', async function (next) {     
//         if (this.isModified('password')) {
//             console.log("i m preee")
//             this.password = await bcrypt.hash(this.password, 10);
//         }
//         next();
// });
const usermodel = mongoose.model('Userinfo',userinfo );

export default usermodel;