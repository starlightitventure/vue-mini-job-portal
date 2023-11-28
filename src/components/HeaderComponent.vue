<script>
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue';
import { candidateStore } from '@/store/store.js'
import { route } from "@/router/route";

export default {
  setup() {
    const currentRoute = useRoute();
    let activeRoute = ref(currentRoute.path);

    watch(
      () => currentRoute.path,
      async (currentPath) => {
        activeRoute.value = currentPath;
      }
    );

    return {
      activeRoute,
      routeList: route,
      candidateStore
    }
  }
}
</script>

<template>
  <div class="nav">
    <div class="nav-content">
      <router-link :to="routeList.home"><span data-testid="nav-heading" class="title cursor-pointer">Job Portal</span></router-link>
      <div class="nav-btns" v-if="activeRoute !== routeList.home">
        <router-link :to="routeList.home" data-testid="nav-home-btn" v-if="activeRoute !== routeList.home"><span class="btn-sec">Home</span></router-link>
        <router-link :to="routeList.register" data-testid="nav-registration-btn" v-if="activeRoute !== routeList.register"><span class="btn-sec">Candidate Registration</span></router-link>
        <router-link :to="routeList.list" data-testid="nav-list-btn" v-if="activeRoute !== routeList.list"><span class="btn-sec">candidate list {{ candidateStore.candidateCount() }}</span></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your styles if needed */
</style>
