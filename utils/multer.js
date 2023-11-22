import multer from "multer";

// create diskstrage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    if (file.filename == "cv") {
      const { name, age } = req.body;
      cb(null, name + "_" + age + "_cv_" + file.originalname);
    } else {
      cb(null, Date.now() + "_" + file.originalname);
    }
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "category-photo") {
      cb(null, "public/photos");
    }
  },
});

// photo multer
export const studentPhotosMulter = multer({ storage }).array("students", 10);

// export
export default storage;
