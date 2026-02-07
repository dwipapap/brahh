<template>
  <div class="flex h-screen bg-gray-50 overflow-hidden">
    <div class="w-16 flex flex-col items-center py-6 bg-white border-r border-gray-100 gap-8">
      <div class="p-2 bg-indigo-100 rounded-lg">
        <UIcon name="i-lucide-sparkles" class="w-6 h-6 text-indigo-600" />
      </div>
      <UIcon name="i-lucide-plus-square" class="w-6 h-6 text-blue-500 cursor-pointer" />
      <div class="mt-auto flex flex-col gap-6 mb-4">
        <UIcon name="i-lucide-home" class="w-5 h-5 text-gray-400" />
        <UIcon name="i-lucide-history" class="w-5 h-5 text-gray-400" />
        <UIcon name="i-lucide-compass" class="w-5 h-5 text-gray-400" />
      </div>
    </div>

    <div class="flex-1 flex flex-col max-w-5xl mx-auto w-full px-6">
      
      <div class="flex-1 overflow-y-auto py-10 space-y-8">
        <div class="flex justify-end gap-4">
          <div class="bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 text-sm max-w-md">
            What is UIUX Design?
          </div>
          <UAvatar src="https://github.com/benjamincanac.png" size="sm" />
        </div>

        <div class="flex gap-4">
          <div class="p-2 bg-indigo-600 rounded-lg h-fit">
            <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-white" />
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1">
            <h3 class="font-bold text-slate-800 mb-4">What is UIUX Design?</h3>
            <div class="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>UI/UX</strong> stands for <strong>User Interface (UI)</strong> and <strong>User Experience (UX)</strong>, two essential aspects of designing digital products.
              </p>
              <ul class="space-y-3">
                <li class="flex gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <span><strong>UI (User Interface)</strong> design is about crafting the visual elements...</span>
                </li>
                <li class="flex gap-2">
                  <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <span><strong>UX (User Experience)</strong> design focuses on the overall experience...</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-8 pt-4">
        <div class="relative flex items-center">
          <input 
            type="text" 
            placeholder="Ask anything from here" 
            class="w-full bg-white border border-gray-200 rounded-full py-4 px-6 pr-14 shadow-sm focus:outline-none"
            readonly
          />
          <button class="absolute right-4 p-2 bg-slate-900 rounded-full text-white">
            <UIcon name="i-lucide-send" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>