document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('notifyModal');
  const modalMovie = document.getElementById('modalMovie');
  const modalHiddenMovie = document.getElementById('modalHiddenMovie');
  const modalEmail = document.getElementById('modalEmail');
  const modalClose = document.querySelector('.modal-close');
  const modalForm = document.getElementById('modalForm');
  const modalCancel = document.querySelector('.modal-cancel');
  const modalConfirmation = document.getElementById('modalConfirmation');

  function openModalFor(title) {
    modalMovie.textContent = `Notify me about "${title}"`;
    modalHiddenMovie.value = title;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    modalEmail.focus();
    modalConfirmation.style.display = 'none';
    modalConfirmation.textContent = '';
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    modalEmail.value = '';
  }

  // Attach click handlers to all notify-btns
  document.querySelectorAll('.notify-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title || 'Selected Movie';
      openModalFor(title);
    });
  });

  // Close handlers
  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  // Form submit: currently local-only (no backend). Replace with fetch() later.
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movie = modalHiddenMovie.value;
    const email = modalEmail.value.trim();
    if (!email) return;
    // Call backend API here?
    modalConfirmation.style.display = 'block';
    modalConfirmation.textContent = `Thanks — we'll notify ${email} about "${movie}".`;
    // small UX: clear form and auto-close in 2 seconds
    modalEmail.value = '';
    setTimeout(() => {
      closeModal();
    }, 2000);

    try {
      const saved = JSON.parse(localStorage.getItem('notifyList') || "[]");
      saved.push({ email, movie, requestedAt: new Date().toISOString() });
      localStorage.setItem('notifyList', JSON.stringify(saved));
    } catch (err) { /* ignore storage errors */ }
  });
});