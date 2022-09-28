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

/** 
 * Get args from command line
 * run with: node generator.js <length>
 * EX:
 * node generator.js 20 = uonOSvtURzAjNl5PwGpw
 * node generator.js 16 = bt1yr&jjbkOm$0dd
 * node generator.js 5 = 3X0Fa
 */
const args = process.argv;
console.log(makeid(args[2]));

// this is a test comment to test commits