<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const notes = ref([
  { id: 1, name: 'John Doe', type: 'SOAP Note', date: 'Oct 24, 2023 • 2:30 PM', selected: true, typeColor: 'blue' },
  { id: 2, name: 'Jane Smith', type: 'Follow-up', date: 'Oct 23, 2023 • 10:15 AM', selected: true, typeColor: 'purple' },
  { id: 3, name: 'Michael Brown', type: 'SOAP Note', date: 'Oct 22, 2023 • 4:45 PM', selected: false, typeColor: 'blue' }
])

const exportFormat = ref('txt')

</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Blurred Background Overlay simulation (Simulating being over a page) -->
    <div aria-hidden="true" class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity" @click="$emit('close')"></div>
    <!-- Modal Container -->
    <div class="relative z-50 w-full max-w-2xl bg-surface-light dark:bg-surface-dark rounded-xl shadow-2xl flex flex-col max-h-[90vh] border border-white/20 overflow-hidden transform transition-all">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-5 border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shrink-0">
        <div>
          <h2 class="text-text-main-light dark:text-text-main-dark text-xl font-bold leading-tight tracking-tight">Bulk Export Notes</h2>
          <p class="text-text-sec-light dark:text-text-sec-dark text-sm font-medium mt-1">Select the notes you wish to export.</p>
        </div>
        <button @click="$emit('close')" class="text-text-sec-light dark:text-text-sec-dark hover:bg-slate-100 dark:hover:bg-white/10 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
          <span class="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>
      <!-- Scrollable Content -->
      <div class="flex-1 overflow-y-auto custom-scrollbar p-6">
        <!-- Notes Selection List -->
        <div class="mb-8">
          <h3 class="text-text-main-light dark:text-text-main-dark text-sm font-semibold uppercase tracking-wider mb-3 px-1">Select Notes</h3>
          <div class="rounded-lg border border-border-light dark:border-border-dark overflow-hidden bg-white dark:bg-black/20">
            <!-- Select All Header -->
            <div class="flex items-center gap-4 px-4 py-3 bg-slate-50 dark:bg-white/5 border-b border-border-light dark:border-border-dark">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="custom-checkbox h-5 w-5 rounded border-border-light dark:border-border-dark border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors" />
                <span class="text-text-main-light dark:text-text-main-dark font-bold text-sm select-none">Select All (3)</span>
              </label>
            </div>
            <!-- List Items -->
            <div class="divide-y divide-border-light dark:divide-border-dark">
              <!-- Item 1 -->
              <label v-for="note in notes" :key="note.id" class="flex items-center gap-4 px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                <input type="checkbox" v-model="note.selected" class="custom-checkbox h-5 w-5 rounded border-border-light dark:border-border-dark border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors" />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between mb-0.5">
                    <p class="text-text-main-light dark:text-text-main-dark text-sm font-semibold truncate">{{ note.name }}</p>
                    <span :class="[
                      'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset',
                      note.typeColor === 'blue' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-blue-700/10' : 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 ring-purple-700/10'
                    ]">{{ note.type }}</span>
                  </div>
                  <p class="text-text-sec-light dark:text-text-sec-dark text-xs">{{ note.date }}</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <!-- Configuration Form -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Export Format -->
          <div class="flex flex-col">
            <h3 class="text-text-main-light dark:text-text-main-dark text-sm font-semibold uppercase tracking-wider mb-3 px-1">Export Format</h3>
            <div class="flex flex-col gap-3">
              <!-- Option 1 -->
              <label class="flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:border-primary/50 transition-colors bg-white dark:bg-black/20 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input type="radio" name="format" value="txt" v-model="exportFormat" class="custom-radio mt-0.5 h-4 w-4 border-2 border-border-light dark:border-border-dark bg-transparent text-transparent checked:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0" />
                <div class="flex flex-col">
                  <span class="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Plain Text (.txt)</span>
                  <span class="text-text-sec-light dark:text-text-sec-dark text-xs">Simple text file, no formatting.</span>
                </div>
              </label>
              <!-- Option 2 -->
              <label class="flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:border-primary/50 transition-colors bg-white dark:bg-black/20 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input type="radio" name="format" value="html" v-model="exportFormat" class="custom-radio mt-0.5 h-4 w-4 border-2 border-border-light dark:border-border-dark bg-transparent text-transparent checked:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0" />
                <div class="flex flex-col">
                  <span class="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Formatted HTML (.html)</span>
                  <span class="text-text-sec-light dark:text-text-sec-dark text-xs">Preserves layout and styles.</span>
                </div>
              </label>
              <!-- Option 3 -->
              <label class="flex items-start gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:border-primary/50 transition-colors bg-white dark:bg-black/20 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input type="radio" name="format" value="pdf" v-model="exportFormat" class="custom-radio mt-0.5 h-4 w-4 border-2 border-border-light dark:border-border-dark bg-transparent text-transparent checked:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0" />
                <div class="flex flex-col">
                  <span class="text-text-main-light dark:text-text-main-dark text-sm font-semibold">PDF Document (.pdf)</span>
                  <span class="text-text-sec-light dark:text-text-sec-dark text-xs">Standard document format.</span>
                </div>
              </label>
            </div>
          </div>
          <!-- Send To -->
          <div class="flex flex-col">
            <h3 class="text-text-main-light dark:text-text-main-dark text-sm font-semibold uppercase tracking-wider mb-3 px-1">Destination</h3>
            <div class="flex flex-col gap-4">
              <label class="block">
                <span class="text-text-main-light dark:text-text-main-dark text-sm font-medium mb-1.5 block">Send To Email</span>
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark text-[20px]">mail</span>
                  </div>
                  <input type="email" value="dr.smith@clinic.com" class="block w-full rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-black/20 pl-10 pr-3 py-2.5 text-text-main-light dark:text-text-main-dark text-sm placeholder:text-text-sec-light dark:placeholder:text-text-sec-dark focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Enter email address" />
                </div>
                <p class="text-xs text-text-sec-light dark:text-text-sec-dark mt-2">
                  The exported files will be sent as attachments to this email address.
                </p>
              </label>
              <div class="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30 flex gap-3 items-start">
                <span class="material-symbols-outlined text-primary text-xl mt-0.5">info</span>
                <p class="text-xs text-text-main-light dark:text-text-main-dark leading-relaxed">
                  Please ensure the email is secure and HIPAA compliant before sending patient data.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer Actions -->
        <div class="mt-8 pt-6 border-t border-border-light dark:border-border-dark flex items-center justify-end gap-3 shrink-0">
          <button @click="$emit('close')" class="px-5 py-2.5 rounded-lg border border-border-light dark:border-border-dark text-text-main-light dark:text-text-main-dark text-sm font-semibold hover:bg-slate-200 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600">
            Cancel
          </button>
          <button class="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-surface-dark flex items-center gap-2">
            <span>Send {{ notes.filter(n => n.selected).length }} Notes</span>
            <span class="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
