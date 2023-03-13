import {Request, Response} from "express"
//import DBconnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle"
import { insertUser , getUsers, deleteUser, updateUser, getUser, testServer, updateOldUser} from "../services/auth";




// this function is used for make a response to check that the server is working fine :)

const ServerTest = async (req: Request, res: Response)=>{
    const responseItem = await testServer()
    res.send(responseItem)
}


// this is the login for the old users, here we just change the value of the Account State to true indicating that the session is open


const loginOldUser = async ( {params} : Request, res: Response) => {


    try{
        const {id} = params

        const response = await updateOldUser(id);

        res.send(response);

    }catch(e){

        handleHttp(res,'ERROR_POST_ITEM', e);
    }
}

// this is the oauth google login for the new users, here we insert a new user data based on the interface definded in  ../interfaces/user

const login = async ( {body} : Request, res: Response) => {


    try{
        
        const responseItem = await insertUser(body)
        res.send(responseItem);

    }catch(e){

        handleHttp(res,'ERROR_POST_ITEM', e);
    }
}


// here we get all the users contained in the DB


const getAllUsers = async (req: Request, res: Response) => {
    try{
        
        const response = await getUsers();

        res.send(response);
    }catch(e){
        handleHttp(res,'ERROR_GET_ITEMS');
    }
}


// here we delete a specific user using the googleId


const deleteCurrentUser = async ({params}: Request, res: Response) =>{
    try{
        const {id} = params;

        const response = await deleteUser(id);

        res.send(response);
    }catch(e){
        handleHttp(res,'ERROR_DELETE_ITEM');
    }
}


// here we change the value of the account from active to inactive, closing the session


const logout = async ({params}: Request, res: Response) => {
    try{

        const {id} = params

        const response = await updateUser(id);

        res.send(response);
    }catch(e){
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }
}



// Here we get a specific user using the google id


const getSpecificUser = async({params}:Request, res: Response) =>{
    try{
        const {id} = params

        const response = await getUser(id);

        res.send(response);

    }catch(e){
        handleHttp(res,'ERROR_GET_ITEM');
    }
}


export {login, getAllUsers, deleteCurrentUser, logout , getSpecificUser, ServerTest , loginOldUser}