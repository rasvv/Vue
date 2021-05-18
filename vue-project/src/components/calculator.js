export default {
  data: () => ({
    oper1: 0,
    oper2: 0,
    oper: '0',
    result: 0,
    operators: ['+', '-', '/', '*', '^', '%'],
    captions: ['Сложение', 'Вычитание', 'Деление', 'Умножение', 'Возведение в степень', 'Целая часть от деления'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    backspace: '<',
    checked: false,
    picked: 'Операнд1'
  }),
  props: {
    msg: String,
    myBool: Boolean
  },
  methods: {
    calculate (fun) {
      const { oper1, oper2 } = this
      if ((fun === '/' || fun === '%') && oper2 === 0) {
        alert('На ноль делить нельзя')
      } else {
        const calcRes = {
          '+': () => oper1 + oper2,
          '-': () => oper1 - oper2,
          '/': () => oper1 / oper2,
          '*': () => oper1 * oper2,
          '^': () => Math.pow(oper1, oper2),
          '%': () => parseInt(oper1 / oper2)
        }
        this.result = oper1 + fun + oper2 + '=' + calcRes[fun]()
      }
    },
    fill (num) {
      const { picked } = this
      const oper = picked === 'Операнд1' ? 'oper1' : 'oper2'
      this[oper] = +(this[oper] += String(num))
    },
    backSpace () {
      const { picked } = this
      const oper = picked === 'Операнд1' ? 'oper1' : 'oper2'
      this[oper] = Math.trunc(this[oper] / 10)
    }
  }
}
