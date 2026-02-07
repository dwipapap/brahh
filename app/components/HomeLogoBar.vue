<template>
  <div class="bg-white py-4 border-b border-gray-100">
    <UContainer class="flex items-center justify-between gap-4">
      <!-- Logo Section -->
      <div class="flex items-center gap-2">
      <NuxtLink to="/">
        <img 
          src="/logobranova.png" 
          alt="Logo Branova" 
          class="h-8 w-auto object-contain" 
        />
      </NuxtLink>
      </div>

      <!-- Search Section -->
      <div class="flex-1 max-w-lg mx-auto">
        <UTooltip text="Coming Soon" :popper="{ placement: 'bottom' }">
          <UInput
            placeholder="Cari disini"
            disabled
            variant="outline"
            class="w-full"
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
        </UTooltip>
      </div>

      <!-- Action Icons Section -->
      <div class="flex items-center gap-1">
        <UButton
          icon="i-lucide-heart"
          color="neutral"
          variant="ghost"
          aria-label="Wishlist"
        />
        <UButton
          icon="i-lucide-bell"
          color="neutral"
          variant="ghost"
          aria-label="Notifications"
        />
        <UButton
          icon="i-lucide-user"
          color="neutral"
          variant="ghost"
          aria-label="Profile"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed in future
</script>
