<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const transcriptSegments = ref([])

onMounted(() => {
    // Load demo data
    const savedTranscript = sessionStorage.getItem('lastVisitTranscript')
    if (savedTranscript) {
        // Parse the string "Speaker (Time): Text"
        const lines = savedTranscript.split('\n')
        transcriptSegments.value = lines.map(line => {
            const match = line.match(/^(.+) \((.+)\): (.+)$/)
            if (match) {
                return {
                    speaker: match[1] === 'Patient' ? 'Patient' : 'Doctor', // Normalize for styling
                    time: match[2],
                    text: match[3]
                }
            }
            return null
        }).filter(item => item !== null)
    }
})

const saveAndComplete = () => {
  // Ideally save data here
  router.push('/')
}
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display h-screen flex flex-col overflow-hidden">
    <!-- Header Section -->
    <header class="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark shrink-0 z-20">
      <!-- Patient Context Bar -->
      <div class="px-6 py-3 bg-white dark:bg-[#15152a] border-t border-border-light dark:border-border-dark flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div>
            <h2 class="text-lg font-bold leading-tight text-text-main dark:text-white">John Doe <span class="text-text-secondary dark:text-gray-400 font-normal text-sm ml-1">(DOB: 01/12/1980)</span></h2>
            <p class="text-xs text-text-secondary dark:text-gray-400 font-medium">MRN: 982374 • Follow-up Visit</p>
          </div>
          <div class="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-700"></div>
          <div class="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-gray-300">
            <span class="material-symbols-outlined text-lg">schedule</span>
            <span>14:02 Duration</span>
          </div>
        </div>
        <button class="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-bold transition-colors">
          <span class="material-symbols-outlined text-lg">content_copy</span>
          Copy Note
        </button>
      </div>
    </header>

    <!-- Main Content: Split View -->
    <main class="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
      <!-- Left Pane: SOAP Note Editor -->
      <section class="flex-1 flex flex-col w-full lg:min-w-[320px] border-b lg:border-b-0 lg:border-r border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark overflow-hidden group/note">
        <div class="px-6 py-4 border-b border-border-light dark:border-border-dark bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center">
          <h3 class="font-bold text-text-main dark:text-gray-200 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">edit_document</span>
            SOAP Note
          </h3>
          <div class="flex gap-2">
            <button class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-500" title="Regenerate All">
              <span class="material-symbols-outlined text-xl">autorenew</span>
            </button>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <!-- Subjective -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Subjective</label>
              <button class="text-xs font-medium text-primary hover:underline">Regenerate</button>
            </div>
            <textarea class="w-full min-h-[140px] p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed resize-y text-text-main dark:text-white" placeholder="Patient history...">Patient reports persistent headache for 3 days. The pain is described as throbbing and located primarily in the frontal region. Patient rates pain as 6/10. No photophobia or phonophobia reported. Patient denies nausea or vomiting. Mentioned increased stress at work recently.</textarea>
          </div>
          <!-- Objective -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Objective</label>
              <button class="text-xs font-medium text-primary hover:underline">Regenerate</button>
            </div>
            <textarea class="w-full min-h-[100px] p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed resize-y text-text-main dark:text-white" placeholder="Physical findings...">BP: 120/80 mmHg
HR: 72 bpm
Temp: 98.6 F
Neuro: Cranial nerves II-XII intact. No focal deficits.
HEENT: Normocephalic, atraumatic. No sinus tenderness.</textarea>
          </div>
          <!-- Assessment -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Assessment</label>
              <button class="text-xs font-medium text-primary hover:underline">Regenerate</button>
            </div>
            <textarea class="w-full min-h-[80px] p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed resize-y text-text-main dark:text-white" placeholder="Diagnosis...">1. Tension-type headache
2. Stress reaction</textarea>
          </div>
          <!-- Plan -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Plan</label>
              <button class="text-xs font-medium text-primary hover:underline">Regenerate</button>
            </div>
            <textarea class="w-full min-h-[120px] p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed resize-y text-text-main dark:text-white" placeholder="Treatment plan...">1. Advised rest and hydration.
