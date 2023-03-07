export default {
    methods: {
        generateRandomString() {
            const usedStrings = new Set();
            const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let newString;
            do {
                newString = Array.from({length: 10}, () => letters.charAt(Math.floor(Math.random() * letters.length))).join('');
            } while (usedStrings.has(newString));
            usedStrings.add(newString);
            return newString;
        }
    }
}
