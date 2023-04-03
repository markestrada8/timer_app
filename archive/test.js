const parent = {

  a: function () {
    const b = {
      c() {
        console.log('c ', this)
        return function d() {
          console.log('d ', this)
        }
      }
    }
    b.c()()

  }
}

const f = {
  e() {
    parent.a()
  },
  g() {
    console.log('g ', this)
  }
}
// f.e()
// f.g()


class Test {
  constructor() {
    this.a = 1
  }
  b() {
    console.log('c ', this.c(), this.a)
  }
  c = () => {
    console.log('b ', this)
  }
}

const newTest = new Test()
console.log(newTest.a)
newTest.b()
newTest.c()