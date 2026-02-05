<template>
  <div class="w-64 flex-shrink-0">
    <div class="bg-white rounded-2xl border border-gray-200 p-4">
      <!-- Header -->
      <div class="flex items-center gap-2 mb-4">
        <UIcon name="i-lucide-sliders-horizontal" class="text-slate-600 text-lg" />
        <h2 class="font-bold text-slate-900">Filter Kategori</h2>
      </div>

      <!-- Category Buttons -->
      <div class="flex flex-col gap-2">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="selectCategory(category.value)"
          class="w-full px-4 py-2 rounded-full text-sm font-medium transition-colors text-left"
          :class="selectedCategory === category.value 
            ? 'bg-slate-900 text-white' 
            : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'"
        >
          {{ category.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  label: string
  value: string
}

const selectedCategory = defineModel<string>({ default: '' })

const categories: Category[] = [
  { label: 'Marketing', value: 'marketing' },
  { label: 'IT (Teknologi)', value: 'it' },
  { label: 'Funding', value: 'funding' },
  { label: 'Business Plan', value: 'business-plan' },
  { label: 'Business Development', value: 'business-development' },
  { label: 'Risk Management', value: 'risk-management' },
]

function selectCategory(value: string) {
  if (selectedCategory.value === value) {
    selectedCategory.value = ''
  } else {
    selectedCategory.value = value
  }
}
</script>
