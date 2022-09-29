/**
 * Retuns a random string of specified length.
 * @param {number} length - The length of the random text string
 */
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&-=';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random()*charactersLength));
   }
   return result;
}

const args = process.argv;
console.log(makeid(args[2]));
// this is a meaningful comment