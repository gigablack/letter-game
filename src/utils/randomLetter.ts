import dictionaryWords from '../boardFiles/dictionary.json'

const LETTERS: string = dictionaryWords.words.map(w => w.toUpperCase()).join('')

export const randomLetter = (): string => {
    return LETTERS[Math.ceil(Math.random()* LETTERS.length) - 1]
}