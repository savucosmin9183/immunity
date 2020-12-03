<template>
  <div class="footer" id="footer">
    <div class="first_element">
        <img src="@/assets/logo.png" alt="logo" class="footer_logo">
        <p>Pachetul IMMUNITY este o creație inovatoare, compusă din ingrediente naturale și inedite, de o calitate superioară.</p>
    </div>
    <div class="second_element">
        <p>Tel: 0760 388 760</p>
        <p>Email: son.slim@yahoo.com</p>
        <div class="socials">
            <img src="@/assets/facebook.png" alt="facebook icon">
            <img src="@/assets/instagram.png" alt="instagram icon">
        </div>
    </div>
    <div class="third_element">
        <img src="@/assets/cutie.png" alt="cutie" class="cutie_footer">
        <div class="comanda_footer" @click="show_modal">
            <p>Comandă acum</p>
            <img src="@/assets/cart.png" alt="cart_icon" class="cart">
        </div>
    </div>
    <div class="fourth_element">
        <p>ABONEAZĂ-TE LA <br>NEWSLETTER</p>
        <div class="newsletter">
            <input type="email" placeholder="Email">
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Footer',
  methods:{
      show_modal(){
          this.$parent.show_modal();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.footer{

    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 250px;
    padding-right: 250px;
    display:flex;
    justify-content: space-between;
    background-color: black;
}

.first_element{
    display:flex;
    flex-direction: column;
    color: white;
    width: 15%;
}


.footer_logo{
    margin-bottom: 20px;
    width: 200px;
}

.second_element{
    display:flex;
    flex-direction: column;
    font-weight: bold;
    color: white;
    margin-top: 25px;
}

.second_element p{
    margin-bottom: 15px;
}

.socials{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 15px;
}

.socials img{
    margin-right: 25px;
    cursor: pointer;
}

.comanda_footer{
    height: 70px;
    width: 180px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 50px;
    background-color: #eec689;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
}

.cutie_footer{
    height: 200px;
}

.fourth_element{
    display: flex;
    flex-direction: column;
}

.fourth_element > p {
    font-size: 35px;
    font-weight: bold;
    color: white;
}

.newsletter{
    margin-top: 15px
}

.newsletter input{
    width: 100%;
    height: 40px;
    background-color: #150f16;
    padding-left: 10px;
    font-size: 17px;
    outline: none;
    color: white;
}

</style>
