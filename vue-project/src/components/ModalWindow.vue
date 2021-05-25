<template>
  <div :class="wrapper">
    <div :class="header">{{ modalWindowSettings.header }}</div>
    <div :class="content">
      <PaymentsForm v-if="modalWindow === 'PaymentsForm'" />>
    </div>
    <div :class="footer">
      <button @click='$modal.close()'>Close</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
