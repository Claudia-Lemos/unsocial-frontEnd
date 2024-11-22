

const adminAuth = (req, res, next)=>{
    console.log("Admin authentication in progress");
    const token ="xyz";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorised request");
    } else {
        next();
    }}

    const userAuth = (req, res, next)=>{
        console.log("User authentication in progress");
        const token ="abc";
        const isAdminAuthorized = token === "abc";
        if(!isAdminAuthorized){
            res.status(401).send("Unauthorised request");
        } else {
            next();
        }};

module.exports = {
    adminAuth,
    userAuth
}