<template>
  <div class="modal_wrapper" v-if="$resize && $mq.above(992)">
    <p class="taxa_livrare">*taxa de livrare: 20lei</p>
    <div class="first_line_modal">
      <img src="@/assets/cutie.png" alt="cutie" class="cutie" />
      <p class="first_line_title">CONTINUT:</p>
      <div class="continut">
        <p class="gratuita">IMMUNITY TONIC (1 sticla 250ml.)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check" />
      </div>
      <div class="continut">
        <p class="gratuita">IMMUNITY POWER (2 sticle a cate 250ml. fiecare)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check" />
      </div>
      <div class="continut">
        <p class="gratuita">IMMUNITY HELP (3 sticle a cate 250ml. fiecare)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check" />
      </div>
      <div class="continut">
        <p class="gratuita">IMMUNITY FORTE (2 cutii a cate 120gr. fiecare)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check" />
      </div>
    </div>

    <div class="product_details">
      <p class="modal_title">IMMUNITY BY SON-SLIM</p>
      <p class="pret"><b>399</b> RON*</p>
      <p class="descriere">
        Pachetul IMMUNITY by SonSlim este alcatuit dintr-un ansamblu de 4 tipuri
        de <br />
        produse din plante medicinale, 100% natural, care impreuna creeaza o
        sinergie <br />
        extrem de benefica organismului si contribuie eficient la imbunatatirea
        <br />
        calitatii vietii, respectiv intarirea sistemului imunitar.
      </p>

      <div class="underline"></div>

      <div class="vertical_line">
        <div class="orizontal_line">
          <div class="cantitate">
            <p>CANTITATE</p>
            <input type="number" :value="cantitate" class="cantitate_patrat" />
            <div class="plus">
              <p @click="decrement">-</p>
              <p @click="increment">+</p>
            </div>
          </div>
          <p class="metoda">METODA DE PLATA:</p>
          <div class="metoda_div">
            <div>
              <div
                class="alegere"
                :class="plata == 'card' ? 'active' : ''"
                @click="plata_switch('card')"
              >
                <img src="@/assets/card.png" alt="" class="card_icon" />
              </div>
              <p>CARD</p>
            </div>
            <div>
              <div
                class="alegere"
                :class="plata == 'numerar' ? 'active' : ''"
                @click="plata_switch('numerar')"
              >
                <img src="@/assets/money.png" alt="" class="card_icon" />
              </div>
              <p>CASH</p>
            </div>
          </div>
        </div>
        <div class="orizontal_line_two">
         <div v-if="continua == false" class="adresa_livrare">
           <p class="title">INFORMATII</p>
           <input type="text" placeholder="Nume" class="input_nr" v-model="nume"/>
           <input type="text" placeholder="Prenume" class="input_nr" v-model="prenume"/>
           <input type="mail" placeholder="E-mail" class="input_nr" v-model="mail"/>
           <input type="number" placeholder="Nr. de telefon" class="input_nr" v-model="nrtel"/>
           <p class="error">{{error}}</p>
            <button class="command_button_modal" @click="change_continua">
            CONTINUA
          </button>
         </div>
         <div class="adresa_livrare" v-else>
            <p class="title">ADRESA DE LIVRARE</p>
            <div class="inputs_line">
              <input type="text" placeholder="oras" class="input" v-model="oras" />
              <input type="text" placeholder="strada" class="input" v-model="strada"/>
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="bloc" class="input" v-model="bloc"/>
              <input type="text" placeholder="scara" class="input" v-model="scara"/>
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="etaj" class="input" v-model="etaj"/>
              <input type="text" placeholder="apartament" class="input" v-model="apartament"/>
            </div>
            <textarea
              placeholder="detalii aditionale"
              class="area_text"
              v-model="detalii"
            ></textarea>
            <button class="command_button_modal" @click="cumpara">
            CUMPARA ACUM
          </button>
          </div>
          
        </div>
      </div>
    </div>
    <p class="close_modal" @click="hide_modal">X</p>
  </div>
  <div v-else class="modal_wrapper_mobile">
    <p class="taxa_livrare">*taxa de livrare: 20lei</p>
    <div class="modal_title_mobile">
      <img src="@/assets/cutie.png" alt="cutie" class="cutie_mobile" />
      <div class="product_details_mobile">
        <p class="modal_title">IMMUNITY <br>BY SON-SLIM</p>
        <p class="pret"><b>399</b> RON*</p>
      </div>
    </div>
   
    <div class="orizontal_line_mobile">
          <div class="cantitate_mobile">
            <p>CANTITATE</p>
            <input type="number" :value="cantitate" class="cantitate_patrat_mobile" />
            <div class="plus">
              <p @click="decrement" class="plus_mobile">-</p>
              <p @click="increment" class="plus_mobile">+</p>
            </div>
          </div>
          <div class="metoda_mobile_div">

            
            <p class="metoda_mobile">METODA DE PLATA:</p>
            <div class="metoda_div_mobile">
              <div>
                <div
                  class="alegere_mobil"
                  :class="plata == 'card' ? 'active' : ''"
                  @click="plata_switch('card')"
                >
                  <img src="@/assets/card.png" alt="" class="card_icon_mobil" />
                </div>
                <p class="card_mobile">CARD</p>
              </div>
              <div>
                <div
                  class="alegere_mobil"
                  :class="plata == 'numerar' ? 'active' : ''"
                  @click="plata_switch('numerar')"
                >
                  <img src="@/assets/money.png" alt="" class="card_icon_mobil" />
                </div>
                <p class="card_mobile">CASH</p>
              </div>
            </div>
          </div>
        </div>
        <div class="orizontal_line_two_mobile">
          <div class="adresa_livrare_mobil" v-if="continua == false">
            <p class="title_mobile">INFORMATII</p>
            <input type="text" placeholder="Nume" class="input_mobile_nr" v-model="nume"/>
            <input type="text" placeholder="Prenume" class="input_mobile_nr" v-model="prenume"/>
            <input type="mail" placeholder="E-mail" class="input_mobile_nr" v-model="mail"/>
            <input type="number" placeholder="Nr. de telefon" class="input_mobile_nr" v-model="nrtel"/>
            <p class="error">{{error}}</p>
            <button class="command_button_modal_mobile" @click="change_continua">
            CONTINUA
            </button>
          </div>
          <div class="adresa_livrare_mobil" v-if="continua == true">
            <p class="title_mobile">ADRESA DE LIVRARE</p>
            <div class="inputs_line">
              <input type="text" placeholder="oras" class="input_mobile" v-model="oras" />
              <input type="text" placeholder="strada" class="input_mobile" v-model="strada" />
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="bloc" class="input_mobile" v-model="bloc"/>
              <input type="text" placeholder="scara" class="input_mobile" v-model="scara"/>
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="etaj" class="input_mobile" v-model="etaj"/>
              <input type="text" placeholder="apartament" class="input_mobile" v-model="apartament"/>
            </div>
             
            <textarea
              placeholder="detalii aditionale"
              class="area_text_mobile"
              v-model="detalii"
            ></textarea>
            <button class="command_button_modal_mobile" @click="cumpara">
            CUMPARA ACUM
            </button>
          </div>
          
          
        </div>
      <p class="close_modal" @click="hide_modal">X</p>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ModalComponent",
  data() {
    return {
      cantitate: 1,
      plata: "card",
      oras: "",
      strada: "",
      bloc: "",
      apartament: "",
      scara: "",
      etaj: "",
      detalii: "",
      nrtel: "",
      nume: "",
      prenume: "",
      mail: "",
      continua: false,
      error: ""
    };
  },
  methods: {
    increment() {
      this.cantitate++;
    },
    decrement() {
      if (this.cantitate > 1) {
        this.cantitate--;
      }
    },
    change_continua(){
      if(this.nume == "" || this.prenume == "" || this.nrtel == "" || this.mail == "")
        this.error = "Toate campurile sunt obligatorii"
      else
        this.continua = true;
    },
    hide_modal(){
      this.$modal.hide('order_modal');
    },
    plata_switch(value) {
      if (this.plata == "numerar" && value == "card") {
        this.plata = "card";
      } else if (value == "numerar") {
        this.plata = "numerar";
      }
    },
    checkout() {
      localStorage.setItem('nrtel', this.nrtel);
      localStorage.setItem('oras', this.oras);
      localStorage.setItem('strada', this.strada);
      localStorage.setItem('bloc', this.bloc);
      localStorage.setItem('apartament', this.apartament);
      localStorage.setItem('scara', this.scara);
      localStorage.setItem('etaj', this.etaj);
      localStorage.setItem('nume', this.nume);
      localStorage.setItem('prenume', this.prenume);
      localStorage.setItem('mail', this.mail);
      localStorage.setItem('detalii', this.detalii);
      const stripe = window.Stripe(
        "pk_live_51HtsBwDXwGLIBBjpKUhddM5rAq7DjJrWq2BoIhRJtBwBBkilPcGBil6Qt3ADTdlT06LSaP66ThMIzZXXyINfmRRL00fXTzwv7M"
      );
      stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: "price_1HuJNuDXwGLIBBjpC9TI5lJD", // Replace with the ID of your price
              quantity: this.cantitate,
            },
            {
              price:"price_1HuJOeDXwGLIBBjpFGVlYDhE",
              quantity: 1
            }
          ],
          mode: "payment",
          successUrl: "http://www.immunitybysonslim.com/successa",
          cancelUrl: "http://www.immunitybysonslim.com",
          
        })
        .then(function(result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
          console.log(result);
        });
    },
    cumpara() {
      console.log(this.plata)
      if (this.plata == "card") {
        this.checkout();
      } else {
        this.send_cash_mail();
      }
    },
    send_cash_mail() {
      var templateParams = {
        oras: this.oras,
        strada: this.strada,
        bloc: this.bloc,
        scara: this.scara,
        apartament: this.apartament,
        etaj: this.etaj,
        detalii: this.detalii,
        nrtel: this.nrtel,
        nume: this.nume,
        prenume: this.prenume,
        mail: this.mail
      };
      var newthis = this;
      emailjs.send("service_fjyef0t", "template_wk0vumu", templateParams).then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
          newthis.$router.push({name: 'Successb'})
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
      
    },
  },
  mounted() {
     localStorage.setItem('nrtel', '0721123123');
  },
};
</script>

