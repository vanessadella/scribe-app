<script setup>
import { ref } from 'vue'
import { store } from '../store'
import ExportModal from '../components/ExportModal.vue'

const showExportModal = ref(false)
</script>

<template>
  <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 lg:p-10">
    <div class="max-w-6xl mx-auto flex flex-col gap-8">
      <!-- Page Header & Stats -->
      <div class="flex flex-col gap-6">
        <!-- Heading Row -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Patient Visits</h1>
            <p class="text-slate-500 dark:text-slate-400 mt-1">Manage daily appointments, recordings, and SOAP notes.</p>
          </div>
          <div class="flex items-center gap-3">
            <button @click="showExportModal = true" class="flex items-center justify-center gap-2 px-4 h-10 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <span class="material-symbols-outlined text-[20px]">download</span>
              <span>Export</span>
            </button>
          </div>
        </div>
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="flex flex-col p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary dark:text-blue-300">
                <span class="material-symbols-outlined text-[20px]">calendar_today</span>
              </div>
              <span class="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Visits</span>
            </div>
            <span class="text-3xl font-bold text-slate-900 dark:text-white">{{ store.patients.length }}</span>
          </div>
          <div class="flex flex-col p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <div class="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-600 dark:text-green-400">
                <span class="material-symbols-outlined text-[20px] icon-fill">check_circle</span>
              </div>
              <span class="text-slate-500 dark:text-slate-400 text-sm font-medium">Completed</span>
            </div>
            <span class="text-3xl font-bold text-slate-900 dark:text-white">{{ store.patients.filter(p => p.status === 'Completed').length }}</span>
          </div>
          <div class="flex flex-col p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <div class="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                <span class="material-symbols-outlined text-[20px]">pending</span>
              </div>
              <span class="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending</span>
            </div>
            <span class="text-3xl font-bold text-slate-900 dark:text-white">{{ store.patients.filter(p => p.status !== 'Completed' && p.status !== 'Cancelled').length }}</span>
          </div>
        </div>
      </div>
      <!-- Filters & Table Section -->
      <div class="flex flex-col gap-4">
        <!-- Filter Tabs -->
        <div class="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar border-b border-border-light dark:border-border-dark">
          <button class="px-4 py-2 text-sm font-semibold text-primary dark:text-white border-b-2 border-primary whitespace-nowrap">Today</button>
          <button class="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-b-2 border-transparent hover:border-slate-300 dark:hover:border-slate-700 whitespace-nowrap transition-colors">This Week</button>
          <button class="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-b-2 border-transparent hover:border-slate-300 dark:hover:border-slate-700 whitespace-nowrap transition-colors">This Month</button>
          <button class="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-b-2 border-transparent hover:border-slate-300 dark:hover:border-slate-700 whitespace-nowrap transition-colors">All Time</button>
        </div>
        <!-- Table Container -->
        <div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-gray-50 dark:bg-white/5 border-b border-border-light dark:border-border-dark text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th class="px-6 py-4 font-semibold w-32">Time</th>
                  <th class="px-6 py-4 font-semibold">Patient</th>
                  <th class="px-6 py-4 font-semibold">Type</th>
                  <th class="px-6 py-4 font-semibold">Status</th>
                  <th class="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <!-- Date Group Header -->
                <tr class="bg-gray-50/50 dark:bg-white/5">
                  <td class="px-6 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 border-b border-border-light dark:border-border-dark" colspan="5">Today - Jan 2, 2026</td>
                </tr>
                <!-- Dynamic Rows from Store -->
                <tr v-for="patient in store.patients" :key="patient.id" class="group border-b border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <td class="px-6 py-4 text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">{{ patient.time }}</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-full bg-cover bg-center border border-border-light dark:border-border-dark" :style="{ backgroundImage: `url('${patient.avatar}')` }"></div>
                      <div class="flex flex-col">
                        <span class="font-bold text-slate-900 dark:text-white">{{ patient.name }}</span>
                        <span class="text-xs text-slate-500 dark:text-slate-400">ID: {{ patient.chartId }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-slate-700 dark:text-slate-300 font-medium">{{ patient.reason }}</td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                      :class="{
                        'bg-blue-100 text-primary dark:bg-blue-900/40 dark:text-blue-200 border border-blue-200 dark:border-blue-800': patient.statusColor === 'blue',
                        'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-200 border border-orange-200 dark:border-orange-800': patient.statusColor === 'orange',
                        'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200 border border-green-200 dark:border-green-800': patient.statusColor === 'green',
                      }"
                    >
                      <span v-if="patient.statusColor === 'blue'" class="block w-2 h-2 rounded-full bg-primary dark:bg-blue-400 animate-pulse"></span>
                      {{ patient.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class="flex items-center justify-end gap-2">
                      <button class="p-2 text-slate-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors" title="View Transcript">
                        <span class="material-symbols-outlined text-[20px]">description</span>
                      </button>
                      <button class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors" title="Options">
                        <span class="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Pagination Footer -->
          <div class="flex items-center justify-between px-6 py-4 border-t border-border-light dark:border-border-dark bg-gray-50/50 dark:bg-white/5">
            <span class="text-sm text-slate-500 dark:text-slate-400">
              Showing <span class="font-bold text-slate-700 dark:text-slate-200">1-{{ store.patients.length }}</span> of <span class="font-bold text-slate-700 dark:text-slate-200">{{ store.patients.length }}</span> visits
            </span>
            <div class="flex items-center gap-2">
              <button class="p-2 rounded-lg border border-border-light dark:border-border-dark text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50" disabled>
                <span class="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button class="p-2 rounded-lg border border-border-light dark:border-border-dark text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 hover:shadow-sm transition-all">
                <span class="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ExportModal :isOpen="showExportModal" @close="showExportModal = false" />
  </main>
</template>
