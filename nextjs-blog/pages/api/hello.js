export default function handler(req, res) {
    // req: http.IncomingMessage with some pre-built middleware
    //      - req.cookies (default to {})
    //      - req.query (query string, default to {})
    //      - req.body (body parsed by content-type, default to null)

    // res: http.ServerResponse with some helper functions
    //      - res.status(code)
    //      - res.json(body) (body is a serializable object)
    //      - res.send(body) (body can be a string, object, or a buffer)
    //      - res.redirect([status,] path) (status defaults to 307 temporary redirect)
    //      - res.revalidate(urlPath)
    res.status(200).json({
        text: 'Hello',
    });
}
