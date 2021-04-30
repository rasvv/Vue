<template>
  <div class="hello">
    <input v-model="a" type="text" />
    <input v-model="b" type="text" />
    = {{ result }}
    <div>
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('^')">^</button>
      <button @click="calculate('%')">%</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    a: 0,
    b: 0,
    result: 0
  }),
  props: {
    msg: String,
    myBool: Boolean
  },
  methods: {
    calculate (fun) {
      switch (fun) {
        case '+':
          this.result = +this.a + +this.b
          break
        case '-':
          this.result = +this.a - +this.b
          break
        case '*':
          this.result = +this.a * +this.b
          break
        case '/':
          this.result = +this.a / +this.b
          break
        case '^':
          this.result = Math.pow(+this.a, +this.b)
          break
        case '%':
          this.result = +this.a % +this.b
          break
      }
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
</style>
