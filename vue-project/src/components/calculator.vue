<template>

  <div class="calculator">
    <h1>Калькулятор</h1>
    <div class="inputs">
     <div class="inputs__top">
       <p>Операнд1</p>
       <p>Операнд2</p>
     </div>

     <div class="inputs__bottom">
       <input v-model.number.lazy="oper1" />
      <input v-model.number.lazy="oper2" />
    </div>
    </div>

    <span>
      {{ result }}
    </span>

    <label for="checkbox">
      <input type="checkbox" id="checkbox" v-model="checked" />
      Вывести экранную клавиатуру
      </label>
    <br />

    <div class="numberbuttons" v-show="checked">
      <div class="selector">
        <h5>Поле для заполнения: </h5>
        <input type="radio" id="left" value="Операнд1" v-model="picked" />
        <label for="left">Операнд1</label>

        <input type="radio" id="right" value="Операнд2" v-model="picked" />
        <label for="right">Операнд2</label>
      </div>

      <button v-for="num in numbers" @click="fill(num)" :key="num">
        {{ num }}
      </button>
    </div>
    <div class="buttons">
      <h4>Операция</h4>
      <button v-for="(opera, id) in operators" @click="calculate(opera)" :key="opera">
        {{ captions[id] }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    oper1: 0,
    oper2: 0,
    strOper: '0',
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
      if (this.picked === 'Операнд1') {
        this.strOper = this.oper1.toString()
      } else {
        this.strOper = this.oper2.toString()
      }

      if (num === '<-') {
        if (this.strOper.length === 1) {
          this.strOper = 0
        } else {
          this.strOper = this.strOper.slice(0, -1)
        }
      } else {
        if (this.strOper === '0') {
          this.strOper = num.toString()
        } else {
          this.strOper = this.strOper.concat(num.toString())
        }
      }
      if (this.picked === 'Операнд1') {
        this.oper1 = +this.strOper
      } else {
        this.oper2 = +this.strOper
      }
    }
  }
}
</script>

<style  src="./calculator.sass" lang="sass">

</style>
