<template>
  <header class="header2 bg-transparent relative">
    <div class="before"></div>

    <div class="relative z-10">
      <div class="container mx-auto pb-2 md:py-8">
        <div class="w-full h-auto p-4 xs:p-0 relative">
          <div
            class="h-auto grid md:gap-y-4 sm:gap-y-4 xs:gap-y-4 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 relative lg:h-24"
          >
            <!-- Logo -->
            <img
              class="py-4"
              src="https://wellnique.test/images/well-logo-small.png"
              alt="logo"
            />

            <!-- Location -->
            <div
              class="h-full sm:order-last md:order-last grid grid-cols-1 place-items-start place-content-center"
            >
              <div
                class="flex flex-col items-start justify-center h-full lg:pr-8"
              >
                <div
                  class="w-full lg:border-r border-transparent lg:border-slate-300"
                >
                  <div
                    class="grid grid-cols-6 w-full place-items-start place-content-center"
                  >
                    <img
                      class="h-6 pr-2"
                      src="https://wellnique.test/images/icons/office.png"
                      alt="icon"
                    />
                    <h2 class="col-span-5 text-xl font-bold text-slate-600">
                      Our Location
                    </h2>
                  </div>
                  <div
                    class="grid grid-cols-6 w-full place-items-start place-content-center"
                  >
                    <span class="h-6 w-10"></span>
                    <p
                      class="col-span-5 text-base mt-1 font-normal font-sarif text-slate-600"
                    >
                      Unit 8, Carbo Center<br />
                      Riverwalk<br />
                      Gaborone, Botswana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Call Us -->
            <div
              class="h-full sm:order-last md:order-last grid grid-cols-1 place-items-start place-content-center"
            >
              <div
                class="flex flex-col items-start justify-center h-full lg:pr-8"
              >
                <div
                  class="w-full lg:border-r border-transparent lg:border-slate-300"
                >
                  <div
                    class="grid grid-cols-6 w-full place-items-start place-content-center"
                  >
                    <img
                      class="h-6 pr-2"
                      src="https://wellnique.test/images/icons/call.png"
                      alt="icon"
                    />
                    <h2 class="col-span-5 text-xl font-bold text-slate-600">
                      Call us Now - 24/7
                    </h2>
                  </div>
                  <div
                    class="grid grid-cols-6 w-full place-items-start place-content-center"
                  >
                    <span class="h-6 w-10"></span>
                    <p
                      class="col-span-5 text-base mt-1 font-normal font-sarif text-slate-600"
                    >
                      (+267) 71 450 291<br />
                      (+267) 390 3660<br />
                      Customer Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Socials + Button -->
            <div
              class="grid place-content-center place-items-center h-full lg:order-last"
            >
              <div
                class="w-full header-socials grid grid-cols-4 place-content-center place-items-center"
              >
                <a href="mailto:info@wellnique.co.bw">
                  <social
                    name="gmail"
                    class="w-7 h-7 fill-gray-500 hover:fill-org-500"
                  />
                </a>
                <a href="https://www.facebook.com/wellnique">
                  <social
                    name="facebook"
                    class="w-7 h-7 fill-gray-500 hover:fill-org-500"
                  />
                </a>

                <a
                  class="hidden sm:block px-4 pr-6 py-2 my-2 col-span-2 font-semibold rounded-full text-base bg-org-400 hover:bg-white text-white hover:text-org-400 shadow-sm btn w-full"
                  href="https://wellnique.test/capture/create"
                >
                  <span class="px-2">+</span> Join
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="z-0 absolute top-0 bottom-0 right-0 left-0"></div>
  </header>
</template>

<script>
import Social from "./Social.vue";

export default {
  name: "HeaderSection",
  components: {
    Social,
  },
};
</script>

<style scoped>
.before {
  position: absolute;
  inset: 0;
}
</style>
