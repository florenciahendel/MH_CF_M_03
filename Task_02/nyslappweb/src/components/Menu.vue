<template>
  <div>
    <b-button
      squared
      class="icon-menu size"
      size="lg"
      variant="outline-light"
      id="toggle-btn"
      @click="toggleModal"
    ></b-button>

    <b-modal ref="my-modal" hide-footer title="Menu">
      <b-list-group-item href="#/About">About NYSL</b-list-group-item>
      <b-list-group-item href="#">Registration</b-list-group-item>
      <b-list-group-item href="#">Rules And Policies</b-list-group-item>
      <b-list-group-item href="#">Contact</b-list-group-item>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  }
};
</script>

<style scoped>
.size {
  font-size: 40px;
}
</style>
