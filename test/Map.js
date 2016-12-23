import * as M from '../src/Map'

xdescribe('Map', () => {
  describe('null', () => {
    describe('({})', () => {
      it('== true', () => {
        M.null({}).should.be.eql(true)
      })
    })
    describe('({ a: 1 })', () => {
      it('== false', () => {
        M.null({ a: 1 }).should.be.eql(true)
      })
    })
  })
})