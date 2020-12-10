<template>
  <div class="main-page" v-if="$resize && $mq.above(992)">
    <section class="first_page">
      <img src="@/assets/mist_bg.png" alt="mists" class="mists">
      <img src="@/assets/visual2.png" alt="visual" class="visual">
      <img src="@/assets/mist_front.png" alt="mists" class="mists_front">
      <Navbar/>
      <div class="hero">
        <p class="main_title"><b>Sănătatea ta</b> este<br><b>pasiunea mea!</b></p>
        <a href="#sonia"><div class="first_page_button">
          <p>Află mai multe</p>
        </div></a>
      </div>
    </section>
    <section class="second_page">
      <img src="@/assets/leaves.png" alt="leaves" class= "leaves">
      

      <div class="recomandare" id="sonia">
        <img src="@/assets/sonia.png" alt="sonia">
        <div class="second_column">
          <p>RECOMANDAT DE SONSLIM</p>
          <div class="paragraphs">
            <div class="paragraph">
              <p>“SĂNATATEA TA ESTE PASIUNEA MEA!” sub această premiză am inceput totul, adică din pasiune pentru medicină, pentru tot ceea ce inseamnă un stil de viată sănatos si echilibrat . 
   <br><br> 
Modul in care eu concep dietele pentru pacienții mei este un concept unic in România, abordez fiecare pacient din toate punctele de vedere, scopul meu este sa îi schimb viața , in bine evident si nu doar aspectul fizic . 
  <br><br>
Așa cum imi place mie sa spun, suntem o familie, familia SonSlim. La început nu știam cât de mare are sa devină această familie, dar azi, familia SonSlim se întinde pe toate continentele lumii și de la o zi la alta mi se confirmă că aceasta este menirea mea , pentru asta m-a lăsat Dumnezeu pe pământ.</p>
            </div>
            <div class="paragraph">
              <p>Mă simt împlinită când datorită muncii mele oamenii sunt fericiți și tocmai pentru ca imi doresc ca și cei care nu îmi sunt pacienți , să se bucure de un stil de viată mai sănatos , am creat, tot din pasiune, pentru semenii mei, acest pachet, IMMUNITY  by  SonSlim , care vă este un aliat in susținerea sistemului imunitar.
                <br><br>
Acest concept respectă in continuare principiile mele, respectiv totul natural și de calitate premium.</p>
              <img src="@/assets/soniaburtic.png" alt="signature" class="signature">
            </div>
          </div>
        </div>
      </div>                             
    </section>

    <section class="third_page" id="third">
      <p>Pachetul <b>IMMUNITY by SonSlim</b> este conceput pentru <b>30 de zile</b> si veți regăsi urmatoarele produse:</p>
    
      <div class="products">
        <div class="product">
          <img src="@/assets/tonic.png" alt="tonic">
          <div class="descriere_produse">
            <p class="product_title">IMMUNITY TONIC</p>
            <p class="desc">Acest produs este un extract din fructe de soc, hidroalcoolic, 100% natural, special conceput pentru a ajuta in afectiuni acute ale cailor respiratorii, totodata tonifica musculatura plamanului.
<br><br>Are actiuni detoxifiante, curata profund organismul prin eliminarea excesului de lichide din tesuturi, a toxinelor si produsilor reziduali.</p>
          </div>
          
        </div>
        <div class="product">
          <img src="@/assets/power.png" alt="power">
          <div class="descriere_produse">
            <p class="product_title">IMMUNITY POWER</p>
            <p class="desc">Acest produs este un sirop de catina, obtinut prin presare la rece, 100% natural, care are rol vitaminizant, sustine sistemul imunitar, fortifica si revigoreaza organismul, asigurand un aport bogat de vitamine ( A, C, B1, B2, B6, B9, E, K, P, F, ), betacaroten, uleiuri complexe, acizi grasi polinesaturati, serotonina, aminoacizi, enzime si minerale.
<br><br>Totodata studiile demonstreaza ca un consum regulat de catina este benefic pentru sanatatea inimii si poate reduce riscul de aparitie a bolilor cardiovasculare.</p>
          </div>
          
        </div>
      </div>
      <div class="products">
        <div class="product">
          <img src="@/assets/help.png" alt="help">
          <div class="descriere_produse">
            <p class="product_title">IMMUNITY HELP</p>
            <p class="desc">Acest produs este un sirop din plante medicinale atent selectionate, mugurii de pin fiind recoltati in luna februarie, cand principiul activ are cea mai buna calitate.
