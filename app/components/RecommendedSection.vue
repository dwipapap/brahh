<template>
  <section class="py-8 bg-slate-50">
    <UContainer>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Rekomendasi</h2>
        <a href="#" class="group flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          Lihat semua
          <UIcon name="i-lucide-arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in recommended" 
          :key="index" 
          class="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <img 
            :src="item.img" 
            :alt="item.title" 
            class="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// Daftar gambar rekomendasi (Pastikan file ini ada di folder /public)
const recommended = [
  { title: 'Desain Sosial Media', img: '/rekomendasi1.png' },
  { title: 'Jasa Pembuatan Website', img: '/rekomendasi2.png' },
  { title: 'Desain Packing', img: '/rekomendasi3.png' },
  { title: 'Jasa Pengelolaan Sosmed', img: '/rekomendasi4.png' },
  { title: 'Jasa Copywriting', img: '/rekomendasi5.png' },
  { title: 'Fotografi Produk', img: '/rekomendasi6.png' }
]
</script>