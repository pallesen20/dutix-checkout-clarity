function loadHeader() {
  const headerHTML = `
    <header class="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="/" class="text-2xl font-bold text-gradient">Dutix</a>
          
          <nav class="hidden md:flex items-center space-x-8">
            //<a href="/" class="text-gray-600 hover:text-emerald-600 transition-colors">Home</a>
            <a href="/cross-border-shopping-tips.html" class="text-gray-600 hover:text-emerald-600 transition-colors">Shopping Tips</a>
            <button class="btn-primary add-to-browser-btn">Add to Browser</button>
          </nav>

          <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-900 hover:text-emerald-600 transition-colors" aria-label="Toggle mobile menu">
            <svg class="h-6 w-6 menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg class="h-6 w-6 close-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div id="mobile-menu" class="md:hidden mt-4 pb-4 border-t border-gray-200 hidden">
          <nav class="flex flex-col space-y-4 pt-4">
            <a href="/" class="text-gray-600 hover:text-emerald-600 transition-colors px-2 py-1">Home</a>
            <a href="/cross-border-shopping-tips.html" class="text-gray-600 hover:text-emerald-600 transition-colors px-2 py-1">Shopping Tips</a>
            <div class="pt-2">
              <button class="btn-primary w-full add-to-browser-btn">Add to Browser</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `;
  
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  
  // Mobile menu toggle functionality
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  mobileBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    menuIcon?.classList.toggle('hidden');
    closeIcon?.classList.toggle('hidden');
  });

  // Add to browser button functionality
  const addToBrowserBtns = document.querySelectorAll('.add-to-browser-btn');
  addToBrowserBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dialog = document.getElementById('comingSoonDialog');
      dialog?.classList.remove('hidden');
      dialog?.classList.add('flex');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHeader);
} else {
  loadHeader();
}
