
const prompt=require("prompt-sync")({sigint:true});
const UserProtection = require('./encryption/encryptUser');
const crypto = require('crypto');
const userProfile = new UserProtection();

const bob= crypto.getDiffieHellman('modp15');


const bobpubkeys = bob.generateKeys('hex');;


const aliceShared = userProfile.genpublicKey();


const bobsecret= bob.computeSecret(aliceShared,null,'hex');








//co
console.log(userProfile.genSecret(bobpubkeys) === bobsecret? "ok":"not the same");

