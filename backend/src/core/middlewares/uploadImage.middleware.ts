import multer from "multer";
import { BadRequesError } from "../../utils";


/**
 * for optimisation of larger files (> 50MB) we want to use multer.diskStorage
 * and store the file in disk first because multer.memoryStorage stores the 
 * file in memory first during the process and deletes afterwards.
 */
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, '/imageUploads')
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const memoryStorage = multer.memoryStorage()

export const uploadImages = multer({
    storage:memoryStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
      } else {
        new BadRequesError('Only .jpeg and .png files are allowed!');
      }
    }
}).single("image")