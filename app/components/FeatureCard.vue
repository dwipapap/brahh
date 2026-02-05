<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <UCard data-testid="feature-card" class="text-center h-full">
    <div class="bg-slate-100 rounded-lg h-48 mb-4 flex items-center justify-center">
      <UIcon name="i-lucide-image" class="w-12 h-12 text-slate-300" />
    </div>
    
    <h3 class="text-amber-500 font-bold mb-2 text-lg">
      {{ title }}
    </h3>
    
    <p class="text-slate-600 text-sm">
      {{ description }}
    </p>
  </UCard>
</template>
