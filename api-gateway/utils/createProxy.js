function createProxy(path) {
    return function (req) {
        return path + req.url;
    };
}

export default createProxy;