<br><br>Este un bun imunostimulator, antibacterian, antiinflamator, care tonifica plamanii si ajuta la degajarea cailor respiratorii.</p>
          </div>
          
        </div>
        <div class="product">
          <img src="@/assets/forte.png" alt="forte">
          <div class="descriere_produse">
            <p class="product_title">IMMUNITY FORTE</p>
            <p class="desc">Acest produs este un ceai obtinut dintr-un amestec perfect de plante medicinale. El completeaza efectul celorlalte produse, respectiv intareste sistemul imunitar, reduce aparitia problemelor respiratorii, antispastic, fluidizant al secretiilor traheo-bronsice si antiinflamator.</p>
          </div>
          
        </div>
      </div>
      
      <div class="pack">
        <img src="@/assets/cutie.png" alt="cutie">
        <div class="price">
          <p class="bold">IMMUNITY<br>BY SONSLIM</p>
          <p>399 RON</p>
          <div class="command_button" @click="show_modal">
            <p>Comandă acum</p>
          </div>
        </div>
        <div class="elemente">
          <p>+ IMMUNITY TONIC</p>
          <p>+ IMMUNITY POWER</p>
          <p>+ IMMUNITY HELP</p>
          <p>+ IMMUNITY FORTE</p>
        </div>
      </div>

    </section>


    <section class="fourth_page">
      <div class="image_centered">
        <div class="image_container">
          <img src="@/assets/produse.jpg" alt="produse" class="produse_poza">
          
        </div>
        <div>
        <img src="@/assets/ingrediente.png"  id="sectionone" alt="ingrediente" class="ingrediente">
      </div>
        
      </div>
    </section>

    <section class="contact_page">
      <img src="@/assets/mintcopy.png" alt="mintcopy" class="mintcopy">
      
    </section>
    <Footer/>

    <modal name="order_modal">

      <ModalComponent/>

    </modal>
  </div>
  <div v-else>
    <div class="first_page_mobile">
      <img src="@/assets/logo.png" alt="logo" class="logo_mobile">
      <img src="@/assets/mist_bg.png" alt="mists" class="mists">
      <img src="@/assets/mist_front.png" alt="mists" class="mists_front">
      <img src="@/assets/visual2.png" alt="visual" class="visual_mobile">
      <p class="main_title_mobile"><b>Sănătatea ta</b> este<br><b>pasiunea mea!</b></p>
      <a href="#sonia_mobil"><div class="first_page_button button_mobile">
          <p>Află mai multe</p>
      </div></a>
      <img src="@/assets/leaves.png" alt="leaves" class= "leaves_mobile">
      
      <p class="recomandare_titlu_mobil" id="sonia_mobil">RECOMANDAT DE SONSLIM</p>
      
        <img src="@/assets/sonia.png" alt="sonia" class="sonia_mobil">
        <div class="paragraf_mobil">
          <p>Mă simt împlinită când datorită muncii mele oamenii sunt fericiți și tocmai pentru ca imi doresc ca și cei care nu îmi sunt pacienți , să se bucure de un stil de viată mai sănatos , am creat, tot din pasiune, pentru semenii mei, acest pachet, IMMUNITY  by  SonSlim , care vă este un aliat in susținerea sistemului imunitar.
                <br><br>
Acest concept respectă in continuare principiile mele, respectiv totul natural și de calitate premium.</p>
            <img src="@/assets/soniaburtic.png" alt="signature" class="signature_mobil">
        </div>
        <div class="products_mobile">
          
            <img src="@/assets/cutie.png" alt="cutie" class="cutie-mobile">
            <div class="price_mobile">
              <p class="bold">IMMUNITY BY SONSLIM</p>
              <p>399 RON</p>
              <div class="command_button_mobile" @click="show_modal">
                <p>Comandă acum</p>
              </div>
            </div>
          
          <p>Pachetul <b>IMMUNITY by SonSlim</b> este conceput pentru <b>30 de zile</b> si veți regăsi urmatoarele produse:</p>
          <div class="products_mobile_row">
            <div class="product_mobile">
          <img src="@/assets/tonic.png" alt="tonic" class="product_image_mobile">
          <div class="descriere_produse_mobile">
            <p class="product_title">IMMUNITY TONIC</p>
            <p class="desc_mobile">Acest produs este un extract din fructe de soc, hidroalcoolic, 100% natural, special conceput pentru a ajuta in afectiuni acute ale cailor respiratorii, totodata tonifica musculatura plamanului.
