/**
 * Why would you deny the Cake?
 */
class Cake {
    /**
     * @param {number} [layers=5] The number of layers the cake has.
     * @param {boolean} [candles=false] Whether to add candles to the cake.
     */
    constructor(layers = 5, candles = false) {
        this.candles = candles;
        this.layers = layers;
        this.blowed = candles ? false : true;
        this.houseIsBurnedDown = false;
        this.dead = false;
    }

    /**
     * Blow on the candles for 3 seconds. Rid of the fire.
     * @returns {Promise<string>}
     */
    blowOnCandles() {
        return new Promise((resolve, reject) => {
            if (this.dead) reject('You\'re dead.');
            if (this.houseIsBurnedDown) reject('House is burned down, can\'t do anything now.');
            if (!this.candles) reject('No candles on the cake..');
            setTimeout(() => {
                if (this.blowed) resolve('You blowed on the already-blowed-out candles.');
                this.blowed = true;
                resolve('Blowed out the candles.');
            }, 3000);
        });
    }

    /**
     * Take off the candles in 2 seconds.
     * @returns {Promise<string>}
     */
    takeOffCandles() {
        return new Promise((resolve, reject) => {
            if (this.dead) reject('You\'re dead.');
            if (this.houseIsBurnedDown) reject('House is burned down, can\'t do anything now.');
            if (!this.candles) reject('No candles on the cake.');
            setTimeout(() => {
                this.candles = false;
                if (!this.blowed) {
                    this.houseIsBurnedDown = true;
                    resolve('Because the candles hadn\'t been blowed on yet, the house burned down.');
                } else {
                    resolve('Candles safely taken off cake.');
                }
            }, 2000);
        });
    }

    /**
     * Attempt to eat the cake in 5 seconds. Each eat takes off one layer of cake.
     * @returns {Promise<string>}
     */
    eatTheCake() {
        return new Promise((resolve, reject) => {
            if (this.dead) reject('You\'re dead.');
            if (this.houseIsBurnedDown) reject('House is burned down, can\'t do anything now.');
            setTimeout(() => {
                if (this.layers <= 0) {
                    resolve('You attempted to eat the cake, but you noticed there was no more layers of cake left to eat.');
                } else if (!this.blowed) {
                    this.dead = true;
                    resolve('Your organs had been set on fire, due to inability to blow out the candles beforehand.');
                } else if (this.candles) {
                    this.dead = true;
                    resolve('You ate the candles, causing your body to become intoxicated.');
                } else {
                    this.layers--;
                    resolve('You successfully ate a layer of cake.');
                }
            }, 5000);
        });
    }

    /**
     * Reload the cake with renewed properties.
     * @param {number} [layers=5] The number of layers the cake has.
     * @param {boolean} [candles=false] Whether to add candles to the cake.
     * @returns {Cake} The Cake itself.
     */
    reload(layers = 5, candles = false) {
        this.candles = candles;
        this.layers = layers;
        this.blowed = candles ? false : true;
        this.houseIsBurnedDown = false;
        this.dead = false;

        return this;
    }
}

module.exports = Cake;