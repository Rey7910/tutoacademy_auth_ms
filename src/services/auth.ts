import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";


// print for testing the server

const testServer = async() =>{
    return "Server Running"
}

// inserting a new object instanced with the interface User

const insertUser = async(user:User) =>{

    const responseInsert = await UserModel.create(user);
    return responseInsert;
}

// Getting all the users

const getUsers = async() =>{
    const responseUsers = await UserModel.find({});
    return responseUsers;
}


// deleting an specific user using the googleId as parameter

const deleteUser = async(googleId:string) => {
    const responseItem  = await UserModel.deleteOne({googleId:googleId});
    return responseItem
}

// updating user account state to false using the googleId as parameter

const updateUser = async(id:string) =>{
    const responseItem  = await UserModel.findOneAndUpdate({googleId:id} , {authStatus: false }, {new: true});
    return responseItem
}


// get an specific user data using the googleId as parameter


const getUser = async(googleId: string) =>{
    const responseUsers = await UserModel.find({googleId:googleId});
    return responseUsers;
}

// updating user account state to true using the googleId as parameter

const updateOldUser = async(id:string) =>{
    const responseItem  = await UserModel.findOneAndUpdate({googleId:id} , {authStatus: true }, {new: true});
    return responseItem
}


export {insertUser , getUsers , deleteUser, updateUser, getUser, updateOldUser, testServer}