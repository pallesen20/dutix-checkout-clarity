// Dutix JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Coming Soon Dialog
  const dialog = document.getElementById('comingSoonDialog');
  const closeDialogBtn = document.getElementById('closeDialog');
  const closeDialogBtnAlt = document.getElementById('closeDialogBtn');

  // Close dialog
  function closeDialog() {
    dialog?.classList.remove('flex');
    dialog?.classList.add('hidden');
  }

  closeDialogBtn?.addEventListener('click', closeDialog);
  closeDialogBtnAlt?.addEventListener('click', closeDialog);

  // Close dialog when clicking outside
  dialog?.addEventListener('click', function(e) {
    if (e.target === dialog) {
      closeDialog();
    }
  });

  // Close dialog on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && dialog?.classList.contains('flex')) {
      closeDialog();
    }
  });

  // FAQ Toggle (for other pages)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question?.addEventListener('click', function() {
      const isOpen = answer?.classList.contains('show');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.classList.remove('show');
      });
      document.querySelectorAll('.faq-icon').forEach(icon => {
        icon.textContent = '+';
      });
      
      // Toggle current FAQ
      if (!isOpen) {
        answer?.classList.add('show');
        item.querySelector('.faq-icon').textContent = '−';
      }
    });
  });
});