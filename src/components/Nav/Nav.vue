<template>
  <div
    class="w-full bg-org-100  py-2   mx-auto grid grid-cols-6 justify-between px-4 md:px-10 border-white relative z-50 transition-all duration-300">
    <!-- MOBILE BURGER BUTTON -->
    <button @click="mobileOpen = !mobileOpen" class="sm:hidden flex items-center h-25 text-org-800 text-3xl font-bold">
      ☰
    </button>

    <!-- DESKTOP NAV text-sm font-semibold text-slate-700 sm:text-base -->
    <div class="md:container w-full col-span-6 justify-center mx-auto hidden sm:block">
      <nav id="menu-main" class=" w-full flex justify-center  ">
        <ul id="nav-main" class="flex justify-center  w-7/8 text-gray-700 font-medium">
          <li class="py-4">
            <router-link
              class="hover:text-org-500 text-center text-xs bg-white border-2 mx-2  border-org-200 py-2  hidden  lg:text-base  px-5 font-semibold  lg:block"
              to="/">HOME</router-link>
          </li>
          <li v-for="(menu, key) in menus" :key="key" class="py-4 relative" @mouseenter="activeMenu = key">
            <router-link
              class="text-center hover:text-org-500 text-xs lg:text-base mx-1  md:mx-2  lg:mx-5  bg-white border-2    border-org-200 py-2 font-semibold px-5 lg:px-5 block"
              :to="menu.url">{{ menu.title }}</router-link>
          </li>
          <li class="py-4">
            <router-link
              class="hover:text-org-500 text-center  mx-2  bg-white border    border-org-200 py-2 text-xs lg:text-base font-semibold  px-5 block"
              to="/contacts">CONTACT</router-link>
          </li>
        </ul>
      </nav>

      <!-- DROPDOWN PANELS -->
      <div v-for="(menu, key) in menus" :key="key" class="w-full absolute top-21 mt-2 left-0 right-0"
        @mouseenter="activeMenu = key" @mouseleave="closeMenus">
        <div v-if="activeMenu === key"
          class="grid grid-cols-3  min-h-60 w-full drop-shadow-md z-30 overflow-hidden animate__animated animate__fadeIn">
          <div
            class="menu-title flex items-center justify-center bg-purp-300/95 border-b-2 border-b-purp-400 text-white">
            <div class="text-center relative">
              <h1 class="text-4xl drop-shadow-md">{{ menu.title }}</h1>
              <span class="bg-org-400 w-10 h-2 block absolute left-1/2 -translate-x-1/2 mt-2"></span>
            </div>
          </div>
          <div class="bg-white/95 px-8 py-5 text-gray-700 border-b-2 border-b-gray-600 flex flex-col justify-center">
            <ul class="animate__animated animate__fadeInDown">
              <li v-for="item in menu.items" :key="item.key" class="mb-2 cursor-pointer block w-full">
                <router-link class="py-1 pl-4 block hover:text-org-600 transition hover:border-l-4 border-transparent"
                  :to="item.url" @mouseover="activeTab = item.key">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="bg-white/95 px-8 py-5 text-left text-gray-700 border-b-2 border-b-gray-600 flex flex-col justify-center">
            <div v-for="item in menu.items" :key="item.key" v-show="activeTab === item.key"
              class="p-3 pointer-events-none animate__animated animate__fadeInDown">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE MENU SLIDE-IN -->
    <transition name="slide">
      <div v-if="mobileOpen"
        class="fixed inset-y-0 left-0 w-64 bg-gray-600 shadow-lg z-50 p-6 sm:hidden overflow-y-auto animate__animated animate__fadeInLeft">
        <button @click="mobileOpen = false"
          class="text-2xl  border border-white py-2 px-4 hover:text-gray-600 text-gray-600 bg-grey-500 hover:bg-white font-bold mb-4">
          ×
        </button>
        <ul class="space-y-4">
          <li>
            <router-link @click="mobileOpen = false" to="/" class=" text-gray-600 block py-2">HOME</router-link>
          </li>

          <!-- MOBILE ACCORDION MENUS -->
          <li v-for="(menu, key) in menus" :key="key" class="border-b pb-2">
            <button @click="toggleMobileDropdown(key)" class="w-full text-gray-600 text-left py-2">
              {{ menu.title }} <span class="px-2">⌄</span>
            </button>
            <ul v-show="mobileDropdown === key" class="pl-4 space-y-2">
              <li v-for="item in menu.items" :key="item.key">
                <router-link @click="mobileOpen = false" :to="item.url" class="block py-1 text-gray-600 text-sm">{{
                  item.label }}</router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link @click="mobileOpen = false" to="/contacts"
              class="text-gray-600 block py-2">CONTACT</router-link>
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
const toggleMobileDropdown = (key) =>
  (mobileDropdown.value = mobileDropdown.value === key ? null : key);
