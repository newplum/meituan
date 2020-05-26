<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    window.addEventListener('beforeunload', () => {
       sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    })
  }
}
</script>

