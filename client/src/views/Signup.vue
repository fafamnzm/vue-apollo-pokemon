<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>SignUp</h1>
        <v-form ref="signupForm" v-model="formValidation">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            type="email"
            placeholder="example@example.com"
            required
          ></v-text-field>
          <v-autocomplete
            label="Browser"
            :items="autoCompleteComponents"
          ></v-autocomplete>
          <v-file-input label="Documents"></v-file-input>
          <v-text-field
            readonly="true"
            label="Date of birth"
            v-model="birthday"
          ></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-checkbox
            label="Agree to terms and conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermRules"
            required
          ></v-checkbox>
          <v-btn
            :disabled="!formValidation"
            class="mr-4"
            type="submit"
            color="primary"
            >Submit</v-btn
          >
          <v-btn class="mr-4" color="warning" @click="resetValidation"
            >Reset Validation</v-btn
          >
          <v-btn class="mr-4" color="error" @click="resetForm">Reset</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      agreeToTerms: false,
      formValidation: false,
      agreeToTermRules: [
        value =>
          !!value || "You must agree to terms and conditions before submiting"
      ],
      emailRules: [
        value => !!value || "Email is required",
        value =>
          (value ? value.indexOf("@") !== 0 : !!value) || "Invalid Email",
        value => (value ? value.indexOf("@") : !!value) || "Invalid Email",
        value =>
          (value ? value.indexOf(".") - value.indexOf("@") > 1 : !!value) ||
          "Invalid Email",
        value =>
          (value ? value.indexOf(".") <= value.length - 3 : !!value) ||
          "Invalid Email"
      ],
      birthday: "",
      autoCompleteComponents: [
        "FireFox",
        "Safari",
        "Chrome",
        "IE",
        "Edge",
        "Opera"
      ]
    }
  },
  methods: {
    resetValidation() {
      this.$refs.signupForm.resetValidation()
    },
    resetForm() {
      this.$refs.signupForm.reset()
    }
  }
}
</script>

<style></style>
