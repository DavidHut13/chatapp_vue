<template>
    <div id="app" >
      <app-header></app-header>
      <b-container>
          <b-row >
            <b-col lg="8" offset-lg="2"  xl="6" offset-xl="3" md="4" offset-md="4">
              <router-view class="text-center"></router-view>
            </b-col>
            <b-col></b-col>
          </b-row>
      </b-container>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header,
  }
  
}

</script>

<style>



</style>
