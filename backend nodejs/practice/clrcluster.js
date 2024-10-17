import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path';

let basepath="D:\\docs\\Utility package"
let files=await fs.readdir(basepath)
// console.log("iteams:-\n",files)
for (const iteams of files) {
    // console.log(iteams)
    let ext=iteams.split(".")[iteams.split(".").length-1]
    // console.log(ext)
    if(ext!="js" && ext!="json" && iteams.split(".").length>1){
        if(fsn.existsSync(path.join(basepath,ext))){
            // just move the files into it
            fs.rename(path.join(basepath,iteams),path.join(basepath,ext,iteams))
        }
        else{
            fs.mkdir(path.join(basepath,ext))
            fs.rename(path.join(basepath,iteams),path.join(basepath,ext,iteams))

        }
    }

}