function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });

//what if we wanted to use that same alert message on a bunch of elements?    
/*
    const input = document.getElementById('input');
    function clickAlert() {
        alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert);
*/    
}