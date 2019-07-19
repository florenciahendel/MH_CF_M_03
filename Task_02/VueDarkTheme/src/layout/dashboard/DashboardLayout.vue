<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">

        <!-- Estas porquerías (los nombres que van a aparecer en el link) las encontrás, al final, en el archivo en.json -->
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="far fa-futbol fa-2x"/>
        <sidebar-link to="/schedule" :name="$t('sidebar.schedule')" icon="far fa-calendar-alt fa-2x"/>
        <sidebar-link to="/fields" :name="$t('sidebar.fields')" icon="far fa-map fa-2x"/>
        <sidebar-link to="/team" :name="$t('sidebar.team')" icon="far fa-handshake fa-2x"/>
       
        <!-- 
        <sidebar-link to="/notifications" :name="$t('sidebar.notifications')" icon="tim-icons icon-bell-55"/>
        <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/test-page" :name="$t('sidebar.testPage')" icon="tim-icons icon-puzzle-10"/> -->
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
