const express=require("express")
const router=express.Router();
router.post("/",require("../controller/user").createUser);
router.get("/",require("../controller/user").getUser);
router.get("/:userId",require("../controller/user").getUsersById);
router.put("/:userId",require("../controller/user").editData);
router.delete("/:userId",require("../controller/user").deleteData)


module.exports=router;
    