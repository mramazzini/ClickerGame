const logout = async () => {
    const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/game');
};

document.querySelector('.logout').addEventListener('click', logout);