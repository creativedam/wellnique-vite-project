<template>
  <div
    class="relative z-50 mx-auto grid w-full grid-cols-6 justify-between border-white bg-white px-4 py-2 transition-all duration-300 md:px-10">
    <!-- MOBILE BURGER BUTTON -->
    <button @click="mobileOpen = !mobileOpen"
      class="text-org-800 flex h-25 items-center text-3xl font-bold sm:hidden">☰</button>

    <!-- DESKTOP NAV text-sm font-semibold text-slate-700 sm:text-base -->
    <div class="col-span-6 mx-auto hidden w-full justify-center sm:block md:container">
      <nav id="menu-main" class="flex w-full justify-center">
        <ul id="nav-main" class="flex w-7/8 justify-center font-medium text-slate-700">
          <li class="py-4">
            <router-link
              class="hover:text-org-400 hidden px-5 py-2 text-center text-sm leading-tight font-semibold drop-shadow-md lg:block lg:text-lg"
              to="/">HOME</router-link>
          </li>
          <li v-for="(menu, key) in menus" :key="key" class="relative my-4" @mouseenter="activeMenu = key">
            <router-link
              class="hover:text-org-400 mx-1 block px-5 py-2 text-center text-sm font-semibold md:mx-2 lg:mx-5 lg:px-5 lg:text-lg"
              :to="menu.url">{{ menu.title }}</router-link>
          </li>
          <li class="my-4">
            <router-link class="hover:text-org-400 mx-2 block px-5 py-2 text-center text-sm font-semibold lg:text-lg"
              to="/contacts">CONTACT</router-link>
          </li>
        </ul>
      </nav>

      <!-- DROPDOWN PANELS -->
      <div v-for="(menu, key) in menus" :key="key" class="absolute top-21 right-0 left-0 mt-2 w-full"
        @mouseenter="activeMenu = key" @mouseleave="closeMenus">
        <div v-if="activeMenu === key"
          class="animate__animated animate__fadeIn z-30 grid min-h-60 w-full grid-cols-3 overflow-hidden drop-shadow-md">
          <div
            class="menu-title bg-grape-300/95 border-b-grape-200 flex items-center justify-center border-b-2 text-white">
            <div class="relative text-center">
              <h1 class="text-4xl drop-shadow-md">{{ menu.title }}</h1>
              <span class="bg-org-400 absolute left-1/2 mt-2 block h-2 w-10 -translate-x-1/2"></span>
            </div>
          </div>
          <div class="flex flex-col justify-center border-b-2 border-b-white bg-white/95 px-8 py-5 text-gray-700">
            <ul class="animate__animated animate__fadeInDown">
              <li v-for="item in menu.items" :key="item.key" class="mb-2 block w-full cursor-pointer">
                <router-link class="hover:text-org-600 block border-transparent py-1 pl-4 transition hover:border-l-4"
                  :to="item.url" @mouseover="activeTab = item.key">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col justify-center border-b-2 border-b-white bg-white/95 px-8 py-5 text-left text-gray-700">
            <div v-for="item in menu.items" :key="item.key" v-show="activeTab === item.key"
              class="animate__animated animate__fadeInDown pointer-events-none p-3">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE MENU SLIDE-IN -->
    <transition name="slide">
      <div v-if="mobileOpen"
        class="animate__animated animate__fadeInLeft fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-gray-600 p-6 shadow-lg sm:hidden">
        <button @click="mobileOpen = false"
          class="bg-grey-500 mb-4 border border-white px-4 py-2 text-2xl font-bold text-gray-600 hover:bg-white hover:text-gray-600">×</button>
        <ul class="space-y-4">
          <li>
            <router-link @click="mobileOpen = false" to="/" class="block py-2 text-gray-600">HOME</router-link>
          </li>

          <!-- MOBILE ACCORDION MENUS -->
          <li v-for="(menu, key) in menus" :key="key" class="border-b pb-2">
            <button @click="toggleMobileDropdown(key)" class="w-full py-2 text-left text-gray-600">
              {{ menu.title }}
              <span class="px-2">⌄</span>
            </button>
            <ul v-show="mobileDropdown === key" class="space-y-2 pl-4">
              <li v-for="item in menu.items" :key="item.key">
                <router-link @click="mobileOpen = false" :to="item.url" class="block py-1 text-sm text-gray-600">{{
                  item.label }}</router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link @click="mobileOpen = false" to="/contacts"
              class="block py-2 text-gray-600">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeMenu = ref(null);
