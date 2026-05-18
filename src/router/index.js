import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Service from "@/views/Service.vue";
import NotFound from "@/views/NotFound.vue";

// Services
import OccupationalHealthServices from "@/views/Services/OccupationalHealthServices.vue";
import SafetyManagementSystems from "@/views/Services/SafetyManagementSystems.vue";
import WellnessConsultancy from "@/views/Services/WellnessConsultancy.vue";
import PandemicResponse from "@/views/Services/PandemicResponse.vue";
import EmployeeMedicalExaminations from "@/views/Services/EmployeeMedicalExaminations.vue";
import DisabilityManagement from "@/views/Services/DisabilityManagement.vue";
import MedicalSurveillance from "@/views/Services/MedicalSurveillance.vue";
import Vaccinations from "@/views/Services/Vaccinations.vue";

const routes = [
  // Main Routes
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/contacts", name: "Contacts", component: Contacts },
  { path: "/services", name: "Service", component: Service },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },

  {
    path: "/services/occupational-health-services",
    name: "OccupationalHealthServices",
    component: OccupationalHealthServices,
  },
  {
    path: "/services/safety-management-systems",
    name: "SafetyManagementSystems",
    component: SafetyManagementSystems,
  },
  {
    path: "/services/wellness-consultancy",
    name: "WellnessConsultancy",
    component: WellnessConsultancy,
  },
  {
    path: "/services/pandemic-response",
    name: "PandemicResponse",
    component: PandemicResponse,
  },
  {
    path: "/services/employee-medical-examinations",
    name: "EmployeeMedicalExaminations",
    component: EmployeeMedicalExaminations,
  },
  {
    path: "/services/disability-management",
    name: "DisabilityManagement",
    component: DisabilityManagement,
  },
  {
    path: "/services/medical-surveillance",
    name: "MedicalSurveillance",
    component: MedicalSurveillance,
  },
  {
    path: "/services/vaccinations",
    name: "Vaccinations",
    component: Vaccinations,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
