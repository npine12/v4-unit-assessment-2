//Test Suite
describe('Skills Check 2 -- JavaScript 1', function () {

  describe('Problem 1 - myArr', () => {
    it('myArr array should exist', () => {
      expect(myArr).toBeDefined()
    })
    it('myArr should contain the correct values', () => {
      expect(myArr[0]).toBe(4)
      expect(myArr[1]).toBe('abc')
      expect(myArr[2][0]).toBe('cat')
      expect(myArr[2][1]).toBe('dog')
      expect(myArr[2][2]).toBe('bird')
      expect(myArr[3]).toBe(77)
    })
  })

  describe('Problem 2 - foundZ', () => {
    it('foundZ should exist', () => {
      expect(foundZ).toBeDefined()
    })
    it('foundZ should be the correct value', () => {
      expect(foundZ).toBe('z')
    })
  })
  
  describe('Problem 3 - animals', () => {
    it('animals should exist', () => {
      expect(animals).toBeDefined()
    })
    it('animals should be the correct length', () => {
      expect(animals.length).toBe(14)
    })
    it('animalsCopy should exist and be the correct length', () => {
      expect(animalsCopy).toBeDefined()
      expect(animalsCopy.length).toBe(15)
    })
    it('elephant should be the last item in animalsCopy', () => {
      expect(animalsCopy[14]).toBe('elephant')
    })
  })

  describe('Problem 4 - compareNums', () => {
    it('compareNums should exist', () => {
      expect(compareNums).toBeDefined()
    })
    it('compareNums should return the larger number', () => {
      expect(compareNums(6,3)).toBe(6)
    })
    it('compareNums should return the number if args are equal', () => {
      expect(compareNums(4,4)).toBe(4)
    })
  })

  describe('Problem 5 - bestMovie', () => {
    it('bestMovie should exist', () => {
      expect(bestMovie).toBeDefined()
    }) 
    it('bestMovie should function properly', () => {
      expect(bestMovie('Sharknado')).toBe('Sharknado is the best movie ever!')
    })
  })

  describe('Problem 6 - jsNinja', () => {
    it('jsNinja should exist', () => {
      expect(jsNinja).toBeDefined()
    })
    it('jsNinja should return the correct string', () => {
      expect(jsNinja()).toBe('I am a JavaScript ninja!')
    })
  })

  describe('Problem 7 - gameInfo', () => {
    it('gameInfo should not contain a rating property', () => {
      expect(gameInfo.rating).toBe(undefined)
    })
  })

  describe('Problem 8 - shapes', () => {
    it('shapes should have square, rectangle, hexagon, and octogon properties', () => {
      expect(shapes.square && shapes.rectangle && shapes.hexagon && shapes.octagon).toBeDefined()
    })
    it('shapes should not have triangle, pentagon, or septagon properties', () => {
      expect(shapes.triangle && shapes.pentagon && shapes.septagon).toBe(undefined)
    })
  })

  describe('Problem 9 - classes', () => {
    it(`all class objects' inPerson values should be false`, () => {
      expect(classes[0].inPerson && classes[1].inPerson && classes[2].inPerson).toBe(false)
    })
    it(`all class objects' homework values should be false`, () => {
      expect(classes[0].homework && classes[1].homework && classes[2].homework).toBe(false)
    })
  })

  describe('Problem 10 - pairsArray', () => {
    it('pairsArray should be the correct length', () => {
      expect(pairsArray.length).toBe(5)
    })
    it('pairsArray should contain the correct paired values', () => {
      expect(pairsArray[0][0] === 0 && pairsArray[0][1] === 4).toBe(true)
      expect(pairsArray[1][0] === 1 && pairsArray[1][1] === 8).toBe(true)
      expect(pairsArray[2][0] === 2 && pairsArray[2][1] === 5).toBe(true)
      expect(pairsArray[3][0] === 3 && pairsArray[3][1] === 6).toBe(true)
      expect(pairsArray[4][0] === 7 && pairsArray[4][1] === 9).toBe(true)
    })
  })

  describe('Problem 11 - Dog Constructor', () => {
    it('Dog constructor should exist', () => {
      expect(Dog).toBeDefined()
    })
    it('Dog constructor should create dog objects correctly', () => {
      let sarge = new Dog('Sarge', 10, 'schnauzer', ['roll over', 'stay'])
      expect(sarge.name).toBe('Sarge')
      expect(sarge.age).toBe(10)
      expect(sarge.breed).toBe('schnauzer')
      expect(sarge.tricks.length).toBe(2)
    })
    it('fido should contain the correct values', () => {
      expect(fido.name).toBe('Fido')
      expect(fido.age).toBe(3)
      expect(fido.breed).toBe('Jack Russell')
      expect(fido.tricks[0]).toBe('sit')
      expect(fido.tricks[1]).toBe('shake')
    })
  })

  describe('Problem 12 - bark & fidoSpeak', () => {
    it('bark should exist', () => {
      expect(bark).toBeDefined()
    })
    it('fidoSpeak should exist and contain the correct value', () => {
      expect(fidoSpeak).toBeDefined()
      expect(fidoSpeak).toBe('Fido says bark!')
    })
  })

  describe('Problem 13 - teachTrick & teachStay', () => {
    it('teachTrick should exist', () => {
      expect(teachTrick).toBeDefined()
    })
    it('teachStay should exist and return the correct value', () => {
      expect(teachStay).toBeDefined()
      expect(teachStay()).toEqual(['sit', 'shake', 'stay'])
    })
  })

  describe('Problem 14 - dogIntro & fidoIntro', () => {
    it('dogIntro should exist', () => {
      expect(dogIntro).toBeDefined()
    })
    it('fidoIntro should exist and contain the correct value', () => {
      expect(fidoIntro).toBe('Fido is a Jack Russell that loves chicken and their tennis ball!')
    })
  })

  describe('Problem 15 - Phone Constructor etc.', () => {
    it('Phone constructor should exist', () => {
      expect(Phone).toBeDefined()
    })
    it('Phone constructor should work correctly', () => {
      let phoneTest = new Phone('Apple', 'iPhone 11', 128, 'black', false)
      expect(phoneTest.brand).toEqual('Apple')
      expect(phoneTest.model).toEqual('iPhone 11')
      expect(phoneTest.storage).toEqual(128)
      expect(phoneTest.color).toEqual('black')
      expect(phoneTest.sold).toEqual(false)
    })
    it('phone1, phone2, and phone3 should exist', () => {
      expect(phone1).toBeDefined()
      expect(phone2).toBeDefined()
      expect(phone3).toBeDefined()
    })
    it('phone1, phone2, and phone3 values should be correct data types', () => {
      expect(typeof phone1.brand).toBe('string')
      expect(typeof phone1.model).toBe('string')
      expect(typeof phone1.color).toBe('string')
      expect(typeof phone1.storage).toBe('number')
      expect(typeof phone1.sold).toBe('boolean')
      expect(typeof phone2.brand).toBe('string')
      expect(typeof phone2.model).toBe('string')
      expect(typeof phone2.color).toBe('string')
      expect(typeof phone2.storage).toBe('number')
      expect(typeof phone2.sold).toBe('boolean')
      expect(typeof phone3.brand).toBe('string')
      expect(typeof phone3.model).toBe('string')
      expect(typeof phone3.color).toBe('string')
      expect(typeof phone3.storage).toBe('number')
      expect(typeof phone3.sold).toBe('boolean')
    })
    it('sell prototype method should exist', () => {
      expect(phone1.sell).toBeDefined()
    })
    it('sell method should work properly', () => {
      let phoneTest = new Phone('Apple', 'iPhone 11', 128, 'black', false)
      phoneTest.sell()
      expect(phoneTest.sell()).toEqual('Apple iPhone 11 has been sold.')
      expect(phoneTest.sold).toBe(true)
    })
  })

})
