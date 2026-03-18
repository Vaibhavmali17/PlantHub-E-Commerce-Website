document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // 1. Hide or Show "Services" link
    // Find any anchor tags that link to the services page
    const servicesLinks = document.querySelectorAll('a[href*="services.html"]');
    servicesLinks.forEach(link => {
        if (!isLoggedIn) {
            // If it's in a list item (like the navbar), hide the parent <li>
            if (link.parentElement && link.parentElement.tagName === 'LI') {
                link.parentElement.style.display = 'none';
            } else {
                link.style.display = 'none';
            }
        } else {
            // Show it
            if (link.parentElement && link.parentElement.tagName === 'LI') {
                link.parentElement.style.display = 'block';
            } else {
                link.style.display = 'inline-block';
            }
        }
    });

    // 2. Hide "Login" & "Signup" and show "Logout", OR vice versa
    const authContainers = document.querySelectorAll('.d-flex.align-items-center');
    
    authContainers.forEach(container => {
        const loginLink = container.querySelector('a[href*="login.html"]');
        const signupLink = container.querySelector('a[href*="index.html"]');
        
        // This targets the specific Signup link without matching the navbar brand index.html
        // We ensure we only hide buttons that actually say Signup or Login
        
        if (isLoggedIn) {
            if (loginLink && loginLink.textContent.trim().toLowerCase() === 'login') loginLink.style.display = 'none';
            if (signupLink && signupLink.textContent.trim().toLowerCase() === 'signup') signupLink.style.display = 'none';
            
            // Add a Logout button if it doesn't already exist
            if (!container.querySelector('.logout-btn')) {
                const logoutBtn = document.createElement('button');
                logoutBtn.className = 'btn btn-outline-danger logout-btn me-2 fw-bold';
                logoutBtn.textContent = 'Logout';
                logoutBtn.onclick = () => {
                    localStorage.removeItem('isLoggedIn');
                    window.location.reload();
                };
                
                // If loginLink exists, insert before it
                if (loginLink) {
                    container.insertBefore(logoutBtn, loginLink);
                } else if (container.firstChild) {
                    container.insertBefore(logoutBtn, container.firstChild);
                }
            }
        } else {
            if (loginLink) loginLink.style.display = 'inline-block';
            if (signupLink) signupLink.style.display = 'inline-block';
            
            const logoutBtn = container.querySelector('.logout-btn');
            if (logoutBtn) logoutBtn.remove();
        }
    });
});
