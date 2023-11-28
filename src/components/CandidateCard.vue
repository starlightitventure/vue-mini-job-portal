<script>
export default {
  props: ['candidate'],
}
</script>

<template>
  <div data-testid="profile-card" class="card">
    <h3 class="name">{{candidate.name}}</h3>
    <p><span>Role: </span>{{candidate.role}}</p>
    <p><span>Email: </span><a>{{candidate.email}}</a></p>
    <p><span>Skills: </span></p>
    <div class="skill-list">
      <p class="skilltag">{{candidate.skills[0]}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
