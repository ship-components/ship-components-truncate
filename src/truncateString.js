/**
 *
 * Takes a string and attempts to truncate by words
 * @export
 * @param {String} text
 * @param {Number} [characterLimit=Infinity]
 * @returns
 */
export default function truncateString(text, characterLimit = Infinity) {
    if (characterLimit <= 7) {
        throw new Error('Character limit has to be greater than 7');
    }


    if (text.length > characterLimit) {
      // Truncate and try not to split a word
      let exceeded = false;
      text = text.split(' ').reduce((str, word) => {
        if (exceeded === false && (str.length + Math.min(word.length, 12) + 1) < characterLimit - 3) {
          str += word + ' ';
        } else {
            exceeded = true;
        }
        return str;
      }, '');
      text = text.trim() + '...';
    }
    return text;
  }