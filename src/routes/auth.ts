import { Router, Request, Response } from "express";
import { getAllUsers, login, deleteCurrentUser, logout, getSpecificUser , ServerTest, loginOldUser} from "../controllers/auth";
import { logoutMiddleware, loginMiddleware } from "../middleware/log";



const router = Router();

// TEST COMPONENT

router.get("/",ServerTest)


// INFO REQUEST

router.get("/info", getAllUsers );

router.get("/info/:id",getSpecificUser)

// LOGIN REQUEST
router.post("/login", loginMiddleware, login)

router.put("/login/:id", loginMiddleware, loginOldUser )

// LOGOUT REQUEST

router.put("/logout/:id",logoutMiddleware,logout)



// DELETE REQUEST

router.delete("/delete/:id",deleteCurrentUser)



export { router };
