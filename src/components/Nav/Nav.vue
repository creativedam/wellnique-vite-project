<template>
  <div
    class="w-full bg-white mx-auto grid grid-cols-6 font-lusitana justify-between h-32 sm:h-25 px-4 md:px-10 py-3 border-b border-sky-800 relative z-50 transition-all duration-300"
  >
    <!-- MOBILE BURGER BUTTON -->
    <button
      @click="mobileOpen = !mobileOpen"
      class="sm:hidden flex items-center h-25 text-sky-800 text-3xl font-bold"
    >
      ☰
    </button>

    <!-- LOGO -->
    <router-link to="/" class="flex col-span-2 items-center h-full w-50">
      <div
        class="h-full w-50 bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${logo})` }"
      ></div>
    </router-link>

    <!-- DESKTOP NAV -->
    <div
      class="md:container w-full col-span-4 justify-end mx-auto hidden sm:block"
    >
      <nav
        id="menu-main"
        class="py-4 w-full flex justify-end h-20 font-lusitana"
      >
        <ul
          id="nav-main"
          class="flex justify-end h-20 w-5/6 text-black font-medium font-sans"
        >
          <li class="py-4 h-20">
            <router-link
              class="hover:text-org-100 text-center text-xs hidden lg:text-base px-3 font-light font-lusitana lg:block hover:font-bold"
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
              class="text-center hover:text-org-100 text-xs lg:text-base font-lusitana font-light px-2 lg:px-4 block hover:font-bold"
              :to="menu.url"
              >{{ menu.title }}</router-link
            >
          </li>
          <li class="py-4 h-20">
            <router-link
              class="hover:text-org-100 text-center text-xs lg:text-base font-light font-lusitana px-3 block hover:font-bold"
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
            class="menu-title flex items-center justify-center bg-sky-900/90 text-white"
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
          class="text-2xl rounded-full border border-sky-800 py-2 px-4 hover:text-white text-black bg-white hover:bg-sky-800 font-bold mb-4"
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
              class="w-full text-sky-900 text-left py-2"
            >
              {{ menu.title }} <span class="px-2">⌄</span>
            </button>
            <ul v-show="mobileDropdown === key" class="pl-4 space-y-2">
              <li v-for="item in menu.items" :key="item.key">
                <router-link
                  @click="mobileOpen = false"
                  :to="item.url"
                  class="block py-1 text-sky-600 text-sm"
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
const logo = new URL("@/assets/logo.svg", import.meta.url).href;

const menus = {
  about: {
    title: "ABOUT",
    url: "/about",
    items: [
      {
        label: "BACKGROUND",
        key: "1",
        description:
          "Learn about the history, purpose, and guiding principles of the Medical Practitioners Group of Botswana and its role in supporting the national health system.",
        url: "/about/background",
      },
      {
        label: "FOUNDING MEMBERS",
        key: "2",
        description:
          "Discover the individuals who established the Medical Practitioners Group of Botswana and contributed to shaping its vision and direction.",
        url: "/about/founding-members",
      },
      {
        label: "EXECUTIVE",
        key: "3",
        description:
          "Meet the current executive team responsible for leadership, policy direction, and the strategic work of the Medical Practitioners Group of Botswana.",
        url: "/about/executive",
      },
    ],
  },

  partners: {
    title: "PARTNERS",
    url: "/partners",
    items: [
      {
        label: "OUR STRATEGIC PARTNERS",
        key: "1",
        description:
          "The Medical Practitioners Group of Botswana works closely with key stakeholders across the national health ecosystem including regulatory bodies, healthcare institutions, medical associations, training institutions, and strategic sector partners. These partnerships strengthen clinical standards, promote professional development, and support a unified voice that advances quality healthcare for all people in Botswana.",
        url: "/partners",
      },
    ],
  },

  membership: {
    title: "MEMBERSHIP",
    url: "/membership",
    items: [
      {
        label: "MEMBERSHIP CATEGORIES",
        key: "1",
        description:
          "Learn about the different membership categories offered by the Medical Practitioners Group of Botswana, including benefits and eligibility for each category.",
        url: "/membership/categories",
      },
      {
        label: "MEMBER SUPPORT SERVICES",
        key: "3",
        description:
          "Explore the support services available to members, including career guidance, continuous professional growth resources, and assistance with regulatory matters.",
        url: "/membership/support",
      },
      {
        label: "JOIN",
        key: "2",
        description:
          "Begin the process of joining the Medical Practitioners Group of Botswana. Access the application guide and submit your membership request.",
        url: "/membership/application",
      },
    ],
  },

  practice: {
    title: "PRACTICE",
    url: "/practice",
    items: [
      {
        label: "CLINIC MAP",
        key: "1",
        description:
          "Explore an interactive map that shows the locations of all clinics and medical facilities represented by the Medical Practitioners Group of Botswana.",
        url: "/practice/map",
      },
      {
        label: "MEMBER DIRECTORY",
        key: "2",
        description:
          "Browse a complete directory of registered members including professional details, areas of practice, and contact information where available.",
        url: "/practice/directory",
      },
      {
        label: "CLINICAL PRACTICE RESOURCES",
        key: "3",
        description:
          "Access helpful resources for practitioners including guidelines, advisory notes, professional tools, and information that supports day to day clinical practice.",
        url: "/practice/resources",
      },
    ],
  },

  shop: {
    title: "SHOP",
    url: "/shop",
    items: [
      {
        label: "SHOP",
        key: "1",
        description:
          "Explore products and services available to members and the public within the Medical Practitioners Group of Botswana community.",
        url: "/shop",
      },
      {
        label: "ADVERTISEMENTS",
        key: "2",
        description:
          "View advertisements shared by members, partners, and approved organisations including medical equipment, professional services, and other relevant listings.",
        url: "/shop/advertisements",
      },
    ],
  },

  newsEvents: {
    title: "NEWS",
    url: "/news-events",
    items: [
      {
        label: "LATEST NEWS",
        key: "1",
        description:
          "Stay informed with the latest announcements, public statements, and important updates from the Medical Practitioners Group of Botswana.",
        url: "/news-events/news",
      },
      {
        label: "EVENTS",
        key: "2",
        description:
          "View planned events including conferences, workshops, member meetings, and national health engagement sessions.",
        url: "/news-events/events",
      },
      {
        label: "MEDIA CENTRE",
        key: "3",
        description:
          "Access press releases, interviews, official publications, and multimedia content that highlights the work of the Medical Practitioners Group of Botswana.",
        url: "/news-events/media",
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
