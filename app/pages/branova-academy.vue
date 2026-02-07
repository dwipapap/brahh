<template>
  <div class="flex min-h-screen bg-white">
    <AcademySidebar v-model="activeSection" />

    <div class="flex-1 flex flex-col">
      <AcademyHeader />

      <main class="flex-1 p-6 bg-gray-50">
        <template v-if="activeSection === 'mini-bootcamp'">
          <AcademyPromoBanner class="mb-8" />

          <section>
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Video Pembelajaran</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AcademyVideoCard
                v-for="video in videos"
                :key="video.id"
                :title="video.title"
                :description="video.description"
                :views="video.views"
                :rating="video.rating"
                :price="video.price"
                :thumbnail="video.thumbnail"
              />
            </div>
          </section>
        </template>

        <template v-else-if="activeSection === 'event-live'">
          <section>
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Event Live</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AcademyEventCard
                v-for="event in events"
                :key="event.id"
                :speaker-name="event.speakerName"
                :speaker-title="event.speakerTitle"
                :speaker-company="event.speakerCompany"
                :speaker-role="event.speakerRole"
                :speaker-photo="event.speakerPhoto"
                :event-title="event.eventTitle"
                :event-date="event.eventDate"
                :price="event.price"
              />
            </div>
          </section>
        </template>

        <template v-else-if="activeSection === 'e-course'">
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-6">E-Course</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AcademyCourseCard
              v-for="course in courses"
              :key="course.id"
              :title="course.title"
              :reviews="course.reviews"
              :topics="course.topics"
              :materials="course.materials"
              :thumbnail="course.thumbnail"  
            />
          </div>
        </section>
        </template>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tambahkan baris import ini jika auto-import Nuxt kamu sedang bermasalah
const activeSection = ref('mini-bootcamp')

useHead({
  title: 'Branova Academy - Go Digital, Go Profit!',
  meta: [
    { name: 'description', content: 'Kuasai Branding & Marketing Digital untuk Bisnismu dengan Branova Academy' }
  ]
})

const videos = [
  {
    id: 1,
    title: 'Tips & Trik: Strategi Branding & Marketing Digital untuk UMKM',
    description: 'Usaha udah bertahun-tahun tapi bisnis ak berkembang? yuk simak cara branding & marketing UMKM kalian...',
    views: '5.123',
    rating: '4.5',
    price: 'Gratis',
    thumbnail: '/branding-umkm.png'
  },
  {
    id: 2,
    title: 'Desain Keren Gak Cukup! Ini Cara Bikin UI/UX yang Disukai Pengguna',
    description: 'Percuma website development kalian bagus, tapi tampilannya membosankan. Ayo bangun website menarik...',
    views: '7.860',
    rating: '4.9',
    price: 'Gratis',
    thumbnail: '/uiux-design.png'
  },
  {
    id: 3,
    title: 'Bangun Website Profesional Sekarang',
    description: 'Selain memiliki manajemen bisnis yang bagus, kita juga perlu untuk memiliki skill manajemen website agar bisnis kita lebih...',
    views: '3.200',
    rating: '4.6',
    price: 'Rp 500.000',
    thumbnail: '/web-pro.png'
  },
  {
    id: 4,
    title: 'Sosial Media Marketing untuk UMKM',
    description: 'Pelajari cara memaksimalkan media sosial untuk meningkatkan penjualan bisnis UMKM Anda...',
    views: '4.500',
    rating: '4.7',
    price: 'Gratis',
    thumbnail: '/sosmed-marketing.png'
  },
  {
    id: 5,
    title: 'Digital Mindset & Fundamental',
    description: 'Dasar-dasar pemikiran digital yang harus dimiliki setiap pebisnis di era modern...',
    views: '6.100',
    rating: '4.8',
    price: 'Gratis',
    thumbnail: '/digital-mindset.png'
  },
  {
    id: 6,
    title: 'Digital Advertising & Customer Engagement',
    description: 'Strategi iklan digital dan cara membangun engagement dengan pelanggan...',
    views: '2.800',
    rating: '4.4',
    price: 'Rp 350.000',
    thumbnail: '/digital-ads.png'
  }
]

