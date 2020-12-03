<template>
  <div class='success'>
      
      <div class="success_text">
          <p>Comanda dvs. a fost procesată.</p>
          <p>Vă mulțumim!</p>
          <img src="@/assets/greencheck.png" alt="greencheck">
      </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Success',
  
}
</script>

<style>
    
.success{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/success.jpg');
    background-size: cover;
    text-align: center;
    color: white;
    font-size: 25px;
}

.success img{
    height: 60px;
    margin-top: 20px;
}

.success p{
    margin-bottom: 10px;
}

</style>
