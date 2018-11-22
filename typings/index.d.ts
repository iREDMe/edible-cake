declare module 'edible-cake' {
    export = Cake;

    class Cake {
        constructor(layers?: number, candles?: boolean);
        private candles: boolean;
        private layers: number;
        private blowed: boolean;
        private houseIsBurnedDown: boolean;
        private dead: boolean;

        public blowOnCandles(): Promise<string>;
        public takeOffCandles(): Promise<string>;
        public eatTheCake(): Promise<string>;
        public reload(layers?: number, candles?: boolean): Cake;
    }
}