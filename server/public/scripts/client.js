$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    updateGuestList();
    $('#guestList').on('click', '.deleteButton', uninviteMonster);
}

function uninviteMonster(){
    let monsterId = $(this).attr('monster-id');
    $.ajax({
        method: 'DELETE',
        url: '/monsters',
        data: {_id: monsterId}
    }).then(function(response){
        console.log(response);
        updateGuestList();
    }).catch(function(error){
        alert('Error in /monsters delete');
        console.log('Error: ', error);
    });
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
            <button monster-id="${monster._id}" class="deleteButton">Uninvite</button>
            `)
        }
    }).catch(function(error){
        alert('Error in /monsters get');
        console.log('Error: ', error);
    })
}