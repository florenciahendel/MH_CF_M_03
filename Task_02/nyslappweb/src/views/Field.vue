<template>
  <div class="container-fluid">
    <Navigation></Navigation>

    <h1>This is a Field page</h1>

    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  name: "About",
  components: {
    Navigation,
    Footer
  }
}
</script>