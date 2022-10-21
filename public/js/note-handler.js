const purchaseEl = document.querySelector('#purchase-note');
const viewEl = document.querySelector('#view-note');

const noteArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const timeArr = ['quarter', 'half', 'whole', 'eighth', 'sixteenth']

const purchaseNote = async (event) => {
    event.preventDefault();
        let note_val = noteArr[Math.floor(Math.random()*7)];
        let time = timeArr[Math.floor(Math.random()*5)];
        const response = await fetch('/api/notes', {
            method: 'POST',
            body:JSON.stringify({ note_val, time }),

            headers: { 'Content-Type': 'application/json' },
        });
            
        if (response.ok) {
            console.log(await response.text());
        } else {
            alert(response.statusText);
        }
}

const viewNotes = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/notes', {
        method: 'GET',
    });
        
    if (response.ok) {

        //Sorts all of the user notes into objects with counts
        let res=await response.json();
        let userNotes = [];
        for(let i=0; i< res.length; i++){
            let resolved = false;
            for(let j=0; j<userNotes.length; j++){
                if(userNotes[j].note_val == res[i].note_val && userNotes[j].time == res[i].time){
                    userNotes[j].count++;
                    resolved = true;
                }
            }
            if(!resolved){
                userNotes.push({time:res[i].time, note_val:res[i].note_val, count:1});
            }
        }
       console.log(userNotes);
    } else {
        alert(response.statusText);
    }
}

viewEl.addEventListener('click', viewNotes);
purchaseEl.addEventListener('click',purchaseNote);