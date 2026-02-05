<template>
  <div class="relative overflow-hidden rounded-2xl aspect-square cursor-pointer group">
    <!-- Placeholder Image -->
    <div class="absolute inset-0 bg-slate-200 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <UIcon name="i-lucide-image" class="text-4xl text-slate-400" />
    </div>
    
    <!-- Label Overlay -->
    <div class="absolute bottom-0 left-0 right-0 bg-slate-900 py-3 px-4 transition-colors duration-300 group-hover:bg-slate-800">
      <span class="text-white font-bold text-center block">{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
