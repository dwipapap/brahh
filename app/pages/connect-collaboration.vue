<template>
  <div class="min-h-screen bg-slate-50">
    <CCHeader />

    <main>
      <ServiceCategorySection />
      <RecommendedSection />
    </main>

    </div>
</template>

<script setup lang="ts">
// Mengatur judul tab di browser
useHead({
  title: 'C&C - Connect & Collaboration | Branova',
  meta: [
    { name: 'description', content: 'Temukan kolaborasi dan layanan terbaik di Branova.' }
  ]
})
</script>