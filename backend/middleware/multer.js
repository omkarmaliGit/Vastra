import { diskStorage } from "multer";

const storage = diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
