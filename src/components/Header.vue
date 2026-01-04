<script setup>
</script>

<template>
  <header class="h-16 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 flex items-center justify-between shrink-0 z-10">
    <!-- Mobile Menu Button & Brand -->
    <div class="flex items-center gap-4">
      <button class="md:hidden text-slate-500 hover:text-primary">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <div class="flex items-center gap-2 text-primary dark:text-white">
        <div class="w-8 h-8 rounded bg-primary text-white flex items-center justify-center">
          <span class="material-symbols-outlined text-[20px]">medical_services</span>
        </div>
        <h2 class="text-lg font-bold tracking-tight hidden sm:block">MedFlow</h2>
      </div>
    </div>
    <!-- Search & Actions -->
    <div class="flex flex-1 justify-end items-center gap-4 sm:gap-6">
      <!-- Search Bar -->
      <div class="hidden sm:flex max-w-md w-full relative group">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="material-symbols-outlined text-slate-400 text-[20px]">search</span>
        </div>
        <input type="text" class="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-background-light dark:bg-background-dark text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search patients, visits, or notes..." />
      </div>
      <!-- Icons -->
      <div class="flex items-center gap-3">
        <button class="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 transition-colors">
          <span class="material-symbols-outlined text-[24px]">notifications</span>
          <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
        </button>
        <!-- Small Avatar for Mobile -->
        <div class="md:hidden bg-center bg-no-repeat bg-cover rounded-full h-8 w-8" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCvKCa_c42x-UrcpkoL7wgSIRP41QhiLSergKg2QT4Qb3CIoVh0_H2crWU5hy0W8pIrN857eKVclochsasFERRI58vmqjnp7WO9FyY_vwZP9r14_e4Xnit1T50VrRIppXJ6Xf_OqpKIAkOBdZ3-fV__8UgTR1Cz1VhUvIyvXiwrq5rE8ldrbQPnOMv9EKwxNFNbp9tA4jobqfyJRAjNlvs_5FxZYpSzgIUfkm_OXX4CMVIfTGOVi_k1iKJi-m7APcQeLM1FYb6_4g');"></div>
      </div>
    </div>
  </header>
</template>
