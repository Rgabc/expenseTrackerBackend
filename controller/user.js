const userModel=require("../module/user")
// every time we get new data so acoording to that we store that data in new function & this function's run repeatedlytime
// 3rd step we need function to store new data and use that function repeatedly time 
// function create to store api and data 
// whenever  API  we create in server we get by default (req,res) while sending req whatever data we get in a process of req we want to store that data  that storing data will get store in a  middle process of  req, point to be note 
// create user data arow fun to store data and api by default we get req and res
// LAST STEP WE USE ASYNC & AWAIT BECAUSE IN RESPONSE DATA IS BYPASING AND SHOW THIS TYPE OF O/P THIS AWAIT GIVE EXTRA TIME TO COMPLETE THE PROCESS
//below line is middle process of request
exports.createUser=async(req,res)=>{// this function we want in routing thats why we use export instead of routing 
try{ const saveData= await new userModel(req.body).save();
res.json(saveData)}
catch(err){
    res.json(err);
}
} // we want to make path for controller that post api so after that we can check in post man our api is running or not


//get API  get means find so we use find()method its a hint and also use async and await to give extra time 
exports.getUser=async(req,res)=>{
    try{const users=await userModel.find(); // same process like post but no (req.body) is used and instead of saved() we use find()
    res.json(users)}
    catch(err){
        res.json(err)
    }

} // we not use request parameter here because data is already store in createUser req is only used in (post and update)
// after that go to routes to make path for get api
// but we get data by id note to the point 
// get data by id hint params which pass parameter to the query
// the above fun getUser give all data but we want particular data we make different function and call data by its id
exports.getUsersById=async(req,res)=>{
    try{// same like above but now we use params to get particular data & we use params that's why we use {}
        const users= await userModel.find({_id:req.params.userId});
    res.json(users)
    }//why? {property:value} this userId should match with routing post man path so after that we can use this path in hyperlink of postman to gedt value
        catch(err){
            res.json(err) 
        }
}
exports.editData=(req,res)=>{//.findByIdAndUpdate(has 4 parameter 1st we get id by data we all ready done in getUserById so copy paste that{id syntax} 2nd we want to edit data now but where we edit that data ? hint is we post data in req.body same we edit data there 3rd after that edit we want to same this data but it will be new so we use new property {new:true} 4th at the last we need one arrow function to check err and its run or not)
userModel.findByIdAndUpdate({_id:req.params.userId},req.body,{new:true},(err,data)=>{
    if(err){res.json(err)}
    else{res.json(data)}
})
}
//delete
exports.deleteData=(req,res)=>{
    userModel.findByIdAndDelete({_id:req.params.userId},(err,data)=>{
        if(err){res.json(err)}
        else{res.json(data)}
    })
}


        
  
    

