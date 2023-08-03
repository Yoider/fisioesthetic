<template>
    <div class="text-center">
        <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="Btn" icon large dark v-bind="attrs"
          v-on="on"><v-icon dark>mdi-whatsapp</v-icon></v-btn>
        </template>
        <v-card elevation="15">
      <v-form
        ref="form"
        action="https://formsubmit.co/info@fisioestheticsevilla.com"
        method="POST"
      >
        <v-row class="justify-center align-center">
          <v-col cols="12" class="d-flex justify-center align-center">
            <v-card-title class="mt-10">
              <p
                class="Title text-center"
                style="
                  text-transform: uppercase;
                  font-size: 35px;
                  font-weight: 300;
                  word-break: normal;
                "
              >
                Ingresa tus datos y contectaremos contigo
              </p>
            </v-card-title>
          </v-col>

          <v-col cols="10">
            <v-text-field
              v-model="inputData.name"
              :rules="rules.name"
              label="Nombre Completo"
              prepend-inner-icon="mdi-account"
              color="pink"
              name="Nombre"
              outlined
              rounded
            />
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="inputData.phone"
              :rules="rules.phone"
              label="Número Movil"
              prepend-inner-icon="mdi-phone"
              color="pink"
              outlined
              name="Telefono"
              rounded
            />
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="inputData.mail"
              :rules="rules.email"
              label="Email"
              prepend-inner-icon="mdi-email"
              color="pink"
              outlined
              name="Email"
              rounded
            />
          </v-col>
          <!-- <v-col cols="10">
            <v-textarea
              v-model="inputData.text"
              :rules="rules.text"
              name="Solicitud"
              label="Texto"
              auto-grow
              outlined
              rows="4"
              row-height="30"
            ></v-textarea>
          </v-col> -->
          <v-col cols="12" class="d-flex justify-center align-center mb-3">
            <v-btn
              :disabled="!isFormValid"
              type="hidden"
              name="_next"
              value="https://fisioestheticsevilla.com"
              rounded
              color="pink"
              x-large
              dark
              @click="dialog = false, Alert()"
            >
              Enviar
            </v-btn>
            <input type="hidden" name="_captcha" value="false" />
          </v-col>
          <!-- <input type="submit" value="Enviar" /> -->
        </v-row>
      </v-form>
    </v-card>
    </v-dialog>
    </div>
</template>


<script>
import Swal from "sweetalert2";
export default {
  data: () => ({
    dialog: false,
    rules: {
      name: [(v) => !!v || "Nombre Completo es requerido"],
      email: [
        (v) => !!v || "email es requerido",
        (v) =>
          /.+@.+\..+/.test(v) || "Debe ingresar un correo electrónico válido",
      ],
      phone: [
        (v) => !!v || "Número movil es requerido",
        (v) => /^\d+$/.test(v) || "El número debe contener solo dígitos",
        (v) => (v && v.length === 9) || "El número debe contener 9 digitos",
        (v) => /^[69]/.test(v) || "El número debe empezar por 6 o 9",
      ],
      text: [(v) => !!v || "por favor redacta tu pregunta"],
    },
    inputData: {
      name: "",
      phone: 0,
      mail: "",
      text: "",
    },
  }),
  computed: {
    Alert() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu mensaje ha sido enviado. contactaremos contigo",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    isFormValid() {
      return (
        this.inputData.name &&
        this.inputData.phone &&
        /^\d+$/.test(this.inputData.phone) &&
        /^[69]/.test(this.inputData.phone) &&
        this.inputData.mail &&
        /.+@.+\..+/.test(this.inputData.mail)
      );
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.Btn {
    bottom: 70px;
    right: 20px;
    position: fixed;
    z-index: 9999;
    text-decoration: none;
  width: 50px;
  height: 50px;
  background: #007b0c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 5px 0px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
} 
</style>