<br><br>Are actiuni detoxifiante, curata profund organismul prin eliminarea excesului de lichide din tesuturi, a toxinelor si produsilor reziduali.</p>
          </div>
          
        </div>
            <div class="product_mobile">
          <img src="@/assets/power.png" alt="power" class="product_image_mobile">
          <div class="descriere_produse_mobile">
            <p class="product_title">IMMUNITY POWER</p>
            <p class="desc_mobile">Acest produs este un sirop de catina, obtinut prin presare la rece, 100% natural, care are rol vitaminizant, sustine sistemul imunitar, fortifica si revigoreaza organismul, asigurand un aport bogat de vitamine ( A, C, B1, B2, B6, B9, E, K, P, F, ), betacaroten, uleiuri complexe, acizi grasi polinesaturati, serotonina, aminoacizi, enzime si minerale.
<br><br>Totodata studiile demonstreaza ca un consum regulat de catina este benefic pentru sanatatea inimii si poate reduce riscul de aparitie a bolilor cardiovasculare.</p>
          </div>
          
        </div>
          
              <div class="product_mobile">
          <img src="@/assets/help.png" alt="help" class="product_image_mobile">
          <div class="descriere_produse_mobile">
            <p class="product_title">IMMUNITY HELP</p>
            <p class="desc_mobile">Acest produs este un sirop din plante medicinale atent selectionate, mugurii de pin fiind recoltati in luna februarie, cand principiul activ are cea mai buna calitate.
<br><br>Este un bun imunostimulator, antibacterian, antiinflamator, care tonifica plamanii si ajuta la degajarea cailor respiratorii.</p>
          </div>
          
        </div>
              <div class="product_mobile">
          <img src="@/assets/forte.png" alt="forte" class="product_image_mobile">
          <div class="descriere_produse_mobile">
            <p class="product_title">IMMUNITY FORTE</p>
            <p class="desc_mobile">Acest produs este un ceai obtinut dintr-un amestec perfect de plante medicinale. El completeaza efectul celorlalte produse, respectiv intareste sistemul imunitar, reduce aparitia problemelor respiratorii, antispastic, fluidizant al secretiilor traheo-bronsice si antiinflamator.</p>
          </div>
          
        </div>
          </div>
          
        </div>
        <img src="@/assets/produse.jpg" alt="produse" class="produse">
        <div>
          <img src="@/assets/ing.png" alt="ingrediente" class="ingrediente_mobile">
        </div>
        <div class="footer_mobile">
          <div class="footer_div">
            <img src="@/assets/logo.png" alt="logo" class="logo_mobile">
             <p>Se fac livrări si in țările UE, iar ca opțiune de plata este doar cu cardul.</p>
          </div>
          <div class="second_element_mobile">
            <p>Tel: 0726 957 802</p>
            <p>Email: immunity.sonslim@gmail.com</p>
            <div class="socials_mobile">
                <a href="https://www.facebook.com/Son-Slim-Cabinet-ThNutritionist-by-Sonia-Burtic-1880607128667326" target="blank"><img src="@/assets/facebook.png" alt="facebook icon" class="icon"></a>
            <a href="https://www.instagram.com/sonslimcabinetth.nutritionist/" target="blank"><img src="@/assets/instagram.png" alt="instagram icon" class="icon"></a>
            </div>
          </div>
        </div>
    </div>
    <modal name="order_modal">

      <ModalComponent/>

    </modal>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import ModalComponent from './modal'
//import emailjs from 'emailjs-com';

