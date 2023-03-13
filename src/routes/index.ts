import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();
const PATH_ROUTER = __dirname;

// this function takes de the File's name string and clean it ignoring the file extension by the use of the split method fot strings

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}



// this function helps us to define every route based on the name of the files contained in the Foulder routes

readdirSync(PATH_ROUTER).filter((fileName) =>{
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'index'){

        //router.use('/${cleanName}')
        import ('./'+cleanName).then((moduleRouter)=>{
            console.log("Loading the route "+cleanName)
            console.log('/'+cleanName)
            router.use('/'+cleanName, moduleRouter.router);
        });
    }
});

export {router};