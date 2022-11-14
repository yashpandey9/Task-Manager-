//A method of getting today's date.
// exports.getDate = function (){
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
    
//     return today = dd + '/' + mm + '/' + yyyy;
// }

//Another method of getting today's date.
exports.getDate = function(){
    const options = {day: 'numeric', weekday: 'short', month: 'short'}
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
}