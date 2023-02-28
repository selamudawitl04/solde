const Tutorail= require('./../models/tutorialModel');
const cachAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('./../utils/apiFeatures')

exports.createTutorail = cachAsync( async(req,res,next)=>{
    console.log('selamu dawit')
        const newTutorial = await Tutorail.create(req.body);
        res.status(200).json({
            status: "success",
            data:{
                newTutorial
            }
        })
})
exports.getAllTutorail = cachAsync( async(req,res,next)=>{
        console.log(req.cookies.jwt);
        const features = new APIFeatures(Tutorail.find(),req.query)
        .filter()
        .sort()
        .field()
        .paginate()
        const tutorials = await features.query;
        res.status(200).json({
            status: "success",
            data:{
                tutorials
            }          
        })
})
exports.getTutorail = cachAsync( async(req,res,next)=>{

    const tutorail =  await Tutorail.findById(req.params.tutorId);
    res.status(200).json({
        status: "success",
        data:{
            tutorail
        }
    })
    
})
exports.searchTutorail = cachAsync( async(req,res,next)=>{
    const tutorail =  await Tutorail.find(req.query);
    // if(!tutorail){
    //     req.status(400).json({
    //         status:"fail",
    //         message: "There is no Tutorial with name"
    //     })
    // }
    res.status(200).json({
        status: "success",
        data:{
            tutorail
        }
    })
    
})
exports.updateTutorail = cachAsync( async(req,res,next)=>{
    
    const tutorial =  await Tutorail.findByIdAndUpdate(req.params.tutorId,req.body,{
        runValidators:true,
    });

    
    if(!tutorial){
        return next( new AppError(`No Tutorial fund with id = ${req.params.id}`,404))
    }
    res.status(200).json({
        status: "success",
        data:{
            tutorial
        }
    })
    
})
exports.deleteTutorail = cachAsync( async(req,res,next)=>{
    
    const tutorial =  await Tutorail.findByIdAndDelete(req.params.tutorId);
    if(!tutorial){
        return next( new AppError(`No Tutorial fund with id = ${req.params.id}`,404))
    }
    res.status(200).json({
        status: "success",
        data:{
            tutorial
        }
    })
    
})
exports.deleteAllTutorail = cachAsync( async(req,res,next)=>{
    
    const tutorials =   await Tutorail.deleteMany();
    res.status(200).json({
        status: "success",
        message:"All Tutorials are Deleted",
        data:{
            tutorials
        }
    })
    
})
