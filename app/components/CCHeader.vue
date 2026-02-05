<template>
  <div class="bg-white py-4 border-b border-gray-100">
    <UContainer class="flex items-center justify-between gap-4">
      <!-- Left: Logo Section with Navigation -->
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
          <UIcon name="i-lucide-users" class="text-white text-xl" />
        </div>
        <div class="flex flex-col">
          <NuxtLink 
            to="/connect-collaboration" 
            class="text-xs font-bold px-2 py-0.5 rounded w-fit transition-colors"
            :class="isConnectActive ? 'bg-amber-300 text-slate-900' : 'bg-amber-500 text-white hover:bg-amber-400'"
          >
            CONNECT
          </NuxtLink>
          <NuxtLink 
            to="/collaboration" 
            class="font-bold text-sm leading-none mt-0.5 px-2 py-0.5 rounded transition-colors"
            :class="isCollaborationActive ? 'bg-amber-300 text-slate-900' : 'text-slate-900 hover:bg-amber-100'"
          >
            COLLABORATION
          </NuxtLink>
        </div>
      </div>

      <!-- Center: Search Bar -->
      <div class="flex-1 max-w-2xl hidden md:block">
        <UInput
          :placeholder="searchPlaceholder"
          size="lg"
          variant="outline"
          :ui="{
            root: 'w-full',
            base: 'rounded-full border-2 border-slate-800 focus:ring-slate-800'
          }"
        >
          <template #leading>
            <UIcon name="i-lucide-sliders-horizontal" class="w-5 h-5 text-slate-600" />
          </template>
          <template #trailing>
            <UIcon name="i-lucide-search" class="w-5 h-5 text-slate-600" />
          </template>
        </UInput>
      </div>

      <!-- Right: Action Icons -->
      <div class="flex items-center gap-2">
        <UButton icon="i-lucide-bell" color="neutral" variant="ghost" size="lg" aria-label="Notifications" />
        <UButton icon="i-lucide-heart" color="neutral" variant="ghost" size="lg" aria-label="Wishlist" />
        <UButton icon="i-lucide-shopping-cart" color="neutral" variant="ghost" size="lg" aria-label="Cart" />
        <UButton icon="i-lucide-user" color="neutral" variant="ghost" size="lg" aria-label="Profile" />
      </div>
    </UContainer>
    
    <!-- Mobile Search Bar (Visible only on small screens) -->
    <UContainer class="mt-4 md:hidden">
      <UInput
        :placeholder="searchPlaceholder"
        size="lg"
        variant="outline"
        :ui="{
          root: 'w-full',
          base: 'rounded-full border-2 border-slate-800 focus:ring-slate-800'
        }"
      >
        <template #leading>
          <UIcon name="i-lucide-sliders-horizontal" class="w-5 h-5 text-slate-600" />
        </template>
        <template #trailing>
          <UIcon name="i-lucide-search" class="w-5 h-5 text-slate-600" />
        </template>
      </UInput>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isConnectActive = computed(() => route.path === '/connect-collaboration')
const isCollaborationActive = computed(() => route.path === '/collaboration')

const searchPlaceholder = computed(() => {
  if (isCollaborationActive.value) {
    return 'Cari Mentor disini'
  }
  return 'Apa yang kamu cari'
})
</script>
