$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    updateGuestList();
}

function updateGuestList(){
    let el = $('#guestList');
    el.empty();
    $.ajax({
        method: 'GET',
        url: '/monsters'
    }).then(function(response){
        for (monster of response){
            el.append(`
            <li>A ${monster.name} is attending, its lethality is ${monster.lethality}
            <button class="deleteButton">Uninvite</button>
            `)
        }
    }).catch(function(error){
        alert('Error in /monsters get');
        console.log('Error: ', error);
    })
}