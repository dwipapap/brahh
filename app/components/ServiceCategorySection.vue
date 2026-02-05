<template>
  <section class="py-8 bg-slate-50">
    <UContainer>
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Jenis Layanan</h2>
        <a href="#" class="group flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          Lihat semua
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <!-- Carousel -->
      <UCarousel
        v-slot="{ item }"
        :items="services"
        :ui="{ item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 pe-4' }"
      >
        <ServiceCard :title="item.title" />
      </UCarousel>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const services = [
  { title: 'Desain Logo' },
  { title: 'Desain Kemasan' },
  { title: 'Maskot' },
  { title: 'Banner' },
  { title: 'Website Gratis' }
]
</script>
