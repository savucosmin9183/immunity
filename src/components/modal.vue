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
          <div class="adresa_livrare" v-if="plata == 'numerar'">
            <p class="title">ADRESA DE LIVRARE</p>
            <div class="inputs_line">
              <input type="text" placeholder="oras" class="input" />
              <input type="text" placeholder="strada" class="input" />
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="bloc" class="input" />
              <input type="text" placeholder="scara" class="input" />
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="etaj" class="input" />
              <input type="text" placeholder="apartament" class="input" />
            </div>
            <textarea
              placeholder="detalii aditionale"
              class="area_text"
            ></textarea>
          </div>
          <button class="command_button_modal" @click="checkout">
            CUMPARA ACUM
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="modal_wrapper_mobile">
    <p class="taxa_livrare">*taxa de livrare: 20lei</p>
    <div class="modal_title_mobile">
      <img src="@/assets/cutie.png" alt="cutie" class="cutie_mobile" />
      <div class="product_details_mobile">
        <p class="modal_title">IMMUNITY BY SON-SLIM</p>
        <p class="pret"><b>399</b> RON*</p>
      </div>
    </div>
   <div class="first_line_modal">
     
      <p class="first_line_title_mobile">CONTINUT:</p>
      <div class="continut">
        <p class="gratuita_mobile">IMMUNITY TONIC (1 sticla 250ml.)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check_mobile" />
      </div>
      <div class="continut">
        <p class="gratuita_mobile">IMMUNITY POWER (2 sticle a cate 250ml. fiecare)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check_mobile" />
      </div>
      <div class="continut">
        <p class="gratuita_mobile">IMMUNITY HELP (3 sticle a cate 250ml. fiecare)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check_mobile" />
      </div>
      <div class="continut">
        <p class="gratuita_mobile">IMMUNITY FORTE (2 cutii a cate 120gr. fiecare)</p>
        <img src="@/assets/check-mark.png" alt="checkmark" class="check_mobile" />
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
        </div>
        <div class="orizontal_line_two_mobile">
          <div class="adresa_livrare" v-if="plata == 'numerar'">
            <p class="title_mobile">ADRESA DE LIVRARE</p>
            <div class="inputs_line">
              <input type="text" placeholder="oras" class="input_mobile" />
              <input type="text" placeholder="strada" class="input_mobile" />
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="bloc" class="input_mobile" />
              <input type="text" placeholder="scara" class="input_mobile" />
            </div>
            <div class="inputs_line">
              <input type="text" placeholder="etaj" class="input_mobile" />
              <input type="text" placeholder="apartament" class="input_mobile" />
            </div>
            <textarea
              placeholder="detalii aditionale"
              class="area_text_mobile"
            ></textarea>
          </div>
          <button class="command_button_modal_mobile" @click="checkout">
            CUMPARA ACUM
          </button>
        </div>
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
    plata_switch(value) {
      if (this.plata == "numerar" && value == "card") {
        this.plata = "card";
      } else if (value == "numerar") {
        this.plata = "numerar";
      }
    },
    checkout() {
      const stripe = window.Stripe(
        "pk_test_51Hriy0FkOuIHMOmbDvbPlDrbJVJnE9SAhCICodVnDz8SgmZvaBWXQx6pdPTWAQbbTjqvBx7VkavDiwzsiHoK4E0300CMM7VA0B"
      );
      stripe
        .redirectToCheckout({
          lineItems: [
            {
              price: "price_1HrjiyFkOuIHMOmbCc33IQ6g", // Replace with the ID of your price
              quantity: this.cantitate,
            },
            {
                price: "price_1HuD6SFkOuIHMOmbHDprOyAU",
                quantity: 1,
            }
          ],
          mode: "payment",
          successUrl: "https://example.com/success",
          cancelUrl: "https://example.com/cancel",
          shippingAddressCollection: {
            allowedCountries: ["RO"],
          },
        })
        .then(function(result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
          console.log(result);
        });
    },
    cumpara() {
      if (this.plata == "card") {
        //this.send_card_mail();
        this.checkout();
      } else {
        this.send_cash_mail();
      }
    },
    send_card_mail() {
      var templateParams = {

      };

      emailjs.send("service_fjyef0t", "template_xr5r809", templateParams).then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
    },
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
  width: 80px;
  height: 60px;
  text-align: center;
  font-size: 25px;
  margin-top: 10px;
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


.command_button_modal_mobile{
    width: 50vw;
    padding-left: 15px;
    padding-right: 15px;
    height: 50px;
    background-color: #ffdf91;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin-top: 25px;
}

.orizontal_line_two_mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input_mobile {
  width: 150px;
  height: 25px;
  padding-left: 10px;
  margin-right: 15px;
  font-size: 16px;
  outline: none;
}

.area_text_mobile {
  width: 332px;
  height: 30px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 15px;
  resize: none;
}

.taxa_livrare{
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 14px;
}
</style>
