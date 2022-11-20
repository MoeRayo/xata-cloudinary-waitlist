<template>
  <div class="flex-l flex-row-l justify-center justify-between-l">
    <TheCloudinaryBackground />
    <TheWaitlistForm />
  </div>
</template>

<script>
import TheCloudinaryBackground from "@/components/TheCloudinaryBackground.vue";
import TheWaitlistForm from "@/components/TheWaitlistForm.vue";

export default {
  components: {
    TheCloudinaryBackground,
    TheWaitlistForm
  }
}
</script>