<style>
.modal_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 50px;
}

.modal_wrapper .cutie {
  height: 250px;
  margin-top: 150px;
  margin-bottom: 30px;
}

.product_details {
  margin-left: 100px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}

.modal_title {
  font-size: 40px;
  font-weight: 900;
}

.command_button_modal {
  width: 344px;
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  background-color: #ffdf91;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-top: 25px;
}

.underline {
  height: 3.4px;
  width: 100px;
  background-color: black;
  margin-top: 15px;
}

.descriere {
  margin-top: 20px;
  font-size: 16px;
}

.pret {
  font-size: 40px;
}

.vertical_line {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}

.orizontal_line {
  display: flex;
  flex-direction: column;
}

.orizontal_line_two {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
}

.orizontal_line_two .title {
  font-size: 23px;
  font-weight: 900;
}

.cantitate_patrat {
  width: 70px;
  height: 60px;
  text-align: center;
  font-size: 25px;
}

.first_line_title {
  font-size: 23px;
  font-weight: 900;
  margin-bottom: 25px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.cantitate p {
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: 900;
}

.card_icon {
  height: 40px;
}

.plus {
  display: flex;
  flex-direction: row;
}

.plus p:first-of-type {
  margin-left: 15px;
}

.plus p:last-of-type {
  margin-left: 15px;
}

.checkmark {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.continut {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.first_line_modal {
  display: flex;
  flex-direction: column;
}

.check {
  height: 18px;
  margin-left: 8px;
  margin-top: 5px;
}

.plus p {
  font-size: 30px;
  cursor: pointer;
}

.metoda {
  font-size: 23px;
  font-weight: 900;
}

.metoda_div {
  display: flex;
  flex-direction: row;

  margin-top: 20px;
}

.alegere {
  width: 80px;
  height: 60px;
  border: 1px solid black;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  background-color: #94f08d;
}

.metoda_div p {
  margin-left: 20px;
  margin-top: 5px;
}

.inputs_line {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}

.input {
  width: 150px;
  height: 30px;
  padding-left: 10px;
  margin-right: 15px;
  font-size: 16px;
  outline: none;
}

.input_nr {
  width: 150px;
  height: 30px;
  padding-left: 10px;
  margin-right: 15px;
  font-size: 16px;
  outline: none;
  margin-top: 15px;
}

.area_text {
  width: 332px;
  height: 100px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 15px;
  resize: none;
}

.gratuita {
  font-size: 14px;
  margin-top: 5px;
}

.modal_wrapper_mobile{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cutie_mobile{
  height: 100px;
  margin-right: 20px;
}

.modal_title_mobile{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items:center;
}

.product_details_mobile {
  display: flex;
  flex-direction: column;
  font-size: 15px;
}

.product_details_mobile p{
  font-size: 15px;
}

.product_details_mobile p:last-of-type{
  font-size: 20px;
  margin-top: 5px;
}

.descriere_mobile{
  font-size: 10px;
}

.first_line_title_mobile{
  font-size: 16px;
  font-weight: 900;
  margin-top: 15px;
}

.gratuita_mobile{
  font-size: 10px;
}

.check_mobile{
  height: 12px;
  margin-left: 5px;
  margin-top: 5px;
}

.orizontal_line_mobile{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;

}

.cantitate_mobile p {
  font-size: 14px;
  font-weight: 900;
}

.cantitate_patrat_mobile{
  width: 60px;
  height: 40px;
  text-align: center;
  font-size: 25px;
  margin-top: 10px;
}

.alegere_mobil {
    width: 60px;
    height: 40px;
    border: 1px solid black;
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.metoda_mobile{
  font-size: 14px;
  font-weight: 900;
}

.metoda_div_mobile{
  display: flex;
  flex-direction: row;

  margin-top: 10px;
}

.plus_mobile{
  font-size: 25px !important;
}

.plus_mobile:first-of-type{
  margin-left: 20px;
}

.adresa_livrare_mobil{
  display: flex;
  flex-direction: column;
  align-items: center;
}


.command_button_modal_mobile {
    width: 250px;
    padding-left: 15px;
    padding-right: 15px;
    height: 40px;
    background-color: #ffdf91;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-top: 25px;
}

.orizontal_line_two_mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input_mobile {
  width: 100px;
  height: 25px;
  padding-left: 10px;
  margin-right: 15px;
  font-size: 16px;
  outline: none;
  margin-left: 10px;
}

.input_mobile_nr {
  width: 238px;
  height: 25px;
  padding-left: 10px;
  font-size: 16px;
  outline: none;
  margin-top: 15px;
  
}

.area_text_mobile {
  width: 240px;
  height: 40px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 15px;
  resize: none;
}

.taxa_livrare{
  position: absolute;
  bottom:0;
  left: 20px;
  font-size: 14px;
}

.card_icon_mobil {
    height: 28px;
}

.card_mobile{
  margin-left: 10px;
  font-size: 13px;
}

.title_mobile{
  font-size: 14px;
  font-weight: 900;
}

.close_modal{
  position: absolute;
  right: 15px;
  top: 5px;
  font-weight: 900;
  font-size: 25px;
  cursor: pointer;
}

.error{
  color: red;
  font-size: 12px;
  margin-top: 10px;
}

</style>
