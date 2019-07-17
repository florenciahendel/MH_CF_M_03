<template>
 <div class="row">
    <h1>This is a testing page with Vue</h1>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
 
  import UserCard from './Profile/UserCard'
  export default {
    components: {
           UserCard
    },
    data() {
      return {
        user: {
          fullName: 'Florencia Hendel',
          title: 'Trainee',
          description: `Is that you Mr. Stark?`,
        }
      }
    }
  }
</script>
<style>
</style>