const logo = new URL("@/assets/logo.png", import.meta.url).href;

const menus = {
  about: {
    title: "ABOUT US",
    url: "/about",
    items: [
      {
        label: "Mission",
        key: "1",
        description:
          "To help employers develop, promote and sustain positive health and safety cultures for the wellbeing of employees and other interested parties",
        url: "/about#mission",
      },
      {
        label: "Vision",
        key: "2",
        description:
          "To help employers develop, promote and sustain positive health and safety cultures for the wellbeing of employees and other interested parties",
        url: "/about#vision",
      },
      {
        label: "Values",
        key: "3",
        description:
          "To help employers develop, promote and sustain positive health and safety cultures for the wellbeing of employees and other interested parties",
        url: "/about#values",
      },
    ],
  },

  services: {
    title: "SERVICES",
    url: "/services",
    items: [
      {
        label: "Occupational Health Services",
        key: "1",
        description:
          "Comprehensive occupational health solutions including employee medical exams, disability management, medical surveillance, and vaccinations.",
        url: "/service/occupational-health",
      },
      {
        label: "Safety Management Systems",
        key: "2",
        description:
          "Services supporting effective safety management such as audits and ergonomic assessments.",
        url: "/service/sms",
      },
      {
        label: "Wellness Consultancy",
        key: "3",
        description:
          "Wellness solutions including Employee Assistance Programs and counselling services.",
        url: "/service/wellness",
      },
      {
        label: "Pandemic Response",
        key: "4",
        description:
          "Guidance and implementation support for pandemic readiness, response, and workplace continuity.",
        url: "/service/pandemic-response",
      },
      {
        label: "Employee Medical Examinations",
        key: "5",
        description:
          "Comprehensive medical assessments to evaluate employee health, fitness for work, and compliance with occupational health requirements.",
        url: "/service/eme",
      },
      {
        label: "Disability Management",
        key: "6",
        description:
          "Structured support programs to assist employees with injuries or illnesses, promoting recovery, return-to-work, and long-term wellbeing.",
        url: "/service/dm",
      },
      {
        label: "Medical Surveillance",
        key: "7",
        description:
          "Ongoing monitoring of employee health to detect and prevent work-related illnesses and ensure compliance with occupational health regulations.",
        url: "/service/ms",
      },
      {
        label: "Vaccinations",
        key: "8",
        description:
          "Workplace vaccination programs designed to protect employees from preventable diseases and support a healthy, productive workforce.",
        url: "/service/vaccinations",
      },
    ]
  },

  connect: {
    title: "CONNECT",
    url: "/connect",
    items: [
      {
        label: "Webinar",
        key: "1",
        description:
          "Join Wellnique webinars covering safety, health, and wellness topics.",
        url: "/connect/webinar",
      },
      {
        label: "Podcast",
        key: "2",
        description:
          "Listen to Wellnique podcasts featuring insights from experts and practitioners.",
        url: "/connect/podcasts",
      },
      {
        label: "Safety Shop",
        key: "3",
        description:
          "Explore Wellnique’s Safety Shop for equipment, tools, and professional safety essentials.",
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
        description:
          "Partner with Wellnique on health, safety, or wellness programs.",
        url: "/contact#partnership",
      },
      {
        label: "Practitioner",
        key: "3",
        description:
          "Join Wellnique as a practitioner and become part of a network of health and safety professionals.",
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
