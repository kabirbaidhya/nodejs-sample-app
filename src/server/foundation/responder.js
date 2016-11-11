
export function respond(req, res, result) {
    result
        .then(data => res.json(data))
        .catch(err => res.status(err.status || 500).json({
            error: err
        }));
}