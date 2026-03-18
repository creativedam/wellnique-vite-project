<template>
  <section class="w-full bg-org-50/50 py-4">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-3 rounded-xl bg-transparent sm:grid-cols-2 lg:grid-cols-6">
        <!-- Title -->
        <div
          class="flex items-center justify-center gap-3  bg-white px-4 py-3 text-org-600 sm:col-span-2 lg:col-span-1">
          <icon name="virus" class="h-7 w-7 fill-org-500 sm:h-9 sm:w-9 animate__animated" />
          <h1 class="text-base font-semibold sm:text-lg animate__animated">
            Covid Statistics
          </h1>
        </div>

        <!-- Country -->
        <div
          class="flex min-h-16 flex-col items-center justify-center   bg-white px-4 py-3 text-center animate__animated">
          <span class="text-xs font-medium uppercase tracking-wide text-slate-500">
            Country
          </span>
          <span class="mt-1 text-sm font-semibold text-slate-700 sm:text-base">
            {{ covidData.country || "—" }}
          </span>
        </div>

        <!-- Cases -->
        <div
          class="flex min-h-16 flex-col items-center justify-center   bg-white px-4 py-3 text-center animate__animated">
          <span class="text-xs font-medium uppercase tracking-wide text-slate-500">
            Cases
          </span>
          <span class="mt-1 text-sm font-semibold text-slate-700 sm:text-base">
            {{ covidData.cases || "Loading..." }}
          </span>
        </div>

        <!-- Recovered -->
        <div
          class="flex min-h-16 flex-col items-center justify-center   bg-white px-4 py-3 text-center animate__animated">
          <span class="text-xs font-medium uppercase tracking-wide text-slate-500">
            Recovered
          </span>
          <span class="mt-1 text-sm font-semibold text-slate-700 sm:text-base">
            {{ covidData.recovered || "Loading..." }}
          </span>
        </div>

        <!-- Population -->
        <div
          class="flex min-h-16 flex-col items-center justify-center   bg-white px-4 py-3 text-center animate__animated">
          <span class="text-xs font-medium uppercase tracking-wide text-slate-500">
            Population
          </span>
          <span class="mt-1 text-sm font-semibold text-slate-700 sm:text-base">
            {{ covidData.population || "Loading..." }}
          </span>
        </div>

        <!-- Tests -->
        <div
          class="flex min-h-16 flex-col items-center justify-center   bg-white px-4 py-3 text-center animate__animated">
          <span class="text-xs font-medium uppercase tracking-wide text-slate-500">
            Tests
          </span>
          <span class="mt-1 text-sm font-semibold text-slate-700 sm:text-base">
            {{ covidData.tests || "Loading..." }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import Icon from "./Icon.vue";

export default {
  name: "CovidList",
  components: {
    Icon,
  },
  setup() {
    const covidData = ref({});
    const api = "https://disease.sh/v3/covid-19/countries/bw";

    const getList = async () => {
      try {
        const response = await fetch(api);
        covidData.value = await response.json();
      } catch (error) {
        console.error("Error fetching COVID data:", error);
      }
    };

    onMounted(getList);

    return { covidData };
  },
};
</script>
