import User from "./user";


class LoginResponse {
    constructor(jwt, expiration, user) {
        this.jwt = jwt;
        this.expiration = expiration;
        this.user = user;
    }
};

export default LoginResponse;
