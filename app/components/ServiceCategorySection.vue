<template>
  <div class="max-w-7xl mx-auto px-4 md:px-6 mb-12">
    
    <div class="flex justify-between items-end mb-6">
      <h2 class="text-2xl font-bold text-slate-900">Jenis Layanan</h2>
      <NuxtLink to="/layanan" class="text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors">
        Lihat semua
        <UIcon name="i-lucide-chevron-right" class="w-4 h-4" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
      <ServiceCard
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :image="service.image" 
        :to="service.to"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  { title: 'Desain Logo', image: '/logo.png', to: '/desain-logo' },
  { title: 'Desain Kemasan', image: '/kemasan.png', to: '/desain-kemasan' },
  { title: 'Maskot', image: '/maskot.png', to: '/layanan-maskot' },
  { title: 'Banner', image: '/banner.png', to: '/layanan-banner' },
  { title: 'Website Gratis', image: '/website.png', to: '/layanan-website' }
]
</script>