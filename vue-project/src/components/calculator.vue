<template >

  <div class="calculator">
    <h1>Калькулятор</h1>

    <div class="inputs">
      <div class="inputs__top">
        <h4>Операнд1</h4>
        <h4>Операнд2</h4>
      </div>

      <div class="inputs__bottom">
        <input v-model.number="oper1" name="oper1"/>
        <input v-model.number="oper2" name="oper2"/>
      </div>

      <h4>Результат</h4>

      <span>
        {{ answer }}
      </span>
    </div>

    <div class="operbuttons">
      <h4>Операции</h4>
      <div class="keypad">
        <button v-for="(opera, id) in operators" @click="calculate(opera)" :key="opera" :name="opera">
          {{ captions[id] }}
        </button>
      </div>
    </div>

    <label>
      <input type="checkbox" id="checkbox" v-model="checked" />
      Вывести экранную клавиатуру
    </label>
    <br />

    <div class="numberbuttons" v-show="checked">
      <div class="selector">
        <h4>Поле для заполнения: </h4>

        <label>
          <input type="radio" id="left" value="Операнд1" v-model="picked" name="radio1"/>
          Операнд1
        </label>
        <label>
          <input type="radio" id="right" value="Операнд2" v-model="picked" name="radio2"/>
          Операнд2
        </label>
      </div>

      <div class="keypad">
        <button v-for="num in numbers" @click="fill(num)" :key="num" :name="num">
          {{ num }}
        </button>
        <button class="btnback" v-for="back in backspace" @click="backSpace" :key="back" name="back">
          {{ back }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    oper1: 0,
    oper2: 0,
    oper: '0',
    result: 0,
    answer: '',
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
        this.result = calcRes[fun]()
        this.answer = oper1 + fun + oper2 + '=' + this.result
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
</script>

<style lang="sass">
.calculator
  width: 500px
  margin: 0 auto
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.inputs
  width: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
  &__top
    height: 20px
    display: flex
    justify-content: space-between

  &__bottom
    display: flex
    justify-content: space-between
    gap: 10px
    height: 40px
    margin-bottom: 15px

  input
    border: 1px solid #000
    width: 50%
    text-align: center
    font-size: 18px

  span
    display: flex
    justify-content: center
    align-items: center
    height: 40px
    width: 100%
    border: 1px solid #000
    font-weight: bold
    font-size: 24px
    margin-bottom: 15px

.selector
  display: flex
  align-items: center
  justify-content: center
  column-gap: 25px

p
  display: inline-block
  margin: 0

button
  margin: 5px 10px
  background-color: #fff
  min-width: 120px
  height: 40px
  padding: 5px

.operbuttons
  width: 100%
  margin-bottom: 15px

  button
    height: 26px
    font-size: 10px

.numberbuttons
  width: 100%

.keypad
  display: grid
  gap: 5px
  grid-template-columns: repeat(3, minmax(120px, 1fr))
  padding: 10px
  border: 1px solid #000
  background-color: #f5f1f1
  margin-top: 10px

.btnback
  grid-column: 2 / 4
</style>
