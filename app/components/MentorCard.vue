<template>
  <div class="bg-white rounded-2xl border border-gray-200 p-4 flex gap-4">
    <!-- Profile Photo -->
    <div class="flex-shrink-0">
      <img 
        :src="photo" 
        :alt="name"
        class="w-24 h-28 object-cover rounded-xl"
      />
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col">
      <!-- Name -->
      <h3 class="text-xl font-bold text-slate-900">{{ name }}</h3>

      <!-- Expertise Badges -->
      <div class="flex flex-wrap gap-1.5 mt-2">
        <span 
          v-for="(expertise, index) in expertises" 
          :key="index"
          class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded-full text-xs text-slate-700"
        >
          <span>{{ expertise.icon }}</span>
          <span>{{ expertise.label }}</span>
        </span>
      </div>

      <!-- Age & Location -->
      <p class="text-sm text-slate-500 mt-2">
        {{ age }} Tahun &bull; {{ location }}
      </p>

      <!-- Description -->
      <p class="text-sm text-slate-600 mt-2 line-clamp-2">
        {{ description }}
      </p>

      <!-- Bottom Row: Rating, Price, Buttons -->
      <div class="flex items-center justify-between mt-auto pt-3">
        <!-- Rating & Price -->
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1">
            <UIcon name="i-lucide-star" class="text-amber-400 text-sm" />
            <span class="text-sm font-semibold text-slate-900">{{ rating }}</span>
          </div>
          <div class="flex items-center gap-1">
            <UIcon name="i-lucide-tag" class="text-slate-400 text-sm" />
            <span class="text-sm font-semibold text-slate-900">{{ formattedPrice }}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          <UButton 
            color="amber" 
            variant="solid" 
            size="sm"
            class="bg-amber-400 hover:bg-amber-500 text-slate-900"
          >
            Kirim Pesan
          </UButton>
          <UButton 
            color="neutral" 
            variant="outline" 
            size="sm"
            class="border-slate-300 text-slate-700"
          >
            Lihat Profil
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Expertise {
  icon: string
  label: string
}

interface Props {
  name: string
  photo: string
  expertises: Expertise[]
  age: number
  location: string
  description: string
  rating: number
  price: number
}

const props = defineProps<Props>()

const formattedPrice = computed(() => {
  return `Rp ${props.price.toLocaleString('id-ID')}`
})
</script>
