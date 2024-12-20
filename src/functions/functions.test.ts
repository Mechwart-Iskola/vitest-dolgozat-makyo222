import {it, expect, describe} from 'vitest';
import {factorial, findLongestWord, countVowels, isSubset, findCommonObjects} from './functions';

describe('factorial', () => {
    it('positive', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
    });
    it('null', () => {
        expect(factorial(0)).toBe(1);
    });
    it('negative', () => {
        expect(() => {
            factorial(-3);
        }).toThrowError;
    })
});

describe('findLongestWord', () => {
    it('normal', () => {
        expect(findLongestWord('The quick brown fox jumps over the lazy dog')).toBe('quick');
    });
    it('oneword', () => {
        expect(findLongestWord('hello')).toBe('hello');
    });
    it('empty', () => {
        expect(findLongestWord('')).toBe('');
    });
    it('extraspaces', () => {
        expect(findLongestWord('A  quick  test')).toBe('quick');
    });
    });

describe('countVowels', () => {
    it('normal', () => {
        expect(countVowels('Hello World')).toBe(3);
    });
    it('only consonants', () => {
        expect(countVowels('bcdfg')).toBe(0);
    });
    it('mixedletters', () => {
        expect(countVowels('AeIoU')).toBe(5);
    });
    it('empty', () => {
        expect(countVowels('')).toBe(0);
    });
})

describe('isSubset', () => {
    it('true', () => {
        expect(isSubset({ a: 1}, { a: 1, b: 2 })).toBe(true);
    });
    it('false', () => {
        expect(isSubset({ c: 3}, { a: 1, b: 2 })).toBe(false);
    });
})

describe('findCommonObjects', () => {
    it('sameObject', () => {
        expect(findCommonObjects([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }])).toEqual([{ id: 2, name: 'Bob' }]);
    });
    it('notsameObject', () => {
        expect(findCommonObjects([{ id: 1, name: 'Alice' }], [{ id: 3, name: 'Charlie' }])).toEqual([]);
    });
    it('empty', () => {
        expect(findCommonObjects([], [])).toEqual([]);
    });
    it('oneisempty', () => {
        expect(findCommonObjects([{ id: 1, name: 'Alice' }], [])).toEqual([]);
    });
})