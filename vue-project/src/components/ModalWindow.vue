<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.overlay]"></div>
    <div :class="[$style.content]">
      <header>{{ name }}</header>
      <PaymentsForm v-if="name === 'PaymentsForm'" />
      <CategoryForm v-if="name === 'CategoryForm'" />
      <ContextForm v-if="name === 'ContextForm'" />
    </div>
    <div :class="[$style.footer]">
      <button @click='onClose()'>Close</button>
    </div>
  </div>
</template>

<script>
import PaymentsForm from './PaymentsForm'
import CategoryForm from './CategoryForm'
import ContextForm from './ContextForm'

export default {
  components: {
    PaymentsForm,
    CategoryForm,
    ContextForm
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
  z-index: 2
  width: 100%
  height: 100%

.overlay
  z-index: 0
  position: absolute
  opacity: 0
  top: 0
  left: 0
  right: 0
  bottom: 0

  // background: rgba(50,50,50,0.2)
  background: #eee

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
