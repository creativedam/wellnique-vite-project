<template>
  <div class="relative block h-full w-full pt-20 pb-40 font-sans font-normal">
    <div class="bg-willo-image bg-50 absolute inset-0 mb-auto ml-auto h-2/3 w-1/2 opacity-20"></div>
    <div class="relative container mx-auto px-5">
      <div class="grid gap-x-4 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <scope-card-component v-for="service in services" :key="service.name" :title="service.name" :body="service.body || ''" :image="service.image || defaultImage" :icon="service.icon || defaultIcon" :link="service.link || buildServiceLink(service.name)" />
      </div>
      <div v-if="!loading && services.length === 0" class="py-8 text-center text-gray-500"></div>
    </div>
  </div>
</template>
<script>
import ScopeCardComponent from "./ScopeCardComponent.vue";
export default {
  name: "ScopeCard",
  components: {
    ScopeCardComponent,
  },
  data() {
    return {
      services: [],
      loading: false,
      error: null,
      controller: null,
      defaultImage: "bg-service1-image",
      defaultIcon: "bg-medical-icon",
      apiUrl: import.meta.env.VITE_API_BASE_URL + "/api/services",
    };
  },
  mounted() {
    this.fetchServices();
  },
  beforeUnmount() {
    if (this.controller) {
      this.controller.abort();
    }
  },
  methods: {
    async fetchServices() {
      this.loading = true;
      this.error = null;
      this.controller = new AbortController();

      try {
        const response = await fetch(this.apiUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          signal: this.controller.signal,
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid API response format");
        }

        this.services = data.map((item) => ({
          name: item.name || "",
          body: item.body || "",
          image: item.image || this.defaultImage,
          icon: item.icon || this.defaultIcon,
          link: item.link || this.buildServiceLink(item.name || ""),
        }));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch services:", err);
          this.error = err;
          this.services = [];
        }
      } finally {
        this.loading = false;
      }
    },

    buildServiceLink(name) {
      if (!name) return "/services";

      const slug = name
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      return `/services/${slug}`;
    },
  },
};
</script>