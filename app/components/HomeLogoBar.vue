<template>
  <div class="bg-white py-4 border-b border-gray-100">
    <UContainer class="flex items-center justify-between gap-4">
      <!-- Logo Section -->
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-sparkles" class="w-6 h-6 text-primary-500" />
        <span class="text-xl font-bold text-slate-900">Branova</span>
      </div>

      <!-- Search Section -->
      <div class="flex-1 max-w-lg mx-auto">
        <UTooltip text="Coming Soon" :popper="{ placement: 'bottom' }">
          <UInput
            icon="i-lucide-search"
            placeholder="Cari disini"
            disabled
            class="w-full"
            :ui="{ icon: { trailing: { pointer: '' } } }"
          />
        </UTooltip>
      </div>

      <!-- Action Icons Section -->
      <div class="flex items-center gap-1">
        <UButton
          icon="i-lucide-heart"
          color="gray"
          variant="ghost"
          aria-label="Wishlist"
        />
        <UButton
          icon="i-lucide-bell"
          color="gray"
          variant="ghost"
          aria-label="Notifications"
        />
        <UButton
          icon="i-lucide-user"
          color="gray"
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
