<template>
  <div class="list">
    <div class="list__table" :style="style">
      <div class="list__header">
        <div class="list__header-cell date">Дата</div>
        <div class="list__header-cell category">Категория</div>
        <div class="list__header-cell price">Цена</div>
      </div>

      <div class="list__data" v-for="(item, index) in paginatedData" :key="index" >
        <div class="list__data-cell date">{{ item.date }}</div>
        <div class="list__data-cell category">{{ item.category }}</div>
        <div class="list__data-cell price">{{ item.price }}</div>
      </div>
    </div>
    <Paginator :items="items" @showArr="onShowArr"/>
  </div>
</template>

<script src="./PaymentsList.js"></script>

<style src="./PaymentsList.sass"  lang='sass'></style>
