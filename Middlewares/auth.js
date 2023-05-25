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


module.exports.isAdmin = (request, repsone, next) => {
    // 3. check if that user is admin or not
    // the user is authorized
    if (request.decodedPayload.isAdmin) next();
    else {
      let error = new Error("not Authorized");
      error.status = 403;
      next(error);
    }
  };

  
//   module.exports.isRegisteredUser = (request,response,next)=>{
  
//     User.findById(request.decodedPayload.userId,{_id:1})
//     .then((data)=>{
//       if(!data)throw new Error("User Doesn't exist")
//       next()
//     })
//     .catch(error=>next(error))
  
//   }


