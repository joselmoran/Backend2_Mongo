const expressJwt = require('express-jwt');
const config = require('./config.json');
const userService = require('../users/user.service');
const apiConstants = require('../commons/api-constants');


const baseApiPath = apiConstants.baseApiPath.concat(apiConstants.apiVersion);
const userPath = '/users';
const algorithmHS512 = 'HS512';

const jwt = () => {
 const secret = config.secret;
 // /api/v1/users/authenticate && /api/v1/users/register && /
 return expressJwt( {
   algorithms: [algorithmHS512], secret, isRevoked
 }).unless({
   path: [
     baseApiPath + '/authenticate',
     baseApiPath + '/register',
     '/',
   ]
 });

};

const isRevoked = async (req, payload, done) => {
	

	done();
};

module.exports = jwt;
