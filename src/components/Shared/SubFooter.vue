<template>
    <div class="w-full bg-gray-500 text-white border border-gray-500 py-12 block">
        <div class="container mx-auto px-5">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                <!-- Column 1: Brand -->
                <div>
                    <img class="mb-3 h-10" src="https://wellnique.test/images/well-logo-small-white.png"
                        alt="Wellnique logo" />

                    <p class="text-sm text-white/70 mb-4">
                        Look on the bright side
                    </p>

                    <div class="flex items-center gap-4 mb-6">
                        <a href="https://www.facebook.com/wellnique" target="_blank"
                            class="transition hover:text-org-400">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="https://twitter.com/wellnique" target="_blank" class="transition hover:text-org-400">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>

                    <a href="mailto:info@wellnique.co.bw?subject=Book Appointment&body=Please book me to the Wellnique appointment list. "
                        target="_blank"
                        class="inline-flex items-center  bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 border border-gray-800 transition duration-300 hover:text-white hover:bg-org-500">
                        <span class="mr-2 text-base">+</span>
                        Book Appointment
                    </a>
                </div>

                <!-- Column 2: Opening Hours -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Opening Hours</h3>
                    <div class="h-1 w-10 bg-org-400 mb-4 animate__fadeInUp  "></div>

                    <ul class="space-y-2 text-sm text-white/80">
                        <li>Monday: 08:00 – 18:00</li>
                        <li>Saturday: 08:00 – 16:00</li>
                        <li>Sunday: 08:00 – 13:00</li>
                    </ul>
                </div>

                <!-- Column 3: Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Our Services</h3>
                    <div class="h-1 w-10 bg-org-400 mb-4"></div>

                    <ul class="space-y-2 text-sm">
                        <li>
                            <a href="/about" class="hover:text-org-400 transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-org-400 transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/service/counselling" class="hover:text-org-400 transition">
                                Counselling
                            </a>
                        </li>
                        <li>
                            <a href="/get" class="hover:text-org-400 transition">
                                Enquire
                            </a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:text-org-400 transition">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Contact -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Contact</h3>
                    <div class="h-1 w-10 bg-org-400 mb-4"></div>

                    <div class="space-y-2 text-sm text-white/80">
                        <p>Unit 8, Carbo Center</p>
                        <p>Riverwalk</p>
                        <p>Gaborone, Botswana</p>

                        <p class="mt-3">(+267) 73144856</p>
                        <p>(+267) 390 3660</p>

                        <p class="mt-3">
                            <a href="mailto:info@wellnique.co.bw" class="hover:text-org-400 transition">
                                info@wellnique.co.bw
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubFooter",
};
</script>