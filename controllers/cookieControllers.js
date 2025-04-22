class cookieController {
    static setCookie = (req, res,) => {
        res.cookie("name", "alexa")
        res.cookie("name", "Peter")
        res.cookie("address", "Delhi", {maxAge:10*24*60*60*1000})
        res.cookie('age', 10, {maxAge : 10*24*60*60*1000})
        res.cookie('email', "peter@gmail.com", {maxAge : 10*24*60*60*1000})
        res.render("setcookie")
    };

    static getCookie = (req, res) => {
        const {address ="abc", age = 18, name = "Peter", email = 'abc@gmail.com'} = req.cookies;
        // const allcookie = req.cookies;
        console.log(address, age, name, email);
        res.render("getcookie", {address, name, age, email})
    };

    static delCookie = (req, res) => {
        const cookiesKeys = Object.keys(req.cookies);
        console.log(cookiesKeys);
        cookiesKeys.forEach(key =>{
            res.clearCookie(key)
        });
        res.render("delcookie")
    };
};

export {cookieController};

