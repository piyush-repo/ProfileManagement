let config = {
    uri:"localhost:27017/UserManagement",
    options:{
        socketTimeoutMS: 30000,
        keepAlive: true,
        reconnectTries: 30000}
}

module.exports = config;