<template>
  <section class="bg-org-50/50 w-full border-t-2 border-amber-500 py-2">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-3 rounded-xl bg-transparent sm:grid-cols-2 lg:grid-cols-6">
        <!-- Title -->
        <div class="text-org-600 flex items-center justify-center gap-3 px-4 py-3 sm:col-span-2 lg:col-span-1">
          <icon name="virus" class="fill-org-400 animate__animated h-7 w-7 sm:h-9 sm:w-9" />
          <h1 class="animate__animated text-base sm:text-lg">Covid Statistics</h1>
        </div>

        <!-- Country -->
        <div class="animate__animated flex min-h-16 flex-col items-center justify-center px-4 py-3 text-center">
          <span class="text-xs font-medium tracking-wide text-slate-500 uppercase">Country</span>
          <span class="mt-1 text-sm text-slate-700">
            {{ covidData.country || "—" }}
          </span>
        </div>

        <!-- Cases -->
        <div class="animate__animated flex min-h-16 flex-col items-center justify-center px-4 py-3 text-center">
          <span class="text-xs font-medium tracking-wide text-slate-500 uppercase">Cases</span>
          <span class="mt-1 text-sm text-slate-700">
            {{ covidData.cases || "..." }}
          </span>
        </div>

        <!-- Recovered -->
        <div class="animate__animated flex min-h-16 flex-col items-center justify-center px-4 py-3 text-center">
          <span class="text-xs font-medium tracking-wide text-slate-500 uppercase">Recovered</span>
          <span class="mt-1 text-sm text-slate-700">
            {{ covidData.recovered || "..." }}
          </span>
        </div>

        <!-- Population -->
        <div class="animate__animated flex min-h-16 flex-col items-center justify-center px-4 py-3 text-center">
          <span class="text-xs font-medium tracking-wide text-slate-500 uppercase">Population</span>
          <span class="mt-1 text-sm text-slate-700">
            {{ covidData.population || "..." }}
          </span>
        </div>

        <!-- Tests -->
        <div class="animate__animated flex min-h-16 flex-col items-center justify-center px-4 py-3 text-center">
          <span class="text-xs font-medium tracking-wide text-slate-500 uppercase">Tests</span>
          <span class="mt-1 text-sm text-slate-700">
            {{ covidData.tests || "..." }}
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
