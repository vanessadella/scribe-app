<template>
  <div class="flex-1 flex flex-col h-full overflow-hidden relative bg-background-light dark:bg-background-dark">
    <!-- Top Bar / Header -->
    <header class="flex-shrink-0 px-6 py-6 md:px-12 md:py-8 border-b border-border-light dark:border-border-dark md:border-none z-0">
      <div class="max-w-[1000px] mx-auto w-full">
        <div class="flex flex-col gap-2">
          <h1 class="text-[#0f0f1a] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Settings</h1>
          <p class="text-[#555393] dark:text-gray-400 text-base font-normal leading-normal">Manage your account and application preferences</p>
        </div>
      </div>
    </header>

    <!-- Scrollable Content -->
    <div class="flex-1 overflow-y-auto px-6 md:px-12 pb-12">
      <div class="max-w-[1000px] mx-auto flex flex-col gap-6">
        <!-- Section 1: Account Information -->
        <section class="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary dark:text-indigo-400">person</span>
              <h2 class="text-lg font-bold text-[#0f0f1a] dark:text-white">Account Information</h2>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <!-- Profile Picture Area -->
            <div class="flex flex-col items-center gap-3 min-w-[120px]">
              <div class="relative group cursor-pointer">
                <div class="bg-center bg-no-repeat bg-cover rounded-full size-24 border-4 border-[#f9f8fb] dark:border-[#2a2a3c] shadow-sm" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZe1H4suM-XbhmQyct_NRdFTRoGuDgIu-bOaauWcvoz_0yiS28g6HAGy1JrsPXLMvoFEvSzMbwGFWFOD5XU5qlvMu4Pf70KAlG6zOOAzLXvuJADpKPenDOgxY1ZEyau8NXtdRmOHqzBGYclPPVNJ_tnqtdk14m31LBHKPnjwRYNLVW8DHNS5Y_t1Ds9Icoj4OOoq8U-OJG3A71qn4lpayxVUZh0409P11aC74wJfI6xJt3DR7A2oTcHID6u1CMMDUc2eJiwXSWglE");'></div>
                <div class="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="material-symbols-outlined text-white">edit</span>
                </div>
              </div>
              <button class="text-xs font-bold text-primary dark:text-indigo-400 hover:underline">Change Photo</button>
            </div>
            <!-- Form Fields -->
            <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <label class="flex flex-col gap-2">
                <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">Full Name</span>
                <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark text-[#0f0f1a] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-indigo-500 transition-all placeholder:text-[#555393] dark:placeholder:text-gray-500" type="text" value="Dr. John Smith"/>
              </label>
              <label class="flex flex-col gap-2">
                <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">Email Address</span>
                <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark text-[#0f0f1a] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-indigo-500 transition-all placeholder:text-[#555393] dark:placeholder:text-gray-500" type="email" value="john.smith@medscribe.app"/>
              </label>
            </div>
          </div>
        </section>

        <!-- Section 2: Practice Details -->
        <section class="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-primary dark:text-indigo-400">domain</span>
            <h2 class="text-lg font-bold text-[#0f0f1a] dark:text-white">Practice Details</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">Practice Name</span>
              <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark text-[#0f0f1a] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-indigo-500 transition-all" type="text" value="Heart Center of Excellence"/>
            </label>
            <label class="flex flex-col gap-2">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">NPI Number</span>
                <span class="text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">check_circle</span> Verified</span>
              </div>
              <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark text-[#0f0f1a] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-indigo-500 transition-all font-mono tracking-wider" type="text" value="1234567890"/>
            </label>
          </div>
        </section>

        <!-- Section 3: Privacy & Security -->
        <section class="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm relative overflow-hidden">
          <!-- HIPAA Badge -->
          <div class="absolute top-0 right-0 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-bl-xl border-l border-b border-green-100 dark:border-green-800 text-xs font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">lock</span> HIPAA Compliant
          </div>
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-primary dark:text-indigo-400">security</span>
            <h2 class="text-lg font-bold text-[#0f0f1a] dark:text-white">Privacy & Security</h2>
          </div>
          <div class="flex flex-col gap-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label class="flex flex-col gap-2">
                <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">Audio Retention Period</span>
                <div class="relative">
                  <select class="appearance-none w-full rounded-lg border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark text-[#0f0f1a] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-indigo-500 transition-all pr-10 cursor-pointer">
                    <option>30 Days (Recommended)</option>
                    <option>7 Days</option>
                    <option>90 Days</option>
                    <option>Indefinite</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#555393] dark:text-gray-400">
                    <span class="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
                <p class="text-xs text-[#555393] dark:text-gray-500">Audio files are automatically deleted after this period.</p>
              </label>
              <div class="flex flex-col gap-2 justify-center">
                <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">Password</span>
                <button class="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
                  <span class="text-sm text-[#0f0f1a] dark:text-white font-medium">••••••••••••••••</span>
                  <span class="text-xs font-bold text-primary dark:text-indigo-400 group-hover:underline">Change Password</span>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 rounded-lg bg-[#f9f8fb] dark:bg-[#1f1f2e] border border-border-light dark:border-border-dark">
              <div class="flex flex-col">
                <span class="text-sm font-bold text-[#0f0f1a] dark:text-white">Two-Factor Authentication (2FA)</span>
                <span class="text-xs text-[#555393] dark:text-gray-400">Add an extra layer of security to your account.</span>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input checked class="sr-only peer" type="checkbox" value=""/>
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        <!-- Section 4: Export Preferences -->
        <section class="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm mb-6">
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-primary dark:text-indigo-400">ios_share</span>
            <h2 class="text-lg font-bold text-[#0f0f1a] dark:text-white">Export Preferences</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">Default Note Format</span>
              <div class="relative">
                <select class="appearance-none w-full rounded-lg border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark text-[#0f0f1a] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-indigo-500 transition-all pr-10 cursor-pointer">
                  <option>PDF Document (.pdf)</option>
                  <option>Word Document (.docx)</option>
                  <option>Plain Text (.txt)</option>
                  <option>HL7 / EHR Format</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#555393] dark:text-gray-400">
                  <span class="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </label>
            <label class="flex flex-col gap-2">
              <span class="text-sm font-semibold text-[#0f0f1a] dark:text-gray-200">Export Email Address</span>
              <input class="w-full rounded-lg border-border-light dark:border-border-dark bg-input-light dark:bg-input-dark text-[#0f0f1a] dark:text-white px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-indigo-500 transition-all placeholder:text-[#555393] dark:placeholder:text-gray-500" placeholder="Same as account email" type="email"/>
            </label>
          </div>
        </section>

        <!-- Footer Actions -->
        <div class="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-4 border-t border-border-light dark:border-border-dark mt-2">
          <button class="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-all w-full md:w-auto">
            <span class="material-symbols-outlined text-lg">logout</span>
            Sign Out
          </button>
          <div class="flex gap-4 w-full md:w-auto">
            <button class="flex-1 md:flex-none items-center justify-center px-6 py-3 rounded-lg border border-transparent text-[#555393] dark:text-gray-300 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              Cancel
            </button>
            <button class="flex-1 md:flex-none items-center justify-center px-8 py-3 rounded-lg bg-primary hover:bg-indigo-800 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all transform active:scale-95">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
