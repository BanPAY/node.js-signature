const NodeRSA = require('node-rsa');

module.exports = {
    encrypt_bp: function(key_c, sign){
        let key = new NodeRSA(key_c);
        key.setOptions({encryptionScheme: 'pkcs1'})
        const crypted_sign = key.encrypt(sign, 'base64');
        return crypted_sign;
    }
}

