<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const route = useRoute()

// State
const isRecording = ref(true)
const transcript = ref([])
const currentTranscript = ref('')
const language = ref(route.query.lang || 'en-US')
const duration = ref(0)
const timerInterval = ref(null)

// Speech Recognition
let recognition = null

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const startTimer = () => {
  timerInterval.value = setInterval(() => {
    duration.value++
  }, 1000)
}

const stopTimer = () => {
  if (timerInterval.value) clearInterval(timerInterval.value)
}

const initSpeechRecognition = () => {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = language.value

    recognition.onresult = (event) => {
      console.log('Speech result:', event.results);
      let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          transcript.value.push({
            speaker: 'Patient', 
            text: event.results[i][0].transcript,
            time: formatTime(duration.value)
          })
        } else {
          interimTranscript += event.results[i][0].transcript
        }
      }
      currentTranscript.value = interimTranscript
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error)
    }

    recognition.onstart = () => {
        console.log('Speech recognition started');
    }

    recognition.onend = () => {
        if (isRecording.value) {
            recognition.start();
        }
    }

    recognition.start()
  } else {
    alert('Web Speech API is not supported in this browser.')
  }
}

const togglePause = () => {
  isRecording.value = !isRecording.value
  if (isRecording.value) {
    recognition.start()
    startTimer()
  } else {
    recognition.stop()
    stopTimer()
  }
}

