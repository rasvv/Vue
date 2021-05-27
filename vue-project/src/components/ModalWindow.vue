<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.overlay]"></div>
    <div :class="[$style.content]">
      <header>{{ name }}</header>
      <PaymentsForm v-if="name === 'PaymentsForm'" />
    </div>
    <div :class="[$style.footer]">
      <button @click='onClose()'>Close</button>
    </div>
  </div>
</template>

<script>
import PaymentsForm from './PaymentsForm'

export default {
  components: {
    PaymentsForm
  },
  props: {
    name: String
  },
  methods: {
    onClose () {
      this.$modal.close()
    }
  }

}
</script>

<style module lang="sass">
.wrapper
  border: 1px solid red
  position: absolute
  width: 1180px
  height: 100vh

  .overlay
    z-index: 0
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: rgba(50,50,50,0.5)

  .content
    position: relative
    z-index: 100

  .footer
    position: relative
    padding-left: 15px

    button
      height: 25px
      width: 100px

</style>
