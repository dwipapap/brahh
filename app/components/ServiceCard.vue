<template>
  <NuxtLink :to="to" class="block">
    <div class="relative overflow-hidden rounded-2xl aspect-square cursor-pointer group shadow-sm border border-gray-100">
      
      <div class="absolute inset-0 bg-slate-200 transition-transform duration-300 group-hover:scale-105">
        <img 
          v-if="image"
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover" 
        />
        <div v-else class="w-full h-full flex items-center justify-center">
          <UIcon name="i-lucide-image" class="text-4xl text-slate-400" />
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 bg-slate-900 py-3 px-4 transition-colors duration-300 group-hover:bg-slate-800">
        <span class="text-white font-bold text-center block text-sm">{{ title }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// HANYA BOLEH ADA SATU BLOK SCRIPT INI
defineProps<{
  title: string
  image?: string 
  to?: string
}>()
</script>