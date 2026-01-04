<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Simulate processing time then redirect
  setTimeout(() => {
    router.push('/visit-review')
  }, 3000)
})
</script>

<template>
  <div class="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display transition-colors duration-200">
    <!-- Header -->
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-4 z-10 shrink-0">
      <div class="flex items-center gap-4">
        <div class="size-8 text-primary flex items-center justify-center">
          <span class="material-symbols-outlined text-3xl">medical_services</span>
        </div>
        <h2 class="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block text-text-main dark:text-white">MedScribe</h2>
        <div class="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block"></div>
        <div class="flex items-center gap-2 text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm">
          <span class="material-symbols-outlined text-[18px] animate-spin">sync</span>
          <span>Processing Visit...</span>
        </div>
      </div>
      <div class="flex flex-1 justify-end gap-4">
        <button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-bold leading-normal border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
          <span class="truncate">Cancel Processing</span>
        </button>
        <div class="hidden md:flex items-center gap-2">
          <div class="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-gray-100 dark:ring-gray-800" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5FwNicGMjtHTTUiiGhkgU7tPwUowJcV4gYDycwx_Xb2uX0goNfT33pmS9y5rrullYpzks_j5XnfhKKKlOKTq4XYux60uJs_8T1_w5MwTvliNvDiVqGsjeFavUX7H7-mkWDg_NEl7_wz54zmTrZO4Ain1ymUQlbcjMM0o1CtGjcSfejL6hlIxA8vl-NueCoEqnJVgRD_O4V653HNEq91DgyPv-XaPfOaj1RggVzYv8O05PxYTbE-5lSBsY0Xq5ii7nF1z7rqPFV4U");'></div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto p-4 md:p-8 lg:px-20 lg:py-10">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        <!-- Left Column: Visuals & Progress -->
        <div class="lg:col-span-8 flex flex-col gap-6">
          <!-- Title Section -->
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-text-main dark:text-white">Processing Visit Data</h1>
            <p class="text-text-secondary dark:text-gray-400 text-base font-normal leading-normal">Please wait while our AI generates your clinical documentation.</p>
          </div>
          <!-- Main Visualization Card -->
          <div class="flex-1 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-8 flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden group">
            <!-- Abstract Background Decoration -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 dark:opacity-20 pointer-events-none"></div>
            <!-- Central AI Visual -->
            <div class="relative mb-10">
              <!-- Outer Ring -->
              <div class="w-48 h-48 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
                <div class="absolute inset-0 border-t-4 border-primary rounded-full animate-spin-slow"></div>
                <!-- Inner Image -->
                <div class="w-36 h-36 rounded-full overflow-hidden pulse-ring bg-primary/5 flex items-center justify-center">
                  <span class="material-symbols-outlined text-6xl text-primary animate-pulse">neurology</span>
                </div>
              </div>
              <!-- Floating Particles (Simulated) -->
              <div class="absolute top-0 right-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-full animate-bounce delay-100">
                <span class="material-symbols-outlined text-primary text-sm">auto_fix</span>
              </div>
              <div class="absolute bottom-4 left-0 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full animate-bounce delay-700">
                <span class="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-sm">mic</span>
              </div>
            </div>
            <!-- Progress Section -->
            <div class="w-full max-w-md flex flex-col gap-4 relative z-10">
              <div class="flex gap-6 justify-between items-end">
                <p class="text-text-main dark:text-white text-lg font-bold leading-normal">Generating SOAP Note...</p>
                <p class="text-primary text-2xl font-bold leading-normal">75%</p>
              </div>
              <div class="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full transition-all duration-500 ease-out relative" style="width: 75%;">
                  <div class="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"></div>
                </div>
              </div>
              <div class="flex justify-center mt-2">
                <div class="flex items-center gap-2 text-text-secondary dark:text-gray-400 text-sm font-medium bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-100 dark:border-gray-700">
                  <span class="material-symbols-outlined text-base">timer</span>
                  <span>Estimated time remaining: ~30 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column: Context & Checklist -->
        <div class="lg:col-span-4 flex flex-col gap-6">
          <!-- Visit Summary Card -->
          <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-5">
            <div class="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined">assignment_ind</span>
              </div>
              <div>
                <h3 class="font-bold text-text-main dark:text-white">Visit Summary</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">ID: #VS-2948-AK</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-start">
                <span class="text-sm text-gray-500 dark:text-gray-400">Patient Name</span>
                <span class="text-sm font-semibold text-right dark:text-gray-200">Johnathan Doe</span>
              </div>
              <div class="flex justify-between items-start">
                <span class="text-sm text-gray-500 dark:text-gray-400">Visit Type</span>
                <span class="text-sm font-semibold text-right dark:text-gray-200">General Checkup</span>
              </div>
              <div class="flex justify-between items-start">
                <span class="text-sm text-gray-500 dark:text-gray-400">Duration</span>
                <span class="text-sm font-semibold text-right dark:text-gray-200">14m 20s</span>
              </div>
              <div class="flex justify-between items-start">
                <span class="text-sm text-gray-500 dark:text-gray-400">Date</span>
                <span class="text-sm font-semibold text-right dark:text-gray-200">Oct 24, 2023</span>
              </div>
            </div>
          </div>
          <!-- Processing Checklist Card -->
          <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-5 flex-1">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="font-bold text-text-main dark:text-white">Processing Steps</h3>
            </div>
            <div class="flex flex-col gap-0 relative">
              <!-- Connecting Line -->
              <div class="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100 dark:bg-gray-800 -z-0"></div>
              <!-- Step 1: Completed -->
              <div class="flex gap-4 py-3 relative z-10 group">
                <div class="size-10 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-white dark:border-gray-800 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-green-600 dark:text-green-400 text-xl">check</span>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-text-main dark:text-gray-200 text-sm font-semibold leading-tight">Audio Uploaded</p>
                  <p class="text-gray-500 dark:text-gray-500 text-xs">Secure transfer complete</p>
                </div>
              </div>
              <!-- Step 2: Completed -->
              <div class="flex gap-4 py-3 relative z-10 group">
                <div class="size-10 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-white dark:border-gray-800 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-green-600 dark:text-green-400 text-xl">check</span>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-text-main dark:text-gray-200 text-sm font-semibold leading-tight">Noise Reduction</p>
                  <p class="text-gray-500 dark:text-gray-500 text-xs">Enhanced audio quality</p>
                </div>
              </div>
              <!-- Step 3: Completed -->
              <div class="flex gap-4 py-3 relative z-10 group">
                <div class="size-10 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-white dark:border-gray-800 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-green-600 dark:text-green-400 text-xl">check</span>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-text-main dark:text-gray-200 text-sm font-semibold leading-tight">Transcription</p>
                  <p class="text-gray-500 dark:text-gray-500 text-xs">Speech-to-text finalized</p>
                </div>
              </div>
              <!-- Step 4: Active -->
              <div class="flex gap-4 py-3 relative z-10 group">
                <div class="size-10 rounded-full bg-primary text-white border-2 border-primary ring-4 ring-primary/20 dark:ring-primary/10 flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <span class="material-symbols-outlined text-xl animate-spin">sync</span>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-primary text-sm font-bold leading-tight">Generating SOAP Note</p>
                  <p class="text-primary/70 text-xs">AI analysis in progress...</p>
                </div>
              </div>
              <!-- Step 5: Pending -->
              <div class="flex gap-4 py-3 relative z-10 group opacity-50">
                <div class="size-10 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-gray-400 text-xl">radio_button_unchecked</span>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-text-main dark:text-gray-200 text-sm font-medium leading-tight">Final Formatting</p>
                  <p class="text-gray-500 dark:text-gray-500 text-xs">Preparing document</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
.pulse-ring {
  box-shadow: 0 0 0 0 rgba(29, 23, 207, 0.7);
  animation: pulse-blue 2s infinite cubic-bezier(0.66, 0, 0, 1);
}
@keyframes pulse-blue {
  to { box-shadow: 0 0 0 10px rgba(29, 23, 207, 0); }
}
</style>
