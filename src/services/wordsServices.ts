import { Word } from '../types'
import wordsList from './words.json'

const words: Array<Word> = wordsList

export const findById = (id: number): Word => {
    const entry = words.find(d => d.id == id)
    if(entry){
        return entry
    }
    return {
        id: 0,
        wordLength: 1,
        word: 'x'
    }
}

export const getRandom = (l: number): number => {
    const filteredWords = words.filter(e => e.wordLength == l)
    const randomWord = filteredWords[(Math.floor(Math.random() * filteredWords.length))]
    return randomWord.id
}

export const ckeckWordExist = (w: string): boolean => {
    if(words.find(e => e.word == w)){
        return true
    }
    return false
}

export const checkLetters = (entry: string, id: number): number[] | undefined =>{
    const original = findById(id)
    if(!original) return undefined
    let target = original.word.split('')
    const check = entry.split('')
    const arr: number[] = []
    check.forEach((el, i) => {
        if(el == target[i]){
            arr.push(1)
        }else{
            arr.push(0)
        }
    })
    target = target.filter((_el, i) => arr[i] == 0)
    
    return arr
}