2. Recommended Ibuprofen 400mg PO every 6-8 hours as needed for pain.
3. Discussed stress management techniques.
4. Return to clinic if symptoms worsen or do not improve in 1 week.</textarea>
          </div>
        </div>
      </section>

      <!-- Right Pane: Transcript & Audio -->
      <section class="flex-1 flex flex-col w-full lg:min-w-[320px] bg-white dark:bg-surface-dark relative z-0">
        <!-- Search & Tools -->
        <div class="px-6 py-3 border-b border-border-light dark:border-border-dark bg-white dark:bg-surface-dark flex items-center gap-3">
          <div class="flex-1 relative">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">search</span>
            <input class="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100" placeholder="Search transcript keywords..." type="text"/>
          </div>
          <div class="flex items-center gap-1 border-l pl-3 border-gray-200 dark:border-gray-700">
            <button class="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Download Transcript">
              <span class="material-symbols-outlined text-xl">download</span>
            </button>
            <button class="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Settings">
              <span class="material-symbols-outlined text-xl">settings</span>
            </button>
          </div>
        </div>

        <!-- Interactive Transcript -->
        <div class="flex-1 overflow-y-auto p-6 scroll-smooth">
            <div v-if="transcriptSegments.length > 0">
               <div v-for="(segment, index) in transcriptSegments" :key="index" class="group flex gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 -mx-2 rounded-lg transition-colors cursor-pointer">
                  <div class="w-12 pt-1 flex-shrink-0">
                    <span class="text-xs font-mono text-gray-400">{{ segment.time }}</span>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs font-bold mb-1" :class="segment.speaker === 'Doctor' ? 'text-primary' : 'text-gray-600 dark:text-gray-400'">{{ segment.speaker }}</p>
                    <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ segment.text }}</p>
                  </div>
                </div>
            </div>
            <div v-else class="text-center py-10 text-gray-500">
                No transcript data found. Please complete a recording session.
            </div>
        </div>

        <!-- Sticky Audio Player -->
        <div class="border-t border-border-light dark:border-border-dark p-4 bg-white dark:bg-surface-dark shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
          <div class="flex flex-col gap-3">
            <!-- Progress Bar -->
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono text-gray-500 w-10 text-right">00:12</span>
              <div class="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer group">
                <div class="absolute h-full bg-primary rounded-full w-[2%]"></div>
                <div class="absolute right-0 -top-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] px-1 py-0.5 rounded">02:14</div>
                <div class="absolute h-3 w-3 bg-primary rounded-full top-1/2 -translate-y-1/2 left-[2%] shadow-md scale-0 group-hover:scale-100 transition-transform"></div>
              </div>
              <span class="text-xs font-mono text-gray-500 w-10">14:02</span>
            </div>
            <!-- Controls -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-xs font-bold text-gray-600 dark:text-gray-300 cursor-pointer">1x</div>
              </div>
              <div class="flex items-center gap-4">
                <button class="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span class="material-symbols-outlined text-2xl">replay_10</span>
                </button>
                <button class="bg-primary hover:bg-primary/90 text-white rounded-full size-10 flex items-center justify-center shadow-lg shadow-primary/30 transition-all active:scale-95">
                  <span class="material-symbols-outlined text-2xl fill">pause</span>
                </button>
                <button class="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span class="material-symbols-outlined text-2xl">forward_10</span>
                </button>
              </div>
              <div class="flex items-center gap-2 w-24 justify-end">
                <span class="material-symbols-outlined text-gray-400 text-xl">volume_up</span>
                <div class="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="w-3/4 h-full bg-gray-400 dark:bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Sticky Footer Action Bar -->
    <footer class="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark p-4 shrink-0 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30">
      <div class="flex justify-between items-center max-w-screen-2xl mx-auto px-4">
        <div class="text-xs text-text-secondary dark:text-gray-500 font-medium flex items-center gap-1">
          <span class="material-symbols-outlined text-sm text-green-500">check_circle</span>
          Last saved: 2 mins ago
        </div>
        <div class="flex items-center gap-4">
          <button class="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-text-main dark:text-gray-200 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Save Draft
          </button>
          <button @click="saveAndComplete" class="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all active:scale-95 flex items-center gap-2">
            Approve & Complete
            <span class="material-symbols-outlined text-lg">check</span>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>
