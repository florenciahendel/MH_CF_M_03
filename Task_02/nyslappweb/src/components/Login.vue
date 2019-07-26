<template>
  <div>
    <b-button
      squared
      class="icon-mail size"
      size="lg"
      variant="outline-light"
      id="toggle-btn1"
      @click="toggleModal1"
    ></b-button>
    <b-modal ref="my-modal2" hide-footer title="Enter">
      <b-form>
        <label class="sr-only" for="inline-form-input-name">Name</label>
        <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Jane Doe"></b-input>

        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inline-form-input-username" placeholder="Username"></b-input>
        </b-input-group>

        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

        <b-button variant="primary">Save</b-button>
        <b-button variant="secondary">Registrer</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    showModal() {
      this.$refs["my-modal2"].show();
    },
    hideModal() {
      this.$refs["my-modal2"].hide();
    },
    toggleModal1() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal2"].toggle("#toggle-btn1");
    }
  }
};
</script>

<style scoped>
.size {
  font-size: 40px;
}
</style>