const activeTab = ref(null);
const mobileOpen = ref(false);
const mobileDropdown = ref(null);
const closeMenus = () => {
  activeMenu.value = null;
  activeTab.value = null;
};
const toggleMobileDropdown = (key) => (mobileDropdown.value = mobileDropdown.value === key ? null : key);
const logo = new URL("@/assets/logo.png", import.meta.url).href;

const menus = {
  about: {
    title: "ABOUT US",
    url: "/about",
    items: [
      {
        label: "Mission",
        key: "1",
        description: "To help employers develop, promote and sustain positive health and safety cultures for the wellbeing of employees and other interested parties",
        url: "/about#mission",
      },
      {
        label: "Vision",
        key: "2",
        description: "To help employers develop, promote and sustain positive health and safety cultures for the wellbeing of employees and other interested parties",
        url: "/about#vision",
      },
      {
        label: "Values",
        key: "3",
        description: "To help employers develop, promote and sustain positive health and safety cultures for the wellbeing of employees and other interested parties",
        url: "/about#values",
      },
    ],
  },

  services: {
    title: "SERVICES",
    url: "#",
    items: [
      {
        label: "Occupational Health Services",
        key: "1",
        description: "Comprehensive occupational health solutions including employee medical exams, disability management, medical surveillance, and vaccinations.",
        url: "/services/occupational-health-services",
      },
      {
        label: "Safety Management Systems",
        key: "2",
        description: "Services supporting effective safety management such as audits and ergonomic assessments.",
        url: "/services/safety-management-systems",
      },
      {
        label: "Wellness Consultancy",
        key: "3",
        description: "Wellness solutions including Employee Assistance Programs and counselling services.",
        url: "/services/wellness-consultancy",
      },
      {
        label: "Pandemic Response",
        key: "4",
        description: "Guidance and implementation support for pandemic readiness, response, and workplace continuity.",
        url: "/services/pandemic-response",
      },
      {
        label: "Employee Medical Examinations",
        key: "5",
        description: "Comprehensive medical assessments to evaluate employee health, fitness for work, and compliance with occupational health requirements.",
        url: "/services/employee-medical-examinations",
      },
      {
        label: "Disability Management",
        key: "6",
        description: "Structured support programs to assist employees with injuries or illnesses, promoting recovery, return-to-work, and long-term wellbeing.",
        url: "/services/disability-management",
      },
      {
        label: "Medical Surveillance",
        key: "7",
        description: "Ongoing monitoring of employee health to detect and prevent work-related illnesses and ensure compliance with occupational health regulations.",
        url: "/services/medical-surveillance",
      },
      {
        label: "Vaccinations",
        key: "8",
        description: "Workplace vaccination programs designed to protect employees from preventable diseases and support a healthy, productive workforce.",
        url: "/services/vaccinations",
      },
    ],
  },

  connect: {
    title: "CONNECT",
    url: "/connect",
    items: [
      {
        label: "Webinar",
        key: "1",
        description: "Join Wellnique webinars covering safety, health, and wellness topics.",
        url: "/connect/webinar",
      },
      {
        label: "Podcast",
        key: "2",
        description: "Listen to Wellnique podcasts featuring insights from experts and practitioners.",
        url: "/connect/podcasts",
      },
      {
        label: "Safety Shop",
        key: "3",
        description: "Explore Wellnique’s Safety Shop for equipment, tools, and professional safety essentials.",
        url: "/connect/safety-shop",
      },
    ],
  },

  join: {
    title: "JOIN",
    url: "/get",
    items: [
      {
        label: "Company",
        key: "1",
        description: "Request a company-level engagement or service package.",
        url: "/get",
      },
      {
        label: "Partnership",
        key: "2",
        description: "Partner with Wellnique on health, safety, or wellness programs.",
        url: "/contact#partnership",
      },
      {
        label: "Practitioner",
        key: "3",
        description: "Join Wellnique as a practitioner and become part of a network of health and safety professionals.",
        url: "/contact#practitioner",
      },
    ],
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
