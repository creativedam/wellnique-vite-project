<template>
  <div
    class="w-full bg-white mx-auto grid grid-cols-6 font-sans justify-between h-32 sm:h-25 px-4 md:px-10 py-3 border-b border-org-800 relative z-50 transition-all duration-300"
  >
    <!-- MOBILE BURGER BUTTON -->
    <button
      @click="mobileOpen = !mobileOpen"
      class="sm:hidden flex items-center h-25 text-org-800 text-3xl font-bold"
    >
      ☰
    </button>

    <!-- DESKTOP NAV -->
    <div
      class="md:container w-full col-span-6 justify-center mx-auto hidden sm:block"
    >
      <nav
        id="menu-main"
        class="py-4 w-full flex justify-center h-20 font-sans"
      >
        <ul
          id="nav-main"
          class="flex justify-center h-20 w-5/6 text-black font-medium font-sans"
        >
          <li class="py-4 h-20">
            <router-link
              class="hover:text-org-500 text-center text-xs hidden lg:text-base px-3 font-light font-sans lg:block hover:font-bold"
              to="/"
              >HOME</router-link
            >
          </li>
          <li
            v-for="(menu, key) in menus"
            :key="key"
            class="py-4 h-20 relative"
            @mouseenter="activeMenu = key"
          >
            <router-link
              class="text-center hover:text-org-500 text-xs lg:text-base font-sans font-light px-2 lg:px-4 block hover:font-bold"
              :to="menu.url"
              >{{ menu.title }}</router-link
            >
          </li>
          <li class="py-4 h-20">
            <router-link
              class="hover:text-org-500 text-center text-xs lg:text-base font-light font-sans px-3 block hover:font-bold"
              to="/contacts"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </nav>

      <!-- DROPDOWN PANELS -->
      <div
        v-for="(menu, key) in menus"
        :key="key"
        class="w-full absolute top-28 -mt-2 left-0 right-0"
        @mouseenter="activeMenu = key"
        @mouseleave="closeMenus"
      >
        <div
          v-if="activeMenu === key"
          class="grid grid-cols-3 h-75 w-full drop-shadow-md z-30 overflow-hidden animate__animated animate__fadeIn"
        >
          <div
            class="menu-title flex items-center justify-center bg-org-300/90 text-white"
          >
            <div class="text-center relative">
              <h1 class="text-4xl drop-shadow-md">{{ menu.title }}</h1>
              <span
                class="bg-org-200 w-10 h-1 block absolute left-1/2 -translate-x-1/2 mt-2"
              ></span>
            </div>
          </div>
          <div
            class="bg-white/80 px-8 py-5 text-gray-700 flex flex-col justify-center"
          >
            <ul class="animate__animated animate__fadeInDown">
              <li
                v-for="item in menu.items"
                :key="item.key"
                class="mb-2 cursor-pointer block w-full"
              >
                <router-link
                  class="py-1 pl-4 block hover:text-org-100 transition hover:border-l-4 border-transparent"
                  :to="item.url"
                  @mouseover="activeTab = item.key"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="bg-white/80 px-8 py-5 text-left text-gray-700 flex flex-col justify-center"
          >
            <div
              v-for="item in menu.items"
              :key="item.key"
              v-show="activeTab === item.key"
              class="p-3 pointer-events-none animate__animated animate__fadeInDown"
            >
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE MENU SLIDE-IN -->
    <transition name="slide">
      <div
        v-if="mobileOpen"
        class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-6 sm:hidden overflow-y-auto animate__animated animate__fadeInLeft"
      >
        <button
          @click="mobileOpen = false"
          class="text-2xl rounded-full border border-org-500 py-2 px-4 hover:text-white text-black bg-white hover:bg-org-800 font-bold mb-4"
        >
          ×
        </button>
        <ul class="space-y-4">
          <li>
            <router-link @click="mobileOpen = false" to="/" class="block py-2"
              >HOME</router-link
            >
          </li>

          <!-- MOBILE ACCORDION MENUS -->
          <li v-for="(menu, key) in menus" :key="key" class="border-b pb-2">
            <button
              @click="toggleMobileDropdown(key)"
              class="w-full text-org-400 text-left py-2"
            >
              {{ menu.title }} <span class="px-2">⌄</span>
            </button>
            <ul v-show="mobileDropdown === key" class="pl-4 space-y-2">
              <li v-for="item in menu.items" :key="item.key">
                <router-link
                  @click="mobileOpen = false"
                  :to="item.url"
                  class="block py-1 text-org-600 text-sm"
                  >{{ item.label }}</router-link
                >
              </li>
            </ul>
          </li>

          <li>
            <router-link
              @click="mobileOpen = false"
              to="/contacts"
              class="block py-2"
              >CONTACT</router-link
            >
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
        label: "MISSION",
        key: "1",
        description:
          "Our mission is to help employers develop, promote, and sustain positive health and safety cultures for the wellbeing of employees and all interested parties.",
        url: "/about#mission",
      },
      {
        label: "VISION",
        key: "2",
        description:
          "Our vision is to create productive, safe, and healthy workplaces across Botswana and around the world.",
        url: "/about#vision",
      },
      {
        label: "VALUES",
        key: "3",
        description:
          "Our core values include professionalism, innovation, trustworthy service, environmental awareness, and social responsibility.",
        url: "/about#values",
      },
    ],
  },

  services: {
    title: "SERVICES",
    url: "/services",
    items: [
      {
        label: "OCCUPATIONAL HEALTH SERVICES",
        key: "1",
        description:
          "Comprehensive occupational health solutions including employee medical exams, disability management, medical surveillance, and vaccinations.",
        url: "/service/occupational-health",
      },
      {
        label: "SAFETY MANAGEMENT SYSTEMS",
        key: "2",
        description:
          "Services supporting effective safety management such as audits and ergonomic assessments.",
        url: "/service/sms",
      },
      {
        label: "WELLNESS CONSULTANCY",
        key: "3",
        description:
          "Wellness solutions including Employee Assistance Programs and counselling services.",
        url: "/service/wellness",
      },
      {
        label: "PANDEMIC RESPONSE",
        key: "4",
        description:
          "Guidance and implementation support for pandemic readiness, response, and workplace continuity.",
        url: "/service/pandemic-response",
      },
    ],
  },

  connect: {
    title: "CONNECT",
    url: "/connect",
    items: [
      {
        label: "WEBINAR",
        key: "1",
        description:
          "Join Wellnique webinars covering safety, health, and wellness topics.",
        url: "/connect/webinar",
      },
      {
        label: "PODCASTS",
        key: "2",
        description:
          "Listen to Wellnique podcasts featuring insights from experts and practitioners.",
        url: "/connect/podcasts",
      },
      {
        label: "SAFETY SHOP",
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
        label: "COMPANY",
        key: "1",
        description: "Request a company-level engagement or service package.",
        url: "/get",
      },
      {
        label: "PARTNERSHIP",
        key: "2",
        description:
          "Partner with Wellnique on health, safety, or wellness programs.",
        url: "/contact#partnership",
      },
      {
        label: "PRACTITIONER",
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
