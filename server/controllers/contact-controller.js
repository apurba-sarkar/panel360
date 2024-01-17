const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    console.log(req.body);
    return res.status(200).json({
      message: "message send succesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "message not delivered",
    });
  }
};

// const contactForm = async(req,res)=>{
//     try {
//         const response=req.body
//         const {username,email,message} = response
//         await Contact.create({
//             username,
//             email,
//             message
//         })
//     } catch (error) {
//         console.log(error)
//         console.log("cant sent message right now")
        
//     }
// }














module.exports = contactForm;
