const express = require('express');

var router = express.Router();

var {Employee} = require('../model/employee.js');

var ObjectId = require('mongoose').Types.ObjectId;
//=> localhost:3002/employees/
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err) {res.send(docs)}
            else{
            console.log("err employee get collection"+JSON.stringify(err,undefined,2));
        }
        
    })
});
 
router.get('/:id',(req,res)=>{
     if(!ObjectId.isValid(req.params.id))
     return res.status(400).send('NO record with this Id')
     Employee.findById(req.params.id,(err,doc)=>{
        if(!err) {res.send(doc)}
            else{
            console.log("id err post collection"+JSON.stringify(err,undefined,2));
            }
        })
})
router.post('/',(req,res)=>{
    var emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary

    });
    emp.save((err,doc)=>{
        if(!err) {res.send(doc)}
            else{
            console.log("err employee post collection"+JSON.stringify(err,undefined,2));
        }
       
    });
})

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('NO record with this Id');
    var emp = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary

    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(!err) {res.send(doc)}
            else{
            console.log("id err post collection"+JSON.stringify(err,undefined,2));
            }
        })
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('NO record with this Id')
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
       if(!err) {res.send(doc)}
           else{
           console.log("id err post collection"+JSON.stringify(err,undefined,2));
           }
       })
});

module.exports = router;