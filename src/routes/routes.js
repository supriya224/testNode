const router =require('express').Router();
const Test = require('../model/test');
router.post('/user',(req,res)=>{
    const testObj = new Test(req.body);
    testObj.save((err,product)=>{
            if (err) {
                    res.json({
                        message:"not save in db",
                        error:err
                    })
                    
            } else {
                res.json({
                    message:"save in db",
                    product
                })
                
            }
    }); 
});

router.get("/user",(req,res)=>{
        Test.find((err,product)=>{
            if (err) {
                res.json({
                    message:"data not found in db error",
                    error:err
                })
                
        } else {
            res.json({
                message:"successfully get All data from db",
                product
            })
            
        }
        });
})

router.put('/user/:id',(req,res)=>{ 
            Test.findOneAndUpdate(req.params.id,req.body,(err,product)=>{
                if (err) {
                    res.json({
                        message:"data not found in db error",
                        error:err
                    })
                    
            } else {
                res.json({
                    message:"successfully get All data from db",
                    product
                })
                
            }
            })
});

router.delete('/user/:id',(req,res)=>{
        Test.findOneAndDelete(req.params.id,(err,product)=>{
            if (err) {
                res.json({
                    message:"data not found in db error",
                    error:err
                })
                
        } else {
            res.json({
                message:"successfully delte data from db",
                product
            })
            
        }
        })
})

module.exports =router;