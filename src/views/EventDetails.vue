<template>
  <button @click="goBack" class="link">&#60; Go Back</button>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script>
import EventService from "../services/EventService";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    }
  },
  mounted() {
    EventService.getEventById(this.id)
    .then((res) => {
      this.event = res.data
    })
    .catch((err) => {
      console.log(err)
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
button.link {
  font-size: 15px;
}
</style>