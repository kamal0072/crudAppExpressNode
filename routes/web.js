import express from "express";
import { AllbookControllers } from "../controllers/bookController.js";
import { cookieController } from "../controllers/cookieControllers.js";
const router = express.Router();

router.post('/createbook', AllbookControllers.createDoc);
router.get('/getallbooks', AllbookControllers.getAllBooks);
router.get('/edit/:id', AllbookControllers.editDoc);
router.post('/update/:id', AllbookControllers.updateDocById);
router.get('/delete/:id', AllbookControllers.deleteDocById);
router.get('/getsinglebook/:id', AllbookControllers.showSingleBook);


//working with Cookies........
router.get('/setcookie', cookieController.setCookie);
router.get('/getcookie', cookieController.getCookie);
router.get('/delcookie', cookieController.delCookie);

export default router;
