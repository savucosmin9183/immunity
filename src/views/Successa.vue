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
import emailjs from "emailjs-com";

export default {
  name: 'Success',
  mounted(){
      
      var templateParams = {
        nrtel: localStorage.getItem('nrtel'),
        nume: localStorage.getItem('nume'),
        prenume: localStorage.getItem('prenume'),
        mail: localStorage.getItem('mail'),
        tara: localStorage.getItem('tara'),
        numar: localStorage.getItem('numar'),
        cantitate: localStorage.getItem('cantitate'),
        oras: localStorage.getItem('oras'),
        strada: localStorage.getItem('strada'),
        scara: localStorage.getItem('scara'),
        bloc: localStorage.getItem('bloc'),
        apartament: localStorage.getItem('apartament'),
        etaj: localStorage.getItem('etaj'),
        detalii: localStorage.getItem('detalii'),
      };

      emailjs.send("service_fjyef0t", "template_xr5r809", templateParams).then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  }
  
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
