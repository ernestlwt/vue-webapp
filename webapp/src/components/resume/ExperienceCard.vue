<template>
  <b-row class="py-3">
    <b-col>
      <h3 class="ecard_title">{{ experience.company }}</h3>
      <h6 class="ecard_subtitle py-3">{{ experience.position }}</h6>
      <p class="ecard_desc">{{ experience.description }}</p>
    </b-col>
    <b-col class="text-right" md="3">
      <h6 class="ecard_subtitle py-3">{{ experience.period }}</h6>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: "ExperienceCard",
    props: ["experience"]
  }
</script>

<style lang="scss" scoped>

.ecard_title {
  color: #595959;
}

.ecard_subtitle {
  color: #999999;
}

.ecard_desc {
  color: #595959;
}

</style>
