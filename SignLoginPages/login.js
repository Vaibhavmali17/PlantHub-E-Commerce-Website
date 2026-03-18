document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Set user auth state
            localStorage.setItem('isLoggedIn', 'true');
            
            // Check if there is a redirect parameter
            const params = new URLSearchParams(window.location.search);
            const redirectParams = params.get('redirect');
            
            if (redirectParams) {
                // Return to the protected page the user was trying to access
                window.location.href = redirectParams;
            } else {
                // Otherwise, bring them to the home page
                window.location.href = '../home.html';
            }
        });
    }
});
