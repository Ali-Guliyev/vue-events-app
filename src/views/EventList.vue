<template>
  <div class="events">
    <h1 class="title">Events For Good</h1>
    <div v-if="events"> 
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1}}"
        rel="prev"
        v-if="page != 1"
      ><span class="link">&#60; Previous</span></router-link>

      <div class="pages">
        <router-link
          class="router-link"
          v-for="num in totalPages"
          :key="num"
          :to="{ name: 'EventList', query: { page: num }}"
        >
          <p class="link" :class="{ selected: num == page }">
            {{ num }}
          </p>
        </router-link>
      </div>

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1}}"
        rel="next"
        v-if="hasNextPage"
      ><span class="link">Next Page &#62;</span></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "../views/EventCard";
import EventService from "../services/EventService";
import { watchEffect } from "vue"

export default {
  name: "EventList",
  props: ["page"],
  components: {
    EventCard
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
      eventsPerPage: 3,
      totalPages: 0,
    };
  },
  created() {
    watchEffect(() => {
      this.events = null;
      EventService.getEvents(this.eventsPerPage, this.page)
      .then((res) => {
        this.events = res.data;
        this.totalEvents = res.headers["x-total-count"];
        this.totalPages = Math.ceil(this.totalEvents / this.eventsPerPage);
      })
      .catch((err) => {
        console.log(err);
      });
    })
  },
  computed: {
    hasNextPage() {
      return this.page < this.totalPages;
    }
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  align-items: center;
}
.pagination a {
  text-decoration: none;
  color: var(--main-color);
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}

.pages {
  display: flex;
  justify-content: center;
  margin: 10px 5px;
  flex-wrap: wrap;
  max-width: 3000px;
}

.pages p.selected,
.pages p:hover {
  background-color: var(--green);
}

.pages .router-link {
  text-decoration: none;
}

</style>

