<template>
  <div class="container flex md:flex-row flex-wrap">
    <SideBar />
    <Main />
  </div>
</template>

<script>
import SideBar from '~/components/SideBar';
import Main from '~/components/Main';

export default {
  components: {
    SideBar,
    Main
  }
}
</script>
