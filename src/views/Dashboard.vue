<script setup>
import { ref } from 'vue'
import StartVisitModal from '../components/StartVisitModal.vue'

const isModalOpen = ref(false)
</script>

<template>
  <div class="flex flex-1 flex-col overflow-y-auto bg-background-light dark:bg-background-dark h-full">
    <!-- Top Navbar -->
    <header class="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-border-light dark:border-gray-700 bg-white/80 dark:bg-[#1a1a2e]/90 px-6 backdrop-blur-md">
      <!-- Search -->
      <div class="flex flex-1 max-w-lg">
        <div class="relative w-full">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="material-symbols-outlined text-[#555393] dark:text-gray-400">search</span>
          </div>
          <input class="block w-full rounded-lg border-0 bg-[#e8e8f2] dark:bg-gray-800 py-2 pl-10 pr-4 text-sm text-[#0f0f1a] placeholder-[#555393] focus:ring-2 focus:ring-primary dark:text-white dark:placeholder-gray-500" placeholder="Search patients or notes..." type="text"/>
        </div>
      </div>
      <!-- Right Actions -->
      <div class="flex items-center gap-4 pl-4">
        <button class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-gray-800 hover:bg-[#e8e8f2] dark:hover:bg-gray-700 transition-colors border border-border-light dark:border-gray-700 text-[#0f0f1a] dark:text-white">
          <span class="material-symbols-outlined text-[20px]">notifications</span>
          <span class="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-gray-800"></span>
        </button>
        <div class="h-8 w-[1px] bg-[#e8e8f2] dark:bg-gray-700"></div>
        <div class="flex items-center gap-3">
          <div class="text-right hidden sm:block">
            <p class="text-sm font-bold text-[#0f0f1a] dark:text-white">Dr. Emily Stone</p>
            <p class="text-xs text-[#555393] dark:text-gray-400">Online</p>
          </div>
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-gray-800 shadow-sm cursor-pointer" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUJ84L2LeCVQcEmc8r_QJNWZKp4Oe2rahhaDa05-SNHwUk3npEIbGMmy9KFtM_2Bzo_vKM0FOjW_bdpAE_Yr_8ZwM6ZWURc9p2JaHqtiI7RtV4mMYIQqUlHZl6h3-TQZcSb6IJVqjcU-wo-EGA75Rj6053pEMY_6L7VHROB7Wspggavn19hB0LUIxxJuiXAAgokmi0U1pDm_F5-Y2EEhVymN4UrcEQA86nXTq8qvk_0XKlmPTtvQA8Qs0DTnPMhHNBFNf64gGItGo");'></div>
        </div>
      </div>
    </header>

    <!-- Dashboard Content -->
    <main class="flex flex-1 flex-col p-6 lg:p-10 max-w-7xl mx-auto w-full">
      <!-- Page Heading -->
      <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 class="text-3xl font-extrabold tracking-tight text-[#0f0f1a] dark:text-white md:text-4xl">Good Morning, Dr. Emily</h1>
          <p class="mt-2 text-base text-[#555393] dark:text-gray-400">Here is your daily overview and upcoming schedule.</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-medium text-[#555393] dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-sm border border-border-light dark:border-gray-700">
            Oct 24, 2023
          </span>
        </div>
      </div>

      <!-- Feature/Stats Section -->
      <div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-12">
        <!-- Primary Action (Prominent) -->
        <div class="md:col-span-12 lg:col-span-4 flex flex-col">
          <button @click="isModalOpen = true" class="group relative flex w-full flex-1 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary p-8 text-center text-white shadow-lg shadow-primary/30 transition-all hover:scale-[1.01] hover:shadow-primary/40 cursor-pointer">
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <span class="material-symbols-outlined text-[32px]">add</span>
            </div>
            <div class="z-10">
              <h2 class="text-xl font-bold">START NEW VISIT</h2>
              <p class="text-primary-100 mt-1 text-sm opacity-90">Record and transcribe now</p>
            </div>
          </button>
        </div>
        
        <!-- Stats Cards -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="flex h-full flex-col justify-between rounded-xl border border-border-light dark:border-gray-700 bg-white dark:bg-[#1a1a2e] p-6 shadow-sm">
            <div class="mb-4 flex items-start justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e8e8f2] dark:bg-gray-800 text-primary dark:text-blue-400">
                <span class="material-symbols-outlined text-[28px]">monitoring</span>
              </div>
              <span class="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">+12%</span>
            </div>
            <div>
              <h3 class="text-3xl font-extrabold text-[#0f0f1a] dark:text-white">5/12</h3>
              <p class="text-sm font-medium text-[#555393] dark:text-gray-400">Patients Seen Today</p>
            </div>
            <div class="mt-4 h-1.5 w-full rounded-full bg-[#e8e8f2] dark:bg-gray-700">
              <div class="h-1.5 w-[42%] rounded-full bg-primary"></div>
            </div>
          </div>
        </div>

        <div class="md:col-span-6 lg:col-span-4">
          <div class="flex h-full flex-col justify-between rounded-xl border border-border-light dark:border-gray-700 bg-white dark:bg-[#1a1a2e] p-6 shadow-sm">
            <div class="mb-4 flex items-start justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#e8e8f2] dark:bg-gray-800 text-primary dark:text-blue-400">
                <span class="material-symbols-outlined text-[28px]">schedule</span>
              </div>
              <span class="rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">-2m</span>
            </div>
            <div>
              <h3 class="text-3xl font-extrabold text-[#0f0f1a] dark:text-white">14m</h3>
              <p class="text-sm font-medium text-[#555393] dark:text-gray-400">Avg. Time per Visit</p>
            </div>
            <div class="mt-4 flex items-center gap-2 text-xs text-[#555393] dark:text-gray-400">
              <span class="material-symbols-outlined text-[16px]">trending_down</span>
              <span>Faster than yesterday</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Today's Schedule Table -->
        <div class="col-span-1 lg:col-span-2 flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-[#0f0f1a] dark:text-white">Today's Schedule</h2>
            <button class="text-sm font-bold text-primary hover:underline">View Calendar</button>
          </div>
          <div class="overflow-hidden rounded-xl border border-border-light dark:border-gray-700 bg-white dark:bg-[#1a1a2e] shadow-sm">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm">
                <thead class="bg-[#f9f8fb] dark:bg-gray-800/50 text-[#555393] dark:text-gray-400">
                  <tr>
                    <th class="px-6 py-4 font-semibold">Time</th>
                    <th class="px-6 py-4 font-semibold">Patient</th>
                    <th class="px-6 py-4 font-semibold">Reason</th>
                    <th class="px-6 py-4 font-semibold">Status</th>
                    <th class="px-6 py-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-border-light dark:divide-gray-700">
                  <tr class="group hover:bg-[#f9f8fb] dark:hover:bg-gray-800/30 transition-colors">
                    <td class="px-6 py-4 font-bold text-[#0f0f1a] dark:text-white">09:00 AM</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="h-8 w-8 rounded-full bg-blue-100 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAitJtyY0D7e_WAi_BOftm2jNBWuszUzNlgssmYI3XDHYExXv94CYOuLEUyNJlOwYz9B_-HLgVB_ijtWUn6tLRShqbEFCH2CmjGkKWB2Kw-D2QknDx73i_KdRfiGjQF9-Lz5vYVuweiDmUMTNLpHoOxhYMGZN0ctlFkcpnqVL1YYPmi7QqxqKyKO71ncuqZrBqPNrX_rythTN85MHmOrB5z6dWiWYFgYcnrj04r0vbL7E2enUO6AtthuvjJKO6p8ZFdouwipjiH-nM");'></div>
                        <span class="font-semibold text-[#0f0f1a] dark:text-white">John Doe</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-[#555393] dark:text-gray-400">Hypertension Follow-up</td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:text-green-400">Completed</span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button class="text-[#555393] hover:text-primary dark:text-gray-400 dark:hover:text-blue-400">
                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="group hover:bg-[#f9f8fb] dark:hover:bg-gray-800/30 transition-colors">
                    <td class="px-6 py-4 font-bold text-[#0f0f1a] dark:text-white">10:30 AM</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="h-8 w-8 rounded-full bg-purple-100 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiXxyK7RuqHjBChHjEZKz2r-M6r3l9yiv8HhMzA9HZzdn_9US6pjtQ2MPUG8vuWVo-1ipAKpFsTkUwq954SuaqUsB12cobqCcuaCwqVGzWSaBctwzhPEO-oyTqt8lBIe0WMyAW7qe1-IDP1d7VcCcXQ9q8yFsMzFS5F2eFoVR5alOFNtVjnMPn6582Bn_ddupHcRlKpNCx2fjl0qRFO4sRqta2kwrmIG4yxVTnXLVNCE-IIIKtcBWaxyHoUTvD58AEOU1Sdl72KIg");'></div>
                        <span class="font-semibold text-[#0f0f1a] dark:text-white">Sarah Smith</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-[#555393] dark:text-gray-400">Annual Physical</td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-bold text-green-700 dark:text-green-400">Completed</span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button class="text-[#555393] hover:text-primary dark:text-gray-400 dark:hover:text-blue-400">
                        <span class="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>
                  <!-- Active row -->
                  <tr class="bg-primary/5 hover:bg-primary/10 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    <td class="px-6 py-4 font-bold text-primary dark:text-blue-300">01:15 PM</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="h-8 w-8 rounded-full bg-orange-100 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWxqDEeTT2RL-xwclusFwRc5CPqpU-FZe7lgZH0CXH55XZZSGOQrvdsG1oCrJqEu3gtc9H8744tSvGgBQzAabX8zMO4v03fMo3dlnMfZW_WtEnOj_jofle1DEkLvKXieAaS5DcChkq-EA4rhWKEmivXZr5K7yzq7o_nNjvNi1Lxy-0XxtJoVsK8BOgzjqaMVb-MRbxAR-IqJWwVtKuMGh1DjpO38GdZoBlRYoOZwjlomPjsDSlPdMoTJkQa2usI9-f-hlDtVi8jwA");'></div>
                        <span class="font-semibold text-[#0f0f1a] dark:text-white">Michael Brown</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-[#555393] dark:text-gray-400">Acute Bronchitis</td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-bold text-primary dark:text-blue-300">In Progress</span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button class="text-primary hover:text-primary/80 dark:text-blue-300 dark:hover:text-blue-200">
                        <span class="material-symbols-outlined text-[20px]">edit_document</span>
                      </button>
                    </td>
                  </tr>
                  <tr class="group hover:bg-[#f9f8fb] dark:hover:bg-gray-800/30 transition-colors">
                    <td class="px-6 py-4 font-bold text-[#0f0f1a] dark:text-white">02:45 PM</td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="h-8 w-8 rounded-full bg-pink-100 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZkE_MSjh4rs_6ONQzSlSwQbQW8CufZsBmMtHykdeRBo_H5dyw-bUryzjrWahUqu2geYPUqmKNL6MUUYEHjwS-rpzUHIdZRZRnvlmOqAk1Z0_RG1LTwG7YS4kA4zmmMEan_Le02Feo9aI1egHlH0JQfQk2Hg06ANaNcoPaSnhS_UcTUcb8gZoo-XYNJv3yahxcwrIFpuoaq7YOeNgJ7NPZQW3J8rxuiv3IGxmauUnMRncp7kE6v4OLEQbqXnYlx6KipszGIuuEwVs");'></div>
                        <span class="font-semibold text-[#0f0f1a] dark:text-white">Emma Wilson</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-[#555393] dark:text-gray-400">Migraine Consult</td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-bold text-gray-600 dark:text-gray-300">Upcoming</span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button class="text-[#555393] hover:text-primary dark:text-gray-400 dark:hover:text-blue-400">
                        <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Recent Notes (Quick Access) -->
        <div class="col-span-1 flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-[#0f0f1a] dark:text-white">Recent Notes</h2>
            <button class="text-sm font-bold text-primary hover:underline">View All</button>
          </div>
          <div class="flex flex-col gap-3">
            <!-- Note Card 1 -->
            <div class="group flex cursor-pointer flex-col gap-2 rounded-xl border border-border-light dark:border-gray-700 bg-white dark:bg-[#1a1a2e] p-4 shadow-sm transition-all hover:border-primary hover:shadow-md dark:hover:border-blue-500">
              <div class="flex items-start justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400">
                    <span class="material-symbols-outlined text-[18px]">description</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-[#0f0f1a] dark:text-white">John Doe</h4>
                    <p class="text-xs text-[#555393] dark:text-gray-400">Today, 09:45 AM</p>
                  </div>
                </div>
                <span class="material-symbols-outlined text-[#d2d1e5] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">chevron_right</span>
              </div>
              <div class="mt-2 rounded-lg bg-[#f9f8fb] dark:bg-gray-800 p-2">
                <p class="line-clamp-2 text-xs leading-relaxed text-[#555393] dark:text-gray-400">Subjective: Patient reports continued headaches. BP 140/90. Assessment: Controlled HTN. Plan: Refill Lisinopril.</p>
              </div>
            </div>
            <!-- Note Card 2 -->
            <div class="group flex cursor-pointer flex-col gap-2 rounded-xl border border-border-light dark:border-gray-700 bg-white dark:bg-[#1a1a2e] p-4 shadow-sm transition-all hover:border-primary hover:shadow-md dark:hover:border-blue-500">
              <div class="flex items-start justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400">
                    <span class="material-symbols-outlined text-[18px]">description</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-[#0f0f1a] dark:text-white">Sarah Smith</h4>
                    <p class="text-xs text-[#555393] dark:text-gray-400">Today, 11:15 AM</p>
                  </div>
                </div>
                <span class="material-symbols-outlined text-[#d2d1e5] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">chevron_right</span>
              </div>
              <div class="mt-2 rounded-lg bg-[#f9f8fb] dark:bg-gray-800 p-2">
                <p class="line-clamp-2 text-xs leading-relaxed text-[#555393] dark:text-gray-400">Subjective: Feeling well, no complaints. Annual checkup. Vitals stable. Plan: Routine bloodwork ordered.</p>
              </div>
            </div>
            <!-- Note Card 3 -->
            <div class="group flex cursor-pointer flex-col gap-2 rounded-xl border border-border-light dark:border-gray-700 bg-white dark:bg-[#1a1a2e] p-4 shadow-sm transition-all hover:border-primary hover:shadow-md dark:hover:border-blue-500">
              <div class="flex items-start justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400">
                    <span class="material-symbols-outlined text-[18px]">description</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-[#0f0f1a] dark:text-white">Robert Johnson</h4>
                    <p class="text-xs text-[#555393] dark:text-gray-400">Yesterday, 04:30 PM</p>
                  </div>
                </div>
                <span class="material-symbols-outlined text-[#d2d1e5] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">chevron_right</span>
              </div>
              <div class="mt-2 rounded-lg bg-[#f9f8fb] dark:bg-gray-800 p-2">
                <p class="line-clamp-2 text-xs leading-relaxed text-[#555393] dark:text-gray-400">Subjective: Left knee pain after running. Exam: Mild swelling, stable ligaments. Plan: RICE, NSAIDs, f/u 2 weeks.</p>
              </div>
            </div>
          </div>
          
          <!-- Mini Calendar Widget -->
          <div class="mt-2 rounded-xl bg-gradient-to-br from-primary to-[#3833cc] p-4 text-white shadow-md">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold">November 2023</h3>
              <span class="material-symbols-outlined text-[18px]">calendar_month</span>
            </div>
            <div class="mt-3 flex justify-between text-xs opacity-80">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>
            <div class="mt-2 flex justify-between text-sm font-bold">
              <span class="opacity-50">20</span><span class="opacity-50">21</span><span>22</span><span class="rounded-full bg-white text-primary w-6 h-6 flex items-center justify-center">23</span><span>24</span><span>25</span><span>26</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <StartVisitModal :isOpen="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>
