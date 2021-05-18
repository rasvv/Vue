<template >

  <div class="calculator">
    <h1>Калькулятор</h1>

    <div class="inputs">
      <div class="inputs__top">
        <h4>Операнд1</h4>
        <h4>Операнд2</h4>
      </div>

      <div class="inputs__bottom">
        <input v-model.number="oper1" />
        <input v-model.number="oper2" />
      </div>

      <h4>Результат</h4>

      <span>
        {{ result }}
      </span>
    </div>

    <div class="operbuttons">
      <h4>Операции</h4>
      <div class="keypad">
        <button v-for="(opera, id) in operators" @click="calculate(opera)" :key="opera">
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
          <input type="radio" id="left" value="Операнд1" v-model="picked" />
          Операнд1
				</label>
        <label>
          <input type="radio" id="right" value="Операнд2" v-model="picked" />
					Операнд2
				</label>
      </div>

      <div class="keypad">
        <button v-for="num in numbers" @click="fill(num)" :key="num">
          {{ num }}
        </button>
				<button class="btnback" v-for="back in backspace" @click="backSpace" :key="back">
          {{ back }}
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./calculator.js"></script>

<style src="./calculator.sass" lang="sass"></style>
