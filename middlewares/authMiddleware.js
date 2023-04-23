import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  console.log("requireSignIn00");
  try {
    //token is in req headers authorisation
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode; // for admin
    // console.log("req.user"); //added
    // console.log("before nxt"); //added
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};



// function handleDashboardClick() {
//   console.log(auth?.user?.role);
//   if (auth?.user?.role === 0) {
//     setUserType("customer");
//   } else if (auth?.user?.role === 1) {
//     setUserType("employee");
//   } else if (auth?.user?.role === 2) {
//     setUserType("admin");
//   }
//   console.log(userType);

// }