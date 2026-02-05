<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <CCHeader />

    <!-- Main Content -->
    <UContainer class="py-8">
      <div class="flex gap-6">
        <!-- Sidebar -->
        <CollaborationSidebar v-model="selectedCategory" />

        <!-- Mentor Grid -->
        <div class="flex-1">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <MentorCard
              v-for="mentor in filteredMentors"
              :key="mentor.id"
              :name="mentor.name"
              :photo="mentor.photo"
              :expertises="mentor.expertises"
              :age="mentor.age"
              :location="mentor.location"
              :description="mentor.description"
              :rating="mentor.rating"
              :price="mentor.price"
            />
          </div>

          <!-- Empty State -->
          <div v-if="filteredMentors.length === 0" class="text-center py-12">
            <UIcon name="i-lucide-users" class="text-6xl text-slate-300 mb-4" />
            <h3 class="text-lg font-semibold text-slate-600">Tidak ada mentor ditemukan</h3>
            <p class="text-slate-500">Coba pilih kategori lain atau hapus filter</p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
interface Expertise {
  icon: string
  label: string
}

interface Mentor {
  id: number
  name: string
  photo: string
  expertises: Expertise[]
  age: number
  location: string
  description: string
  rating: number
  price: number
  categories: string[]
}

const selectedCategory = ref('')

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Daffa Asyqar',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '🎨', label: 'IT (Teknologi)' },
      { icon: '💻', label: 'Developer' },
    ],
    age: 22,
    location: 'Riau, Indonesia',
    description: 'Saya adalah mentor yang ahli dalam teknologi dan pengembangan software. Dengan pengalaman lebih dari 3 tahun di industri, saya siap membantu Anda berkembang.',
    rating: 4.96,
    price: 250000,
    categories: ['it'],
  },
  {
    id: 2,
    name: 'Sarah Amelia',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '📈', label: 'Marketing' },
      { icon: '🎯', label: 'Digital Strategy' },
    ],
    age: 28,
    location: 'Jakarta, Indonesia',
    description: 'Spesialis digital marketing dengan fokus pada growth strategy dan brand development. Pengalaman menangani berbagai startup dan UMKM.',
    rating: 4.89,
    price: 350000,
    categories: ['marketing'],
  },
  {
    id: 3,
    name: 'Budi Santoso',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '💰', label: 'Funding' },
      { icon: '📊', label: 'Investment' },
    ],
    age: 35,
    location: 'Surabaya, Indonesia',
    description: 'Konsultan keuangan dengan pengalaman membantu startup mendapatkan pendanaan. Sudah membantu lebih dari 50 startup raise funding.',
    rating: 4.92,
    price: 500000,
    categories: ['funding'],
  },
  {
    id: 4,
    name: 'Maya Putri',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '📋', label: 'Business Plan' },
      { icon: '🚀', label: 'Startup' },
    ],
    age: 30,
    location: 'Bandung, Indonesia',
    description: 'Expert dalam menyusun business plan yang menarik investor. Berpengalaman di berbagai industri mulai dari F&B hingga teknologi.',
    rating: 4.85,
    price: 300000,
    categories: ['business-plan'],
  },
  {
    id: 5,
    name: 'Rizky Pratama',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '🔄', label: 'Business Development' },
      { icon: '🤝', label: 'Partnership' },
    ],
    age: 32,
    location: 'Yogyakarta, Indonesia',
    description: 'Spesialis business development dengan jaringan luas di berbagai industri. Siap membantu mengembangkan bisnis Anda ke level berikutnya.',
    rating: 4.78,
    price: 400000,
    categories: ['business-development'],
  },
  {
    id: 6,
    name: 'Andi Wijaya',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '⚠️', label: 'Risk Management' },
      { icon: '📉', label: 'Analysis' },
    ],
    age: 40,
    location: 'Semarang, Indonesia',
    description: 'Konsultan risk management berpengalaman 15 tahun. Membantu bisnis mengidentifikasi dan memitigasi risiko operasional dan finansial.',
    rating: 4.95,
    price: 450000,
    categories: ['risk-management'],
  },
]

const filteredMentors = computed(() => {
  if (!selectedCategory.value) {
    return mentors
  }
  return mentors.filter(mentor => mentor.categories.includes(selectedCategory.value))
})
</script>
