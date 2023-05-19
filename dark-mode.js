const toggleDarkMode = () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkModeEnabled', 'true');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkModeEnabled', 'false');
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    const darkModeEnabled = localStorage.getItem('darkModeEnabled');
  
    if (darkModeEnabled === 'true') {
      darkModeToggle.checked = true;
      document.body.classList.add('dark-mode');
    }
  
    darkModeToggle.addEventListener('change', toggleDarkMode);
  });
  