<template>
  <div class="hello">
    <input v-model.lazy="oper1" />
    <input v-model.number.lazy="oper2" />
    = {{ result }}
    <br>
    <br>
    <input type="checkbox" id="checkbox" v-model="checked" >
    <label for="checkbox">Вывести экранную клавиатуру </label>

    <div class="numberbuttons" v-show="checked">
      <input type="radio" id="left" value="Операнд1" v-model="picked" >
      <label for="left">Операнд1</label>

      <input type="radio" id="right" value="Операнд2" v-model="picked">
      <label for="right">Операнд2</label>
      <br>

      <br>
      <button v-for="num in numbers"  @click="fill(num)" :key="num">
        {{ num }}
      </button>
    </div>
    <div class="buttons">
      <button v-for="opera in operators" @click="calculate(opera)" :key="opera">
        {{ opera }}
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
      const calcRes = {
        '+': () => oper1 + oper2,
        '-': () => oper1 - oper2,
        '/': () => oper1 / oper2,
        '*': () => oper1 * oper2,
        '^': () => Math.pow(oper1, oper2),
        '%': () => Math.round(oper1 / oper2)
      }
      this.result = calcRes[fun]()
    },
    fill (num) {
      if (this.picked === 'Операнд1') { this.strOper = this.oper1.toString() } else { this.strOper = this.oper2.toString() }

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
      if (this.picked === 'Операнд1') { this.oper1 = +this.strOper } else { this.oper2 = +this.strOper }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin-right: 10px;
}

.buttons {
  margin-top: 15px;
}
</style>
