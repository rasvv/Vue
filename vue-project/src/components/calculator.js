export default {
  data: () => ({
    oper1: 0,
    oper2: 0,
    strOper: '',
    result: 0,
    operators: ['+', '-', '/', '*', '^', '%'],
    captions: ['Сложение', 'Вычитание', 'Деление', 'Умножение', 'Возведение в степень', 'Целая часть от деления'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '<-'],
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
      let { oper1, oper2, strOper, picked } = this
      if (picked === 'Операнд1') {
        strOper = oper1.toString()
      } else {
        strOper = oper2.toString()
      }

      if (num === '<-') {
        if (strOper.length === 1) {
          strOper = 0
        } else {
          strOper = strOper.slice(0, -1)
        }
      } else {
        if (strOper === '0') {
          strOper = num.toString()
        } else {
          strOper += num.toString()
        }
      }
      if (picked === 'Операнд1') {
        this.oper1 = +strOper
      } else {
        this.oper2 = +strOper
      }
    }
  }
}
