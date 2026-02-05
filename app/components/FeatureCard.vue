<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div 
    class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
    data-testid="feature-card"
  >
    <div class="h-48 overflow-hidden">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <div class="p-6 text-center flex-1 flex flex-col items-center">
      <h3 class="text-amber-500 font-bold text-xl mb-3">
        {{ title }}
      </h3>
      
      <p class="text-slate-600 text-base leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>
