<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
const router = useRouter()

const patientName = ref('')
const chartNumber = ref('')
const selectedPatient = ref(null)
const selectedLanguage = ref('en-US')

// Mock schedule data
const schedule = [
  {
    id: 1,
    name: 'John Doe',
    time: '09:00 AM',
    details: 'M, 45 • Annual Physical',
    initial: 'JD',
    color: 'bg-blue-100 text-primary'
  },
  {
    id: 2,
    name: 'Jane Smith',
    time: '09:30 AM',
    details: 'F, 32 • Follow-up',
    initial: 'JS',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 3,
    name: 'Robert Johnson',
    time: '10:15 AM',
    details: 'M, 60 • Hypertension Check',
    initial: 'RJ',
    color: 'bg-green-100 text-green-600'
  }
]

const closeModal = () => {
  emit('close')
  // Reset form
  patientName.value = ''
  chartNumber.value = ''
  selectedPatient.value = null
}

const beginRecording = () => {
  if (patientName.value || selectedPatient.value) {
    const newPatient = {
      id: Date.now(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      name: patientName.value || selectedPatient.value.name,
      chartId: chartNumber.value || (selectedPatient.value ? `#${selectedPatient.value.id}000` : '#0000'),
      reason: selectedPatient.value ? selectedPatient.value.details.split('•')[1].trim() : 'New Visit',
      status: 'Generating Note',
      statusColor: 'blue',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAij3-KsHWrS0lsWAQTvpTwMzj8H4vOy0rsJHUZg63XC8j4DwAs1ew7H_H75MW-Sup-cjqt1HZDaQ03yqCPkfDuVZ06NtoY4I9icDEZ68BkGbxOH50Miu9tERemJdkjDgNEgEgk_iJxOvGY_gDJYfVvIz3SwnzYY1ASODNCoEs5ypfe9ai_Z1zpSC40tGHiNDruvv4ajddA3bp4FuMRFtDOi32qVMal3_tIvnoqSAt0sM0I6e8iTI8eSqxzuwxx8Z0Kgeq6CBB32jo' // Default avatar for now
    }
    
    // Add to store (assuming store handles state management)
    store.addPatient(newPatient)
    
    closeModal()
    router.push({ path: '/active-visit', query: { lang: selectedLanguage.value } })
  }
}
</script>

<template>
  <div v-if="isOpen" class="relative z-50 transition-opacity" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity" @click="closeModal"></div>

    <!-- Modal Panel -->
    <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark text-left shadow-2xl transition-all sm:my-8 w-full max-w-2xl border border-white/20 dark:border-gray-700 animate-fade-in-up flex flex-col max-h-[90vh]">
          
          <!-- Header -->
          <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-surface-light dark:bg-surface-dark shrink-0">
            <h2 class="text-2xl font-bold tracking-tight text-text-main dark:text-white leading-tight">Start New Visit</h2>
            <button @click="closeModal" class="text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800">
              <span class="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <!-- Body Content (Scrollable) -->
          <div class="flex-1 overflow-y-auto custom-scrollbar p-6">
            <!-- Search Bar -->
            <div class="mb-6 sticky top-0 bg-surface-light dark:bg-surface-dark z-10 pb-2">
              <label class="flex flex-col w-full h-12 shadow-sm">
                <div class="flex w-full flex-1 items-stretch rounded-lg h-full border border-transparent focus-within:border-primary/50 transition-colors">
                  <div class="text-text-secondary dark:text-gray-400 flex border-none bg-input-bg dark:bg-input-bg-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span class="material-symbols-outlined">search</span>
                  </div>
                  <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-main dark:text-white focus:outline-0 focus:ring-0 border-none bg-input-bg dark:bg-input-bg-dark focus:border-none h-full placeholder:text-text-secondary dark:placeholder:text-gray-500 px-4 pl-2 text-base font-normal leading-normal" placeholder="Search by name or chart #..." value=""/>
                </div>
              </label>
            </div>

            <!-- Schedule List -->
            <div class="mb-2">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-text-main dark:text-white tracking-tight text-lg font-bold leading-tight">Today's Schedule <span class="text-text-secondary dark:text-gray-400 font-medium text-base ml-1">(Oct 24, 2023)</span></h3>
              </div>
              <div class="flex flex-col gap-3">
                <!-- Data-driven Patient Schedule List -->
                <label v-for="patient in schedule" :key="patient.id" class="group relative flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-all" 
                  :class="selectedPatient === patient ? 'border-primary bg-primary/5 dark:bg-primary/20 dark:border-primary/50' : 'border-[#d2d1e5] dark:border-gray-700 hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-gray-800/50'">
                  <input type="radio" name="patient-select" :value="patient" v-model="selectedPatient" class="peer custom-radio h-5 w-5 border-2 border-[#d2d1e5] bg-transparent text-transparent checked:border-primary checked:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary"/>
                  <div class="flex grow flex-col">
                    <div class="flex justify-between items-start">
                      <p class="text-text-main dark:text-white text-base font-bold leading-normal">{{ patient.name }}</p>
                      <span class="bg-gray-100 dark:bg-gray-700 text-text-secondary dark:text-gray-300 text-xs font-bold px-2 py-1 rounded">{{ patient.time }}</span>
                    </div>
                    <p class="text-text-secondary dark:text-gray-300 text-sm font-medium leading-normal mt-0.5">{{ patient.details }}</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Divider -->
            <div class="relative flex items-center py-6">
              <div class="flex-grow border-t border-[#d2d1e5] dark:border-gray-700"></div>
              <span class="flex-shrink-0 mx-4 text-text-secondary dark:text-gray-500 text-sm font-medium">Or enter manually</span>
              <div class="flex-grow border-t border-[#d2d1e5] dark:border-gray-700"></div>
            </div>

            <!-- Manual Entry Form -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-text-main dark:text-gray-300">Chart Number</label>
                <input v-model="chartNumber" class="w-full h-12 rounded-lg border-transparent bg-input-bg dark:bg-input-bg-dark px-4 text-text-main dark:text-white placeholder:text-text-secondary/50 focus:border-primary focus:bg-white dark:focus:bg-input-bg-dark focus:ring-0 transition-all font-mono" placeholder="e.g. 12345" type="text" @focus="selectedPatient = null"/>
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-text-main dark:text-gray-300">Patient Name</label>
                <input v-model="patientName" class="w-full h-12 rounded-lg border-transparent bg-input-bg dark:bg-input-bg-dark px-4 text-text-main dark:text-white placeholder:text-text-secondary/50 focus:border-primary focus:bg-white dark:focus:bg-input-bg-dark focus:ring-0 transition-all" placeholder="e.g. Alex Doe" type="text" @focus="selectedPatient = null"/>
              </div>
               <!-- Language Selection -->
               <div class="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-text-main dark:text-gray-300">Conversation Language</label>
                <select v-model="selectedLanguage" class="w-full h-12 rounded-lg border-transparent bg-input-bg dark:bg-input-bg-dark px-4 text-text-main dark:text-white focus:border-primary focus:ring-0 transition-all">
                  <option value="en-US">English (US)</option>
                  <option value="id-ID">Bahasa Indonesia</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="px-6 py-5 bg-gray-50 dark:bg-background-dark border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3 shrink-0">
            <button @click="closeModal" class="px-6 py-2.5 rounded-lg text-text-main dark:text-white font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Cancel
            </button>
            <button @click="beginRecording" class="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-md shadow-primary/30 transition-all flex items-center gap-2 group" :disabled="!patientName && !selectedPatient" :class="{ 'opacity-50 cursor-not-allowed': !patientName && !selectedPatient }">
              <span class="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">mic</span>
              Begin Recording
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-radio {
  background-image: none;
}
.custom-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}
</style>
