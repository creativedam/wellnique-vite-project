<template>
    <div class="relative block h-full w-full pt-20 pb-40 font-sans font-normal">
        <!-- Overlay -->
        <div class="bg-willo-image bg-50 absolute inset-0 mb-auto ml-auto h-2/3 w-1/2 opacity-20"></div>

        <div class="relative container mx-auto px-5">
            <div class="grid gap-x-4 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <scope-card-component title="Counselling"
                    body="Counselling : Wellnique’s workplace vaccination program is an onsite program to promote productivity in the workplace through prevention of prolonged absenteeism from diseases such flu and covid 19."
                    image="bg-service1-image" icon="bg-medical-icon"
                    link="/services/wellness-consultancy"></scope-card-component>

                <scope-card-component title="Employee Medical Examinations"
                    body="Employee Medical Examinations : Employees who are found to have a manageable chronic disease get medical management advice from the doctors to improve his general wellness during the course of employment."
                    icon="bg-medical-icon" image="bg-service2-image"
                    link="/services/employee-medical-examinations"></scope-card-component>

                <scope-card-component title="Ergonomics"
                    body="Ergonomics : We offer solutions across all industries to identify hazards, assess risks, and mitigate risks that affect productivity and contribute to rising medical aid claims rations and compensations claims."
                    icon="bg-medical-icon" image="bg-service3-image"
                    link="/services/occupational-health-services"></scope-card-component>

                <scope-card-component title="Safety Audit"
                    body="Safety Audit : Once a safety and health program is established, it should be evaluated initially to verify that it is being implemented as intended."
                    icon="bg-medical-icon" image="bg-service4-image"
                    link="/services/safety-management-systems"></scope-card-component>

                <scope-card-component title="Disability Management"
                    body="Disability Management : Our disability program provides early intervention services to minimize the effects of disability in the work place. We facilitate an Interactive Process through which a cooperative dialogue with the employee, management and other relevant parties regarding workplace disability issues is achieved."
                    icon="bg-medical-icon" image="bg-service5-image"
                    link="/services/disability-management"></scope-card-component>

                <scope-card-component title="EAP"
                    body="Employee Assistance Program : Our employee assistance programs (EAP) are work-based intervention programs designed to help employees in finding sustainable remedies to their personal problems that may be negatively affecting the employees performance."
                    icon="bg-medical-icon" image="bg-service6-image"
                    link="/services/wellness-consultancy"></scope-card-component>
            </div>
        </div>
    </div>
</template>
,
<script>
import ScopeCardComponent from "./ScopeCardComponent.vue";
export default {
    name: "ScopeCard",
    components: {
        ScopeCardComponent,
    },
};
</script>
