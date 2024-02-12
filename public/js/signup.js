const signupFormHandler = async function(event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-signup');
    const passwordEL = document.querySelector('#password-input-signup');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.ariaValueMax,
            password: passwordEL.ariaValueMax,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to sign up');
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);