const { model } = require("mongoose");
const jwt = require("jsonwebtoken");

const User = model("users");

exports.authentication=(req,res,next)=>{
    try {
    const {token}=req.headers;
    if(!token) throw new Error("please Login first");
    let data=token.split(" ");
    if(data[0]!==process.env.TOKEN_DELIMITER) throw new Error("not authentication",{cause:401});
    const {_id}=jwt.verify(data[1],process.env.KEY);
    User.findById(_id)
    .then((data)=>{
        if (!data) throw new Error("your email has not Found");
        if (!data.status) throw new Error("your email has been blocked");
        req.user=data;
        next();
    })
    .catch((error)=>next(error))
    } catch (error) {
        next(error);
    }
}


exports.authorization=(req,res,next)=>{
    try {
    const {isAdmin}=req.user;
    if(!isAdmin) throw new Error("not authorization",{cause:403});
    next();
    } catch (error) {
        next(error);
    }
}


