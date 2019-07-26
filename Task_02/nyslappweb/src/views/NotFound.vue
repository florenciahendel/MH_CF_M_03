<template>
  <div class="container-fluid">
    <Navigation></Navigation>

    <h1>Oops! The resource you are looking for doesn't exists. Our JrDev will be punished for this. </h1>
    <div class="container">
<img src="https://cdn.shopify.com/s/files/1/0310/8593/files/Paddlin_large.jpg?v=1493063560" class="img-fluid" alt="That's a paddlin">
</div>
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