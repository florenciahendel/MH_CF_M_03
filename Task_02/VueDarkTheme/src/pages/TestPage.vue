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
        model: {
          company: 'MindHub',
          email: 'flor@email.com',
          username: 'flor1234',
          firstName: 'Florencia',
          lastName: 'Hendel',
          address: 'Dorrego 2124',
          city: 'Buenos Aires',
          country: 'Argentina',
          about: 'Blablabla'
        },
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