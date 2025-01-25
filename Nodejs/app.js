const express = require('express');
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars');
const app = express(); 
const dbo = require('./db');
const { ObjectId } = require('mongodb');
const empModel = require('./models/empModel')
//let objId = dbo.objectId;
//configure handlebars
dbo.getDatabase()
app.engine('hbs',exhbs.engine({
    layoutsDir:'viewsFold/', defaultLayout:'maincopy',extname: 'hbs'
}));

app.set('view engine','hbs');
app.set('views','viewsFold');
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.get('/', async (req,res)=>{
    //let database = await dbo.getDatabase();
    //const connection = database.collection('emp');
    //await connection.insertOne({empname:'virat',empid:18});
    //const cursor = connection.find();
    //let data = await cursor.toArray({});
    let msg = '';
    let edit_id=null,delete_id=null;
    let edit_emp=null;
    let data=null;
    if(req.query.edit_idd){
        edit_id=req.query.edit_idd;
        edit_emp=await connection.findOne({_id: new objId(edit_id)})
    }
    if(req.query.delete_idd){
        delete_id=req.query.delete_idd;
        await connection.deleteOne({_id:new objId(delete_id)})
        res.redirect('/?status=3')
    }
    if(req.query.status === '1'){
        msg = 'Inserted Successfully';
    }
    else if(req.query.statues === '2'){
        msg = 'Updated Successfully';
    }
    else if(req.query.status === '3'){
        msg = 'Deleted Successfully';
    }
    //console.log('The data',data)
    res.render('maincopy',{msg,data,edit_id,edit_emp,delete_id});
});

app.post('/empinfo', async(req,res)=>{
    //let database=await dbo.getDatabase();
    // const collection=database.collection('emp');
    const employee={empid:req.body.eid,empname:req.body.ename};
    //await collection.insertOne(employee);
    const newEmpDoc = new empModel(employee);
    newEmpDoc.save()
    res.redirect('/?status=1');
})

app.post('/updateinfo/:eid',async(req,res)=>{
    let database = await dbo.getDatabase();
    const collection=database.collection('emp');
    let ed_id = req.params.eid;
    const employee={empid:req.body.eid,empname:req.body.ename};
    await collection.updateOne({_id:new objId(ed_id)},{$set:employee});
    res.redirect('/?status=2');
})


//Start the server by specifying the port number
app.listen(7000,()=>{
    console.log('Listening on port 7000...');
});