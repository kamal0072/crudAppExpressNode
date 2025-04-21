import express from "express";
import { AllbookControllers } from "../controllers/bookController.js";

const router = express.Router();

router.post('/createbook', AllbookControllers.createDoc);
router.get('/getallbooks', AllbookControllers.getAllBooks);
router.get('/edit/:id', AllbookControllers.editDoc);
router.post('/update/:id', AllbookControllers.updateDocById);
router.get('/delete/:id', AllbookControllers.deleteDocById);
router.get('/getsinglebook/:id', AllbookControllers.showSingleBook);

export default router;
