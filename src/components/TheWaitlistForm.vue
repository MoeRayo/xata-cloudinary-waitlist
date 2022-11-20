<template>
  <div class="bg-waitlist vh-100 w-50-ns w-100-m">
    <div class="w-70 center pv6">
      <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
        <span class="lh-copy brown pa1 tracked-tight">
          Joinr.
        </span>
      </h3>
      <h4 class="f5 fw1 lh-copy georgia i mt0">
        Be one of the first to access our service!
      </h4>
      <p></p>
      <form @submit.prevent="submitForm">
        <label for="firstname" class="db mb2 brown b georgia">First Name</label>
        <input type="text" class="db w-80 w-60-m pa2 br2 mb3 ba bw1 b--brown" name="firstname" id="firstname" v-model="firstname" placeholder="First name">

        <label for="lastname" class="db mb2 brown b georgia">Last Name</label>
        <input type="text" class="db w-80 w-60-m pa2 br2 mb3 ba bw1 b--brown" name="lastname" id="lastname" v-model="lastname" placeholder="Last name">

        <label for="email" class="db mb2 brown b georgia">Email</label>
        <input type="email" class="db w-80 w-60-m pa2 br2 mb4 ba bw1 b--brown" name="email" id="email" v-model="email" placeholder="Emaul">

        <div class="w-100">
          <button type="submit" class="f6 ttu tracked black-80 bg-brown pa3 br3 white bb link b--brown hover-white dim bg-animate pointer">Join waitlist</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstname: "",
    lastname: "",
    email: ""
  })
}
</script>
<style>
.bg-waitlist {
  background-color: #FFF0E3;
}

.brown, .b--brown {
  color: #83492B;
  border-color: #A8794E
}
.bg-brown {
  background-color: #83492B;
}
</style>