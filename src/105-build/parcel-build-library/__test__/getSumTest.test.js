// getSumTest.test.js

// import {describe, it,expect} from '@jest/globals'

const getSum = require('../dist/index.js').getSum

describe('getSum', () => {
    // `it` is an alias of `test`
    it('should return sum of two numbers', () => {
        // Arrange
        const getSumProps = {a: 1, b: 2}
        // Act
        const result = getSum(getSumProps)
        // Assert
        expect(result).toBe(3)
    })

    it('should return error', () => {
        expect(()=>getSum({a:1,b:""})).toThrow()
        expect(()=>getSum({a:"",b:1})).toThrow()
        expect(()=>getSum({a:"",b:""})).toThrow()
    })
    }
)