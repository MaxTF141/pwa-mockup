<template>
  <div class="hello">
    <video id="fullscreen-video" src="../assets/VID-20230612-WA0007.mp4" autoplay type="video/mp4"></video>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#fullscreen-video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

</style>
