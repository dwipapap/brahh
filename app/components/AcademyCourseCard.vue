<template>
  <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div class="w-full h-80 bg-slate-100 flex items-center justify-center overflow-hidden">
      <img 
        v-if="thumbnail"
        :src="thumbnail" 
        :alt="title"
        class="w-full h-full object-cover" 
      />
      <UIcon v-else name="i-lucide-image" class="w-16 h-16 text-slate-300" />
    </div>
    
    <div class="p-5">
      <h3 class="text-slate-900 font-bold text-lg mb-2">{{ title }}</h3>
      
      <div class="flex items-center gap-1 text-sm text-slate-500 mb-2">
        <UIcon name="i-lucide-star" class="w-4 h-4 text-amber-500 fill-current" />
        <span>{{ reviews }} Reviews</span>
      </div>
      
      <p class="text-slate-500 text-sm mb-4">
        {{ topics }} Topik • {{ materials }} Materi
      </p>
      
      <button class="text-amber-600 font-medium text-sm flex items-center gap-1 hover:text-amber-700 transition-colors">
        Cek detail
        <UIcon name="i-lucide-chevron-right" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  reviews: number
  topics: number
  materials: number
  thumbnail: string
}>()
</script>