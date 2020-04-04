<template>
  <div>
    <h3>{{ experience.company }}</h3>
    <h6>{{ experience.position }}, {{ experience.period }}</h6>
    <ul>
      <li v-for="task in experience.tasks" :key="task"><span class="fa-li"><i class="fas fa-check-square"></i></span>{{ task }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ExperienceCard",
    props: ["experience"]
  }
</script>
