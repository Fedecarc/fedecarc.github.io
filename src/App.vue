<script setup>
  import { defineAsyncComponent } from 'vue';
  const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
  const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
  const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'))
  const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
  const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
  const TestimonialsSection = defineAsyncComponent(() => import('@/components/TestimonialsSection.vue'))
  const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
</script>

<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <TestimonialsSection />
    <Footer />
  </div>
</template>

<style scoped>

</style>
