<template>
  <div class="flex h-[calc(100vh-64px)] bg-[#F8FAFC] overflow-hidden font-sans">
    
    <div class="w-16 flex flex-col items-center py-6 bg-white/80 backdrop-blur-md border-r border-gray-100 gap-8 z-20">
      <div class="p-2 bg-indigo-100 rounded-lg">
        <UIcon name="i-lucide-sparkles" class="w-6 h-6 text-indigo-600" />
      </div>
      <UIcon 
        name="i-lucide-plus-square" 
        class="w-6 h-6 text-blue-500 cursor-pointer hover:scale-110 transition-transform" 
        @click="resetChat" 
      />
      <div class="mt-auto flex flex-col gap-6 mb-4">
        <UIcon name="i-lucide-home" class="w-5 h-5 text-gray-400 cursor-pointer" />
        <UIcon name="i-lucide-history" class="w-5 h-5 text-gray-400 cursor-pointer" />
        <UIcon name="i-lucide-compass" class="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>
    </div>

    <div class="flex-1 flex flex-col w-full relative">
      
      <main class="flex-1 overflow-y-auto px-6 lg:px-12 py-10 w-full hide-scrollbar">
        
        <div v-if="!isAnswered" class="h-full flex flex-col justify-center animate-in fade-in zoom-in-95 duration-700">
          <div class="mb-12">
            <h1 class="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Hi Septia!
            </h1>
            <p class="text-3xl lg:text-4xl text-gray-400 font-medium tracking-tight">How can I help you today?</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div 
              v-for="(item, index) in suggestions" 
              :key="index" 
              @click="clickSuggestion(item.query)"
              class="bg-white/60 backdrop-blur-sm p-8 rounded-[32px] border border-white shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all cursor-pointer h-44 flex flex-col justify-between group"
            >
              <p class="text-gray-600 text-lg leading-relaxed group-hover:text-indigo-700 transition-colors">{{ item.text }}</p>
              <div class="self-end p-3 bg-indigo-50 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                <UIcon :name="item.icon" class="w-6 h-6 text-indigo-500 group-hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        <div v-else class="space-y-10 animate-in slide-in-from-bottom-8 duration-500">
          <div class="flex justify-end items-start gap-4 pr-2">
            <div class="bg-indigo-600 text-white px-8 py-4 rounded-[24px] rounded-tr-none shadow-lg text-lg font-medium max-w-[80%]">
              {{ currentQuestion }}
            </div>
            <UAvatar 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop" 
              size="md" 
              class="border-2 border-white shadow-sm" 
            />
          </div>

          <div class="flex items-start gap-4 w-full">
            <div class="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-md h-fit">
              <UIcon name="i-lucide-sparkles" class="w-6 h-6 text-white" />
            </div>
            <div class="bg-white/80 backdrop-blur-md p-10 rounded-[40px] rounded-tl-none shadow-sm border border-white flex-1 relative min-h-[400px]">
              <h3 class="font-bold text-3xl text-slate-800 mb-6 border-b border-gray-100 pb-6">{{ currentQuestion }}</h3>
              <div class="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  <strong class="text-indigo-600">UI/UX</strong> stands for <strong>User Interface (UI)</strong> and <strong>User Experience (UX)</strong>, two essential aspects of designing digital products.
                </p>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <li class="p-6 bg-indigo-50/50 rounded-3xl border border-indigo-100 flex gap-4">
                    <UIcon name="i-lucide-layout" class="w-8 h-8 text-indigo-500 shrink-0" />
                    <span><strong class="block text-indigo-900 mb-1">UI Design</strong> Crafts visual elements like buttons and layout to be attractive.</span>
                  </li>
                  <li class="p-6 bg-purple-50/50 rounded-3xl border border-purple-100 flex gap-4">
                    <UIcon name="i-lucide-users" class="w-8 h-8 text-purple-500 shrink-0" />
                    <span><strong class="block text-purple-900 mb-1">UX Design</strong> Focuses on the overall feel and journey of the user.</span>
                  </li>
                </ul>
              </div>
              
              <div class="absolute -right-4 top-0 translate-x-full hidden lg:flex flex-col gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-white text-gray-400">
                <UIcon name="i-lucide-rotate-ccw" class="w-6 h-6 cursor-pointer hover:text-indigo-600" />
                <UIcon name="i-lucide-thumbs-up" class="w-6 h-6 cursor-pointer hover:text-green-600" />
                <UIcon name="i-lucide-thumbs-down" class="w-6 h-6 cursor-pointer hover:text-red-600" />
                <UIcon name="i-lucide-copy" class="w-6 h-6 cursor-pointer hover:text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div class="px-6 lg:px-12 pb-10">
        <div class="w-full relative flex items-center group">
          <UIcon name="i-lucide-mic" class="absolute left-8 w-6 h-6 text-gray-400 z-10" />
          <input 
            v-model="userQuery"
            @keyup.enter="handleSend"
            type="text" 
            placeholder="Ask anything from here..." 
            class="w-full bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full py-6 px-16 text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all z-10 text-slate-900 placeholder:text-gray-400"
          />
          <button @click="handleSend" class="absolute right-6 p-4 bg-slate-900 rounded-full text-white hover:bg-indigo-600 shadow-lg z-10">
            <UIcon name="i-lucide-send" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isAnswered = ref(false)
const userQuery = ref('')
const currentQuestion = ref('')

const suggestions = [
  { text: 'What is UIUX Design?', query: 'What is UIUX Design?', icon: 'i-lucide-layout' },
  { text: 'What to do with kids\' art?', query: 'What to do with kids art', icon: 'i-lucide-palette' },
  { text: 'Find the decade of a photo', query: 'Find photo decade', icon: 'i-lucide-camera' }
]

const handleSend = () => {
  if (userQuery.value.trim() !== '') {
    currentQuestion.value = userQuery.value
    isAnswered.value = true
    userQuery.value = ''
  }
}

const clickSuggestion = (query: string) => {
  currentQuestion.value = query
  isAnswered.value = true
}

const resetChat = () => {
  isAnswered.value = false
  currentQuestion.value = ''
}
</script>

<style scoped>
/* Menghilangkan scrollbar tapi tetap bisa scroll */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>