const endVisit = async () => {
  stopTimer()
  isRecording.value = false
  if (recognition) recognition.stop()

  // Compile full transcript
  const fullText = transcript.value.map(t => `${t.speaker} (${t.time}): ${t.text}`).join('\n')

  try {
    // Send to backend
    const visitId = 'visit_' + Date.now() // temporary ID generation
    await fetch(`http://localhost:3000/api/notes/visit/${visitId}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        transcript: fullText,
        language: language.value
      })
    })
    
    router.push('/visit-processing')
  } catch (error) {
    console.error('Failed to save visit', error)
    alert('Failed to save visit data')
  }
}

onMounted(() => {
  startTimer()
  initSpeechRecognition()
})

onUnmounted(() => {
  stopTimer()
  if (recognition) recognition.stop()
})
</script>

<template>
  <div class="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display overflow-hidden">
    <!-- Top Navigation Bar -->
    <header class="flex items-center justify-between border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 py-4 shadow-sm z-20 shrink-0">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 animate-pulse">
          <span class="material-symbols-outlined text-red-600 filled text-[24px]">radio_button_checked</span>
          <h2 class="text-red-600 text-sm md:text-base font-bold tracking-wider uppercase">Recording in Progress</h2>
        </div>
        <div class="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>
        <span class="hidden md:block text-text-secondary dark:text-gray-400 font-medium text-sm">Active Session - Dr. Smith</span>
      </div>
      <div class="flex items-center gap-3">
        <button @click="togglePause" class="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-text-main dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <span class="material-symbols-outlined text-[20px]">{{ isRecording ? 'pause' : 'play_arrow' }}</span>
          <span class="text-sm font-bold hidden sm:inline">{{ isRecording ? 'Pause' : 'Resume' }}</span>
        </button>
        <button @click="endVisit" class="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
          <span class="material-symbols-outlined text-[20px]">stop_circle</span>
          <span class="text-sm font-bold">End Visit</span>
        </button>
      </div>
    </header>

    <main class="flex flex-1 overflow-hidden">
      <!-- Left Sidebar: Patient Context & Vitals -->
      <aside class="w-full max-w-[320px] hidden lg:flex flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-y-auto">
        <div class="p-6 flex flex-col gap-6">
          <!-- Patient Header -->
          <div>
            <div class="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4">
              JD
            </div>
            <h1 class="text-2xl font-bold text-text-main dark:text-white mb-1">John Doe</h1>
            <p class="text-text-secondary dark:text-gray-400 text-sm">Male, 45y • ID: #928371</p>
          </div>
          <!-- Reason for Visit -->
          <div class="p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
            <p class="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase tracking-wide mb-2">Reason for Visit</p>
            <p class="text-text-main dark:text-white font-medium leading-relaxed">Shoulder Pain - Recurring ache in right shoulder, specifically when lifting objects overhead.</p>
          </div>
          <!-- Vitals -->
          <div>
            <p class="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase tracking-wide mb-3">Latest Vitals</p>
            <div class="grid grid-cols-2 gap-3">
              <div class="p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <span class="material-symbols-outlined text-primary text-[20px] mb-1">cardiology</span>
                <p class="text-xs text-text-secondary dark:text-gray-400">Blood Pressure</p>
                <p class="text-lg font-bold text-text-main dark:text-white">120/80</p>
              </div>
              <div class="p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <span class="material-symbols-outlined text-red-500 text-[20px] mb-1">favorite</span>
                <p class="text-xs text-text-secondary dark:text-gray-400">Heart Rate</p>
                <p class="text-lg font-bold text-text-main dark:text-white">72 <span class="text-xs font-normal text-text-secondary">bpm</span></p>
              </div>
              <div class="p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <span class="material-symbols-outlined text-blue-500 text-[20px] mb-1">thermostat</span>
                <p class="text-xs text-text-secondary dark:text-gray-400">Temperature</p>
                <p class="text-lg font-bold text-text-main dark:text-white">98.6°F</p>
              </div>
              <div class="p-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800">
                <span class="material-symbols-outlined text-purple-500 text-[20px] mb-1">monitor_weight</span>
                <p class="text-xs text-text-secondary dark:text-gray-400">Weight</p>
                <p class="text-lg font-bold text-text-main dark:text-white">185 <span class="text-xs font-normal text-text-secondary">lbs</span></p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Center Stage: Recording & Transcript -->
      <div class="flex-1 flex flex-col relative bg-background-light dark:bg-background-dark">
        <!-- Mobile Patient Context Toggle (Visible only on small screens) -->
        <div class="lg:hidden px-4 py-2 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex justify-between items-center">
          <div class="flex flex-col">
            <span class="font-bold text-text-main dark:text-white">John Doe</span>
            <span class="text-xs text-text-secondary dark:text-gray-400">Shoulder Pain</span>
          </div>
          <button class="text-primary text-sm font-semibold">View Details</button>
        </div>

        <!-- Timer & Visualization Area -->
        <div class="flex-none px-6 py-8 md:py-12 flex flex-col items-center justify-center gap-8 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark shadow-sm z-10">
          <!-- Timer -->
          <div class="flex flex-col items-center">
            <div class="font-display font-black text-6xl md:text-8xl tracking-tighter text-text-main dark:text-white tabular-nums leading-none">
              {{ formatTime(duration) }}
            </div>
            <div class="text-text-secondary dark:text-gray-400 text-sm mt-2 font-medium tracking-wide uppercase">Duration</div>
          </div>
          <!-- Waveform Visualizer -->
          <div class="w-full max-w-2xl h-16 md:h-24 flex items-center justify-center gap-1">
            <!-- Generating bars for waveform effect -->
            <div v-for="i in 22" :key="i" class="w-1.5 md:w-2 bg-primary/80 rounded-full waveform-bar" :class="{ 'animate-pulse': isRecording }" :style="{ height: Math.random() * 100 + '%' }"></div>
          </div>
          <!-- Helper Tip -->
          <div class="bg-primary/5 border border-primary/10 rounded-full px-4 py-2 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-sm">lightbulb</span>
            <p class="text-primary text-sm font-medium">Tip: Speak naturally. Verbalize exam findings.</p>
          </div>
        </div>

        <!-- Live Transcript Feed -->
        <div class="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col gap-6 scroll-smooth">
          <div class="max-w-3xl mx-auto w-full flex flex-col gap-6">
            <h3 class="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase tracking-wide mb-2 sticky top-0 bg-background-light dark:bg-background-dark py-2 z-10">Live Transcript</h3>
            
            <div v-if="transcript.length === 0 && !currentTranscript" class="text-center text-text-secondary py-10">
                Listening...
            </div>

            <div v-for="(item, index) in transcript" :key="index" class="flex gap-4 group">
              <div class="flex-none w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-300 font-bold text-sm">
                {{ item.speaker === 'Doctor' ? 'Dr' : 'Pt' }}
              </div>
              <div class="flex-1">
                <div class="flex items-baseline gap-2 mb-1">
                  <span class="font-bold text-text-main dark:text-white">{{ item.speaker }}</span>
                  <span class="text-xs text-text-secondary dark:text-gray-400">{{ item.time }}</span>
                </div>
                <p class="text-text-main dark:text-white leading-relaxed">
                  {{ item.text }}
                </p>
              </div>
            </div>

            <!-- Current Interim Result -->
            <div v-if="currentTranscript" class="flex gap-4 group opacity-70">
               <div class="flex-none w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-sm">
                 ...
               </div>
               <div class="flex-1">
                 <p class="text-text-main dark:text-white leading-relaxed italic">
                   {{ currentTranscript }}
                 </p>
               </div>
            </div>
            
            <!-- Space for scrolling -->
            <div class="h-10"></div>
          </div>
        </div>

        <!-- Floating Action Bar / Footer Control (Optional for sticky controls) -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
          <button @click="endVisit" class="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-xl shadow-primary/40 active:scale-95">
            <span class="material-symbols-outlined text-[24px]">stop_circle</span>
            <span class="text-base font-bold">End Visit</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.waveform-bar {
  animation: pulse-height 1s ease-in-out infinite;
}
@keyframes pulse-height {
  0%, 100% { height: 20%; }
  50% { height: 80%; }
}
.waveform-bar:nth-child(odd) { animation-duration: 0.8s; }
.waveform-bar:nth-child(2n) { animation-duration: 1.1s; }
.waveform-bar:nth-child(3n) { animation-duration: 1.3s; }
.waveform-bar:nth-child(4n) { animation-duration: 0.9s; }
</style>
