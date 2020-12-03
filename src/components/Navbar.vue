<template>
  <div class="navbar">
    <img src="@/assets/logo.png" alt="logo" class="logo">
    <div class="items">
        <a href="#sectionone"><p class="item">Despre produs</p></a>
        <a href="#footer"><p class="item">Contact</p></a>
        <div class="comanda" @click="show_modal">
            <p>Comandă acum</p>
            <img src="@/assets/cart.png" alt="cart_icon" class="cart">
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Navbar',
  methods:  {
      show_modal(){
          this.$parent.show_modal();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.navbar{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
}

.items{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.item{
    color: white;
    font-size: 18px;
    margin-left: 50px;
    margin-right: 50px;
    font-weight: bold;
    cursor: pointer;

}

.comanda{
    height: 100%;
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

.logo{
    height: 70px;
}

.cart{
    height: 20px;
    margin-left: 5px;
}


</style>
