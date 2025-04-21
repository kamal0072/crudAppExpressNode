import Book from "../models/books.js";
class AllbookControllers {
    static createDoc = async (req, res) => {
        if (req.method === "POST") {
            // console.log(req.body)
            const {title, author, genre, description} = await req.body;
            const book = new Book({title : title, author : author, genre : genre, description : description});
            await book.save();
            res.redirect('/app/getallbooks');
        }else{
            alert("Error: " + err.response?.data?.error || "Something went wrong.")
            // res.redirect('/book');
        };
    };

    static getAllBooks = async (req, res) => {
        const data = await Book.find();
        res.render('index', { data }, (err, html) => {
            // console.log(err)
            if (!err) {
                res.send(html);
            } else {
                res.send(err.message);
            }
        });
    };

    static editDoc = async (req, res) => {
        const data = req.params.id;
        try{
            const result = await Book.findById(data);
            // console.log(result)
            res.render('Edit', { result } , (err, html) => {
                if (!err) {
                    res.send(html);
                } else {
                    res.send(err.message);
                }
            })
        }catch(error){
            console.log(error.message)
        }
    };

    static updateDocById = async (req, res) => {
        // console.log(req.params.id);
        console.log(req.body);
        try{
            const result = await Book.findByIdAndUpdate(req.params.id, req.body, {new : true});
            console.log(result);
        }catch(err){
            console.log(err)
        }
        res.redirect('/app/getallbooks');
    };

    static deleteDocById = async(req, res) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            console.log(book);
        } catch (error) {
            console.log(error.message)
        }
        res.redirect('/app/getallbooks')
    };

    static showSingleBook = async (req, res) =>{
        const bookId = req.params.id;
        console.log(bookId);
        try{
            const result = await Book.findById(bookId);
            res.render("showsingleBook", {result}, (err, html) => {
                if (!err) {
                    res.send(html);
                } else {
                    res.send(err.message);
                }
            });
        }catch(error){
            console.log(error.message)
        }
    }
};

export { AllbookControllers };

