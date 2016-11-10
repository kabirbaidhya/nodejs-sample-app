export default function (req, res, next) {
    const {method, originalUrl} = req;

    console.log(`${method.toUpperCase()} ${originalUrl}`);
    next();
}