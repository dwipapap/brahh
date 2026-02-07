<template>
  <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div class="relative bg-slate-800 p-6 pb-12">
      <div class="absolute top-4 left-4">
        <UIcon name="i-lucide-quote" class="w-8 h-8 text-amber-500" />
      </div>
      
      <div class="flex justify-center mb-4">
        <div class="w-24 h-24 rounded-full bg-slate-600 flex items-center justify-center border-4 border-slate-500 overflow-hidden">
          <img 
            v-if="speakerPhoto" 
            :src="speakerPhoto" 
            :alt="speakerName" 
            class="w-full h-full object-cover" 
          />
          <UIcon v-else name="i-lucide-user" class="w-12 h-12 text-slate-400" />
        </div>
      </div>
      
      <div class="text-center">
        <h3 class="text-white font-bold text-lg">{{ speakerName }}</h3>
        <p class="text-slate-300 text-sm">{{ speakerTitle }}</p>
        <p class="text-amber-500 text-sm font-medium">{{ speakerCompany }}</p>
      </div>
      
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <span class="bg-amber-500 text-slate-900 text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap">
          {{ speakerRole }}
        </span>
      </div>
    </div>
    
    <div class="p-4 pt-8">
      <h4 class="text-slate-900 font-bold text-sm mb-3 line-clamp-2 text-center">
        {{ eventTitle }}
      </h4>
      
      <div class="flex items-center justify-center gap-4 text-xs text-slate-500">
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-calendar" class="w-4 h-4" />
          <span>{{ eventDate }}</span>
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-tag" class="w-4 h-4" />
          <span :class="price === 'Gratis' ? 'text-green-600 font-medium' : ''">{{ price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  speakerName: string
  speakerTitle: string
  speakerCompany: string
  speakerPhoto: string 
  speakerRole: string
  eventTitle: string
  eventDate: string
  price: string
}>()
</script>