<template>
  <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
    <ServiceCard
      v-for="service in services"
      :key="service.title"
      :title="service.title"
      :image="service.image" 
      :to="service.to"
    />
  </div>
</template>

<script setup lang="ts">
const services = [
  { 
    title: 'Desain Logo', 
    image: '/logo.png', // Diubah dari 'to' menjadi 'image'
    to: '/desain-logo' 
  },
  { 
    title: 'Desain Kemasan', 
    image: '/kemasan.png', 
    to: '/desain-kemasan' 
  },
  { 
    title: 'Maskot', 
    image: '/maskot.png', 
    to: '/layanan-maskot' 
  },
  { 
    title: 'Banner', 
    image: '/banner.png', 
    to: '/layanan-banner' 
  },
  { 
    title: 'Website Gratis', 
    image: '/website.png', 
    to: '/layanan-website' 
  }
]
</script>