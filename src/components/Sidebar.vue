<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Helper to check active state
const isActive = (path) => route.path === path
</script>

<template>
  <aside class="w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex-col hidden md:flex h-full shrink-0 z-20 justify-between p-4">
    <div class="flex flex-col gap-6">
      <!-- Brand -->
      <div class="flex items-center gap-3 px-2">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
          <span class="material-symbols-outlined text-[24px]">medical_services</span>
        </div>
        <div class="flex flex-col">
          <h1 class="text-lg font-bold leading-tight tracking-tight text-text-main dark:text-white">MedScribe</h1>
          <p class="text-xs font-medium text-text-secondary dark:text-gray-400">v1.0.2</p>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-col gap-2">
        <router-link to="/" class="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group" :class="isActive('/') ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-background-light dark:hover:bg-gray-800 dark:text-gray-400'">
          <span class="material-symbols-outlined text-[24px]" :class="isActive('/') ? 'text-primary' : 'text-text-secondary dark:text-gray-400'">dashboard</span>
          <span class="text-sm font-medium" :class="isActive('/') ? 'font-bold' : ''">Dashboard</span>
        </router-link>
        
        <router-link to="/patients" class="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group" :class="isActive('/patients') ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-background-light dark:hover:bg-gray-800 dark:text-gray-400'">
          <span class="material-symbols-outlined text-[24px]" :class="isActive('/patients') ? 'text-primary' : 'text-text-secondary dark:text-gray-400'">group</span>
          <span class="text-sm font-medium" :class="isActive('/patients') ? 'font-bold' : ''">Patient List</span>
        </router-link>
      </nav>
    </div>

    <!-- Bottom Actions -->
    <div class="flex flex-col gap-2 border-t border-border-light dark:border-border-dark pt-4">
      <router-link to="/settings" class="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group" :class="isActive('/settings') ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-background-light dark:hover:bg-gray-800 dark:text-gray-400'">
        <span class="material-symbols-outlined text-[24px]" :class="isActive('/settings') ? 'text-primary' : 'text-text-secondary dark:text-gray-400'">settings</span>
        <span class="text-sm font-medium" :class="isActive('/settings') ? 'font-bold' : ''">Settings</span>
      </router-link>
      
      <a href="#" class="flex items-center gap-3 px-3 py-3 rounded-lg text-text-secondary hover:bg-background-light dark:text-gray-400 dark:hover:bg-gray-800 transition-colors">
        <span class="material-symbols-outlined text-[24px]">help</span>
        <span class="text-sm font-medium">Help Center</span>
      </a>

      <!-- User Profile Snippet in Sidebar -->
      <div class="mt-2 flex items-center gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-800 p-3">
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuClviicyrXtqvSSF1itEwBFhuPdrIR6RuIGekqwiOS0Qnw5C0heH0V1uLoIAnPiJNvCUuJKXV21q9-jVbIJJhJy76DPwOLkm2Ok5GrCKWH-bePEVbrEI428YohmsyEAAGcpwIk1WZk8mBN22S5bF-ce1zxsVFI_RT0b5kWevGCI_FZ55ha8pftZwV5UjsrbvGSGJHU5jQJXI48PIwYdtdV7r9hl7thaMhbjbZxeb7x1H0CE_7cXKMSOOlo9ZVVIcTeDyETtOsh4dz0");'></div>
        <div class="overflow-hidden">
          <p class="truncate text-sm font-bold text-text-main dark:text-white">Dr. Emily</p>
          <p class="truncate text-xs text-text-secondary dark:text-gray-400">Cardiology</p>
        </div>
      </div>
    </div>
  </aside>
</template>