export default {
  name: 'MainPage',
  components: {
    Navbar,
    Footer,
    ModalComponent
  },
  data() {
    return {
      cantitate: 1,
    }
  },
 
  methods: {
    show_modal(){
      
      this.$modal.show('order_modal');
    }
    
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

a{
  text-decoration: none;
}

.first_page{
  
  padding-left: 250px;
  padding-right: 250px;
}

.second_page{
  
  padding-left: 250px;
  padding-right: 250px;
}

.third_page{
  
  padding-left: 250px;
  padding-right: 250px;
}

.socials_mobile{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 15px;
    margin-left: 20px;
}

.fourth_page{
  padding-left: 250px;
  padding-right: 250px;
}

html{
  margin: 0;
  border: 0;
  padding: 0;
  background-color: #150f16;
  font-family: 'Montserrat';
  scroll-behavior: smooth;
  
}

*{
  margin: 0;
  padding: 0;
}

.hero{
  display: flex;
  flex-direction: column;
  margin-top: 30vh;
}

.main_title{
  color: white;
  font-size: 70px;
  margin-right: 100px;
}

.mists{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -102;
}

.mists_front{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -100;
}

.visual{
  position: absolute;
  top: 16vh;
  left: 45vw;
  height: 800px;
  object-fit: contain;
  z-index: -101;
}

.first_page_button{
  width: 230px;
  height: 50px;
  border: 3px solid #94f08d;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  cursor: pointer;

}

.first_page_button:hover{
  background-color: #94f98d;
  color: #150f16;
}

.leaves{
  margin-top: 200px;
}

.ingrediente{
  width: 100%;
  margin-top: -200px;
}

.recomandare{
  display: flex;
  flex-direction: row;
  
  margin-top: 100px;
  margin-bottom: 100px;
}

.second_column{
  margin-left: 100px;
  display: flex;
  flex-direction: column;
}

.second_column > p{
  font-size: 43px;
  font-weight: bold;
  color: white;
}

.paragraphs {
  display:flex;
  flex-direction: row;
  color: white;
  margin-top: 50px;
}

.paragraph:first-of-type{
  margin-right: 100px;

}

.paragraph{
  width: 50%;
}

.signature{
 margin-top: 40px;
}

.third_page{
  background-color: white;
  padding-top: 100px;
  text-align: center;
  padding-bottom: 100px;
}

.third_page > p{
  font-size: 20px;
}

.products{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 100px;
}

.products img{
  height: 350px;
}

.product{
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  text-align: start;
  align-items: center;
}

.descriere_produse{
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  width: 300px;
  
}

.descriere_produse_mobile{
  display: flex;
  flex-direction: column;
  
  width: 250px;
  
}

.product_title{
  margin-top: 15px;
  font-weight: bold;
  font-size: 20px;
}

.desc{
  margin-top: 15px;
  font-size: 14px;
  font-weight: 900;
}

.desc_mobile{
  margin-top: 15px;
  font-size: 13px !important;
  font-weight: 900;
}


.pack{
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: start;
}

.price{
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 75px;
  margin-right: 75px;
}

.price p{
  font-size: 28px;
  margin-top: 15px;
}

.produse_poza{
  width: 100%;
}

.bold{
  font-weight: 900;
}

.command_button{
  width: 80%;
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  background-color: #ffdf91;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
}

.command_button p{
  font-size: 16px;
  margin-top: 0;
}

.elemente{
  margin-top: 75px;
  display: flex;
  flex-direction: column;
}

.elemente p{
  margin-bottom: 15px;
  opacity: 0.4;
}

.image_centered{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 200px;
  margin-bottom: 150px;
}

.image_container{
  position: relative;
}

.teacup{
  position: absolute;
  right: -30%;
  bottom: -20%;
}

.white_text{
  width: 350px;
  height: 130px;
  margin-top: -120px;
  background-color: white;
  padding: 50px;
  position: relative;
  font-weight: 300;
  font-size: 17px;
}

.ghilimele{
  position: absolute;
  top: -50px;
  left: -50px;
}

.contact_page{
  position: relative;
  padding-bottom: 200px;
}

.mintcopy{
  position: absolute;
  top: -200px;
  left: 0;
  width: 100%;
  z-index: -1;
}

.center_element{
  width: 100%;
  display: flex;
  justify-content: center;
}

.contact_us{
  padding: 100px 150px 100px 150px;
  background-color: white;
  text-align: center;
  width: 600px;

}

.contact_us > p{
  font-weight: bold;
  font-size: 45px;
  
}

.form{
  width: 100%;
  margin-top: 50px;

}

.first_line{
  display: flex;
  flex-direction: row;
  width:100%;
}

.name_input{
  width: 50%;
  margin-right: 2%;
  height: 40px;
  padding-left: 15px;
  font-size: 17px;
}

.mail_input{
  width: 50%;
  height: 40px;
  padding-left: 15px;
  font-size: 17px;
}

.mesaj_input{
  padding-left: 15px;
  padding-top: 15px;
  font-size: 17px;
  width: calc(100% - 15px);
  height: 100px;
  margin-top: 10px;
  resize: none;
}

.sendmessage{
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
}


.vm--modal{
  height: 800px !important;
  width: 1200px !important;
  top: calc(50% - 350px) !important;
  left: calc(50% - 600px) !important;
}

@media (max-width: 900px) {
  .vm--modal{
  height: 95vh !important;
  width: 90vw !important;
  top: 2vh !important;
  left: 5vw !important;
  }
}

.first_page_mobile{
  
  display: flex;
  flex-direction: column;

  align-items: center;
  overflow-x: hidden;
}

.logo_mobile{
  width: 100px;
  margin-top: 25px;
}


.visual_mobile{
  margin-top: -20px;
  width: 130vw;
  
  z-index: -101;
  margin-bottom: 30px;
}

.main_title_mobile{
  color: white;
  font-size: 25px;
  text-align: center;

}

.button_mobile{
    width: 160px;
    height: 35px;
    font-size: 12px;
    border: 1px solid #94f08d;
}

.leaves_mobile{
  width: 80vw;
  z-index: -100;
  margin-top: -50px;
}

.ingrediente_mobile{
  width: 100%;
  height: 100%;
  margin-top: -80px;
}

.recomandare_titlu_mobil{
  font-size: 20px;
  font-weight: 900;
  color: white;
  margin-top: 20px;
  margin-bottom: 30px;
}

.recomandare_mobil{
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}

.sonia_mobil{
  width: 80%;
  margin-bottom: 20px;
}

.paragraf_mobil{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 80%;
  text-align: center;
  font-size: 14px;
}

.signature_mobil{
  margin-top: 20px;
  width: 70%;
  margin-bottom: 50px;
}

.products_mobile{
  width: 100%;
  background-color: white;
  text-align: center;
  font-size: 13px;
  padding-bottom: 50px;
  
}

.cutie-mobile{
  height: 200px;
  margin-top: 30px;
}

.price_mobile{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 20px;
}

.price_mobile > p{
  margin-bottom: 5px;
}

.row_mobile{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
}

.command_button_mobile{
  width: 120px;
  padding-left: 10px;
  padding-right: 10px;
  height: 35px;
  background-color: #ffdf91;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 900;
}

.product_mobile{
  margin-top: 25px;
}

.product_image{
  height: 300px;
}

.produse{
  width: 100vw;
  z-index: -150;
  margin-top: 50px;
}

.white_text_mobile{
  width: 250px;
  height: 90px;
  background-color: white;
  padding: 20px;
  position: relative;
  font-weight: 500;
  font-size: 12px;
  
  margin-top: -25px;
  margin-bottom: 50px;
  text-align: center;
}

.ghilimele_mobile{
  position: absolute;
  top: -15px;
  left: -15px;
  height: 30px;
}

.products_mobile_row{
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: space-around;
  align-items: center;
}

.products_mobile_row p{
  font-size: 17px;
  margin-top: 10px;

}

.product_image_mobile{
  height: 290px;
}

.footer_mobile{
  width: 100%;
  height: 180px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 12px;
}

.footer_mobile p{
  margin: 0;
}

.footer_mobile .icon{
  height: 18px;
  margin-right: 10px;
}

.footer_div{
  color: white;
  width: 120px;
  font-size: 10px;
  font-weight: 400;
  margin-left: 50px;
}

.second_element_mobile p{
  font-size: 10px;
  margin-top: 10px;
}

.second_element_mobile{
  display:flex;
    flex-direction: column;
    font-weight: bold;
    color: white;
    margin-top: 25px;
}
</style>
