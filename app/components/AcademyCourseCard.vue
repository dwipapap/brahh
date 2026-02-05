<template>
  <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
    <!-- Illustration Placeholder -->
    <div class="w-full h-32 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
      <UIcon name="i-lucide-image" class="w-16 h-16 text-slate-300" />
    </div>
    
    <!-- Course Title -->
    <h3 class="text-slate-900 font-bold text-lg mb-2">{{ title }}</h3>
    
    <!-- Reviews -->
    <div class="flex items-center gap-1 text-sm text-slate-500 mb-2">
      <UIcon name="i-lucide-star" class="w-4 h-4 text-amber-500" />
      <span>{{ reviews }} Reviews</span>
    </div>
    
    <!-- Topics & Materials -->
    <p class="text-slate-500 text-sm mb-4">
      {{ topics }} Topik • {{ materials }} Materi
    </p>
    
    <!-- Check Detail Button -->
    <button class="text-amber-600 font-medium text-sm flex items-center gap-1 hover:text-amber-700 transition-colors">
      Cek detail
      <UIcon name="i-lucide-chevron-right" class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  reviews: number
  topics: number
  materials: number
}>()
</script>
