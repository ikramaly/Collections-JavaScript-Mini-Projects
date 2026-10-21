// function calculateAge(){
//     const birthdate = document.querySelector("#birthdate").value;
//     let BirthDate = new Date(birthdate);
//     let today = new Date();

//     if(BirthDate > today){
//         document.querySelector("#result").innerText = "Invalid DOB."
//         return;
//     }

//     const diffInMs = today-BirthDate;  // total miliseconds
    
//     let age = today.getFullYear() - BirthDate.getFullYear();
//     let month = 0;
//     let day = 0; 
//     const totalMonth = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
//     const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24 )); //total days 
//     const totalHours = Math.floor(diffInMs / (1000 * 60 * 60 )); // total hours 
//     const totalMinutes = Math.floor(diffInMs / (1000 * 60 )); // total minutes 
//     const totalSeconds = Math.floor(diffInMs / (1000)) // total seconds 
//     const totalMiliSec = Math.floor(diffInMs);
    
//     let monthDifference  = today.getMonth() - BirthDate.getMonth();
//     let dayDifference = today.getDate() - BirthDate.getDate();
    
//     //adjust age if birthday hasn't occured yet this year.

//     if(monthDifference < 0 || (monthDifference === 0 && today.
//         getDate() < BirthDate.getDate())){
//         age--;
//     }if(monthDifference >= 0){
//         month += monthDifference;
//     }else{
//         month += today.getMonth();
//     }
//     if( dayDifference >= 0){
//         day +=dayDifference;
//     }else{
//         day += today.getDate();
//     }

//     //Display the result 

//     if(BirthDate < today){
//         document.querySelector("#result").innerText=`
//             Your age : ${age} years , ${monthDifference} month ${day} days.
//             Your total month : ${totalMonth} & ${day} days.
//             Your total day : ${totalDays}
//             Your total hours : ${totalHours}
//             Your total minutes : ${totalMinutes}
//             Your total seconds  : ${totalSeconds}
//             Your total miliseconds :${totalMiliSec}  
//         `;
//     }   
// }
function calculateAge() {
    const birthdate = document.querySelector("#birthdate").value;
    const result = document.querySelector("#result");

    if (!birthdate) {
        result.innerText = "Please select your birth date.";
        return;
    }

    const birth = new Date(birthdate);
    const today = new Date();

    if (birth > today) {
        result.innerText = "Invalid DOB";
        return;
    }

    // -------- Calendar Age (Years, Months, Days) --------
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // -------- Total Time (Milliseconds based) --------
    const diffMs = today - birth;

    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalDays / 30.4375); // average month
    const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const totalSeconds = Math.floor(diffMs / 1000);

    // -------- Display Result --------
    result.innerText = 
        `Your Age: ${years} years ${months} months ${days} days.
        Total Months (approx): ${totalMonths}
        Total Weeks: ${totalWeeks} 
        Total Days: ${totalDays}
        Total Hours: ${totalHours}
        Total Minutes: ${totalMinutes}
        Total Seconds: ${totalSeconds}
    `;
}

