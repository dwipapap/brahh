<template>
  <div class="min-h-screen bg-gray-50">
    <CCHeader />

    <UContainer class="py-8">
      <div class="flex flex-col lg:flex-row gap-6">
        <CollaborationSidebar v-model="selectedCategory" class="w-full lg:w-64 shrink-0" />

        <div class="flex-1">
          <div class="flex flex-col gap-4">
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

          <div v-if="filteredMentors.length === 0" class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
            <UIcon name="i-lucide-users" class="text-6xl text-slate-300 mb-4" />
            <h3 class="text-lg font-semibold text-slate-600">Tidak ada mentor ditemukan</h3>
            <p class="text-slate-500">Coga pilih kategori lain atau hapus filter</p>
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
    name: 'Abel Hasti Ramadhani',
    photo: '/abel.png',
    expertises: [
      { icon: '🎨', label: 'IT (Teknologi)' },
      { icon: '💻', label: 'Developer' },
    ],
    age: 22,
    location: 'Riau, Indonesia',
    description: 'Saya adalah mentor yang ahli dalam teknologi dan pengembangan software. Dengan pengalaman lebih dari 3 tahun di industri.',
    rating: 4.96,
    price: 250000,
    categories: ['it'],
  },
  {
    id: 2,
    name: 'Chairil Randy Nurrahman',
    photo: '/randy.png',
    expertises: [
      { icon: '📈', label: 'Marketing' },
      { icon: '🎯', label: 'Digital Strategy' },
    ],
    age: 23,
    location: 'Jakarta, Indonesia',
    description: 'Spesialis digital marketing dengan fokus pada growth strategy dan brand development.',
    rating: 4.89,
    price: 350000,
    categories: ['marketing'],
  },
  {
    id: 3,
    name: 'Ebel Vigrajuska Asri',
    photo: '/ebel.png',
    expertises: [
      { icon: '💰', label: 'Funding' },
      { icon: '📊', label: 'Investment' },
    ],
    age: 25,
    location: 'Surabaya, Indonesia',
    description: 'Konsultan keuangan dengan pengalaman membantu startup mendapatkan pendanaan.',
    rating: 4.92,
    price: 500000,
    categories: ['funding'],
  },
  {
    id: 4,
    name: 'Hanny Sc Va',
    photo: '/hanny.png',
    expertises: [
      { icon: '📋', label: 'Business Plan' },
      { icon: '🚀', label: 'Startup' },
    ],
    age: 23,
    location: 'Bandung, Indonesia',
    description: 'Expert dalam menyusun business plan yang menarik investor beragai industri.',
    rating: 4.85,
    price: 300000,
    categories: ['business-plan'],
  },
  {
    id: 5,
    name: 'Rizky Pratama',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '🔄', label: 'Business Development' },
      { icon: '🤝', label: 'Partnership' },
    ],
    age: 32,
    location: 'Yogyakarta, Indonesia',
    description: 'Spesialis business development dengan jaringan luas di berbagai industri.',
    rating: 4.78,
    price: 400000,
    categories: ['business-development'],
  },
  {
    id: 6,
    name: 'Sarah Wijaya',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '⚠️', label: 'Risk Management' },
      { icon: '📉', label: 'Analysis' },
    ],
    age: 40,
    location: 'Semarang, Indonesia',
    description: 'Konsultan risk management berpengalaman 15 tahun mitigasi risiko bisnis.',
    rating: 4.95,
    price: 450000,
    categories: ['risk-management'],
  },
  // --- 4 MENTOR TAMBAHAN ---
  {
    id: 7,
    name: 'Faisal Hakim',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '💹', label: 'Pricing' },
      { icon: '📊', label: 'Market Research' },
    ],
    age: 29,
    location: 'Medan, Indonesia',
    description: 'Ahli dalam strategi penetapan harga dan riset pasar untuk produk UMKM lokal.',
    rating: 4.87,
    price: 275000,
    categories: ['marketing', 'business-development'],
  },
  {
    id: 8,
    name: 'Dewi Lestari',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '🎨', label: 'Visual Branding' },
      { icon: '📸', label: 'Content Creator' },
    ],
    age: 26,
    location: 'Palembang, Indonesia',
    description: 'Membantu optimasi konten visual dan branding identitas untuk toko online Anda.',
    rating: 4.95,
    price: 320000,
    categories: ['marketing'],
  },
  {
    id: 9,
    name: 'Kevin Pratama',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=250&fit=crop&crop=face',
    expertises: [
      { icon: '📦', label: 'Operations' },
      { icon: '🚚', label: 'Supply Chain' },
    ],
    age: 33,
    location: 'Makassar, Indonesia',
    description: 'Mentor spesialis supply chain dan manajemen operasional bisnis digital skala besar.',
    rating: 4.82,
    price: 450000,
    categories: ['it', 'business-development'],
  },
  {
    id: 10,
    name: 'Nina Amelia',
    photo: '/nina.png',
    expertises: [
      { icon: '✍️', label: 'Copywriting' },
      { icon: '🎯', label: 'Conversion' },
    ],
    age: 27,
    location: 'Malang, Indonesia',
    description: 'Pakar copywriting yang fokus pada konversi penjualan tinggi di landing page.',
    rating: 4.91,
    price: 280000,
    categories: ['marketing', 'business-plan'],
  }
]

const filteredMentors = computed(() => {
  if (!selectedCategory.value) {
    return mentors
  }
  return mentors.filter(mentor => mentor.categories.includes(selectedCategory.value.toLowerCase()))
})
</script>