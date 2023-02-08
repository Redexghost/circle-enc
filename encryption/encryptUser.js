const crypto = require('crypto');
    








class UserProtection {


 

    constructor(){
      this.alice = crypto.getDiffieHellman('modp15');
      this.alice.generateKeys('base64');
  
    };


genpublicKey(){

    const publicKey = this.alice.getPublicKey('base64');
    
    return publicKey;

}

genPrivatekey(){

    const alicePrivatekey = this.alice.getPrivateKey('base64');
    return  alicePrivatekey;

}



genSecret(bobpubkeys){
    
    const aliceSecret = this.alice.computeSecret(bobpubkeys,null,'hex');
    return aliceSecret;
}







}

module.exports = UserProtection;