const events = [
  {
    id: 1,
    speakerName: 'Budi Santoso',
    speakerPhoto: '/budi.png',
    speakerTitle: 'Marketing Director',
    speakerCompany: 'PT Digital Indonesia',
    speakerRole: 'Specialist Marketing',
    eventTitle: 'Strategi Digital Marketing untuk UMKM di Era Modern',
    eventDate: '21 April 2025',
    price: 'Gratis'
  },
  {
    id: 2,
    speakerName: 'Siti Rahayu',
    speakerPhoto: '/siti.png',
    speakerTitle: 'Creative Director',
    speakerCompany: 'Kreasi Nusantara',
    speakerRole: 'Designer Graphich',
    eventTitle: 'Desain Visual yang Menarik untuk Brand UMKM',
    eventDate: '28 April 2025',
    price: 'Rp 150.000'
  },
  {
    id: 3,
    speakerName: 'Andi Wijaya',
    speakerPhoto: '/andi.png',
    speakerTitle: 'Tech Lead',
    speakerCompany: 'Startup Hub',
    speakerRole: 'Digital Innovator',
    eventTitle: 'Transformasi Digital: Langkah Awal Menuju Bisnis Online',
    eventDate: '5 Mei 2025',
    price: 'Gratis'
  },
  {
    id: 4,
    speakerName: 'Maya Putri',
    speakerPhoto: '/maya.png',
    speakerTitle: 'Content Strategist',
    speakerCompany: 'Media Kreatif',
    speakerRole: 'Content Creator',
    eventTitle: 'Membuat Konten yang Viral di Media Sosial',
    eventDate: '12 Mei 2025',
    price: 'Rp 100.000'
  },
  {
    id: 5,
    speakerName: 'Rizky Pratama',
    speakerPhoto: '/rizky.png',
    speakerTitle: 'E-commerce Specialist',
    speakerCompany: 'Tokopedia',
    speakerRole: 'E-commerce Expert',
    eventTitle: 'Memaksimalkan Penjualan di Marketplace',
    eventDate: '19 Mei 2025',
    price: 'Gratis'
  },
  {
    id: 6,
    speakerName: 'Linda Sari',
    speakerPhoto: '/linda.png',
    speakerTitle: 'Brand Manager',
    speakerCompany: 'Unilever Indonesia',
    speakerRole: 'Brand Specialist',
    eventTitle: 'Membangun Brand Identity yang Kuat',
    eventDate: '26 Mei 2025',
    price: 'Rp 200.000'
  }
]

const courses = [
  {
    id: 1,
    title: 'Website Development',
    reviews: 150,
    topics: 7,
    materials: 72,
    thumbnail: '/course-web.png'
  },
  {
    id: 2,
    title: 'Digital Marketing',
    reviews: 230,
    topics: 10,
    materials: 95,
    thumbnail: '/course-digital-marketing.png'
  },
  {
    id: 3,
    title: 'Desain Grafis',
    reviews: 180,
    topics: 8,
    materials: 64,
    thumbnail: '/course-design.png'
  },
  {
    id: 4,
    title: 'Social Media Management',
    reviews: 120,
    topics: 6,
    materials: 48,
    thumbnail: '/course-social-media.png'
  },
  {
    id: 5,
    title: 'E-commerce & Marketplace',
    reviews: 95,
    topics: 5,
    materials: 40,
    thumbnail: '/course-ecommerce.png'
  },
  {
    id: 6,
    title: 'Content Creation',
    reviews: 200,
    topics: 9,
    materials: 78,
    thumbnail: '/course-content-creation.png'
  }
]
</script>