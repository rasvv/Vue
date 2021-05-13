export default {
  data: () => ({
    oper1: 0,
    oper2: 0,
    strOper: '0',
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
    changeFocus (picked) {
      if (picked === 'Операнд1') {
        this.strOper = this.oper2.toString()
      } else {
        this.strOper = this.oper1.toString()
      }
    },
    changeInput () {
      const { strOper, picked } = this
      if (picked === 'Операнд1') {
        this.oper1 = +strOper
      } else {
        this.oper2 = +strOper
      }
    },
    fill (num) {
      if (this.strOper === '0') {
        this.strOper = num.toString()
      } else {
        this.strOper += num.toString()
      }
      this.changeInput()
    },
    backSpace () {
      if (this.strOper.length === 1) {
        this.strOper = 0
      } else {
        this.strOper = this.strOper.slice(0, -1)
      }
      this.changeInput()
    }
  }
}
