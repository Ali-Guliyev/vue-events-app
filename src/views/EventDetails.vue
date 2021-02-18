<template>
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
  props: {
    id: String
  },
  data() {
    return {
      event: null,
    }
  },
  created() {
    // fetch event by id and set local data
    EventService.getEventById(this.id)
    .then((res) => {
      this.event = res.data
    })
    .catch((err) => {
      console.log(err)
    });
  }
}
</script>