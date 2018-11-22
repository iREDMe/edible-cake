const Cake = require('./index.js');
const QuadCake = new Cake(4, true);

(async () => {
    try {
        // console.log(await QuadCake.takeOffCandles());
        // console.log(await QuadCake.blowOnCandles());
        // console.log(await QuadCake.blowOnCandles());
        // console.log(await QuadCake.takeOffCandles());
        console.log(await QuadCake.eatTheCake());
        console.log(await QuadCake.eatTheCake());
        console.log(await QuadCake.eatTheCake());
        console.log(await QuadCake.eatTheCake());
        console.log(await QuadCake.eatTheCake());
    } catch (e) {
        console.log(e);
        process.exit(0);
    }
})();