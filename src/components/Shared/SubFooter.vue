<template>
    <div class="block w-full bg-gray-200 py-12 text-slate-700">
        <div class="container mx-auto px-5">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                <!-- Column 1: Brand -->
                <div>
                    <div class="bg-logo-small mb-3 h-12 bg-contain bg-no-repeat" />

                    <p class="mb-4 text-sm">Look on the bright side</p>

                    <div class="mb-6 flex items-center gap-4">
                        <a href="https://www.facebook.com/wellnique" target="_blank"
                            class="hover:text-org-400 transition">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="https://twitter.com/wellnique" target="_blank" class="hover:text-org-400 transition">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </div>

                    <a href="mailto:info@wellnique.co.bw?subject=Book Appointment&body=Please book me to the Wellnique appointment list. "
                        target="_blank"
                        class="hover:bg-grape-400 inline-flex items-center border border-gray-800 px-5 py-2.5 text-sm font-semibold text-gray-700 transition duration-300 hover:text-white">
                        <span class="mr-2 text-base">+</span>
                        Book Appointment
                    </a>
                </div>

                <!-- Column 2: Opening Hours -->
                <div>
                    <h3 class="mb-2 text-lg font-semibold">Opening Hours</h3>
                    <div class="bg-org-400 animate__fadeInUp mb-4 h-0.5 w-15"></div>

                    <ul class="space-y-2 text-sm">
                        <li>Monday: 08:00 – 18:00</li>
                        <li>Saturday: 08:00 – 16:00</li>
                        <li>Sunday: 08:00 – 13:00</li>
                    </ul>
                </div>

                <!-- Column 3: Links -->
                <div>
                    <h3 class="mb-2 text-lg font-semibold">Our Services</h3>
                    <div class="bg-org-400 animate__fadeInUp mb-4 h-0.5 w-15"></div>

                    <ul class="space-y-2 text-sm">
                        <li>
                            <a href="/about" class="hover:text-org-400 transition">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-org-400 transition">Services</a>
                        </li>
                        <li>
                            <a href="/service/counselling" class="hover:text-org-400 transition">Counselling</a>
                        </li>
                        <li>
                            <a href="/get" class="hover:text-org-400 transition">Enquire</a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:text-org-400 transition">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Contact -->
                <div>
                    <h3 class="mb-2 text-lg font-semibold">Contact</h3>
                    <div class="bg-org-400 animate__fadeInUp mb-4 h-0.5 w-15"></div>

                    <div class="space-y-2 text-sm">
                        <p>Unit 8, Carbo Center</p>
                        <p>Riverwalk</p>
                        <p>Gaborone, Botswana</p>

                        <p class="mt-3">(+267) 73144856</p>
                        <p>(+267) 390 3660</p>

                        <p class="mt-3">
                            <a href="mailto:info@wellnique.co.bw"
                                class="hover:text-org-400 transition">info@wellnique.co.bw</a>
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