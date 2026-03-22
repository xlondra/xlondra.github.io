// 1. Target the .command elements directly
const commandContainers = document.querySelectorAll('.command-wrapper');

commandContainers.forEach(container => {
  // 2. Find the code element inside this specific container to get the data
  const code = container.querySelector('.command-wrapper *[data-copy-content]');
  
  if (code) {
    const contentToCopy = code.getAttribute('data-copy-content');

    if (contentToCopy && contentToCopy.trim().length > 0) {
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-trigger';
      
      let copyTimer = null;

      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(contentToCopy.trim()).then(() => {
          copyBtn.classList.add('copied');
          
          if (copyTimer) clearTimeout(copyTimer);

          copyTimer = setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyTimer = null;
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      });

      // 3. Append the button to the .command container instead of the pre
      container.appendChild(copyBtn);
    }
  }
});