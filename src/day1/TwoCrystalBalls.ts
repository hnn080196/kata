/**
 *Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.
 * @constructor
 * @param {string} breaks - The distances status , from high enough distance => spot will break
 * @return {number} number - The author of the book.
 */
export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length)); // số bước nhảy
    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAmount; // check jmp point true thì lùi về điểm đầu
    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            console.log(i);
            return i;
        }
    }

    return -1;
}
