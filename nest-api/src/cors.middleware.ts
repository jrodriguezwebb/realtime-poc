export function cors(req, res, next) {
    //  aqui se agregan las aplicaciones
    const whiteList: any = [
        '*',
        'http://localhost:4200',
      ];

    const origen: any = req.headers.origin;

    if (whiteList.indexOf(origen) >= -1) {
    res.header('Access-Control-Allow-Origin', origen);
    }

    res.header('Access-Control-Allow-Headers', ' Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
}
