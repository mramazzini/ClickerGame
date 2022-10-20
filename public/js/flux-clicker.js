const fluxEl = document.querySelector('#flux-value');
const fluxClick = async (event) => {
    
    //Get the flux amount
    const request= await fetch(`/api/flux/`, {
        method: 'GET',
    });

    //Update the amount and store new about in database
    if (request.status === 200) {
        let flux = parseInt(await request.text())+1;
        
        fluxEl.innerHTML="Flux: " + flux;
        const response = await fetch('/api/flux/', {
            method: 'PUT',
            body: JSON.stringify({
                flux
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    else{
        alert ('Error updating flux');
    }
    
}

document.querySelector('#flux-clicker').addEventListener('click',fluxClick);