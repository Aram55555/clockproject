//                                        Օրացույց

const daysCont = document.querySelector(".days")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const month = document.querySelector("#month")
const todayBtn = document.querySelector(".today-btn")

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Desember",
]

const weekend = ["Sun", "Mun", "Tue", "Wed", "Thu", "Fri", "Sat"]
const date = new Date()

let currentMonth = date.getMonth()
let currentYear = date.getFullYear()
removeToday()
function calendar() {
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const lastDayIndex = lastDay.getDay()
    const lastDayDate = lastDay.getDate()
    const prevLastDay = new Date(currentYear, currentMonth, 0)
    const prevLastDayDate = prevLastDay.getDate()
    const nextDays = 7 - lastDayIndex - 1
    month.innerHTML = `${months[currentMonth]} ${currentYear}`
    let days = ""

    for (let x = firstDay.getDay(); x > 0; x--) {
        days += `<div class="day prev" > ${prevLastDayDate - x + 1}</div>`
    }
    for (let i = 1; i <= lastDayDate; i++) {
        if (i == new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            days += `<div class="day today">${i}</div>`
        } else {
            days += `<div class="day">${i}</div>`
        }
    }
    for (let i = 1; i <= nextDays; i++) {
        days += `<div class="day next">${i}</div>`
    }

    daysCont.innerHTML = days

}

calendar()
nextBtn.addEventListener("click", () => {
    currentMonth++
    if (currentMonth > 11) {
        currentMonth = 0
        currentYear++
        }
        calendar()
        removeToday()
})

prevBtn.addEventListener("click", () => {
    currentMonth--
    if (currentMonth < 0) {
        currentMonth = 11
        currentYear--
    }
    calendar()
    removeToday()
})

todayBtn.addEventListener("click", () => {
    currentMonth = date.getMonth()
    currentYear = date.getFullYear()
    calendar()
    removeToday()
})

function removeToday() {
    if (currentMonth == date.getMonth() &&
        currentYear === date.getFullYear()
    ) {
       todayBtn.style.display = "none" 
    }else todayBtn.style.display = "block"
}

// tvayin 

let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")


setInterval( () => {
    let dateNew = new Date();
    console.log(dateNew.getMinutes());
    hour.innerHTML = (dateNew.getHours() < 10 ? "0" : "") + dateNew.getHours()
    minute.innerHTML = (dateNew.getMinutes() < 10 ? "0": "") + dateNew.getMinutes()
    second.innerHTML = (dateNew.getSeconds() < 10 ? "0" : "") + dateNew.getSeconds()
    
},1000)

//analogayin


 let slaqSecond = document.getElementById("secondSlaq")
 let slaqMinute = document.getElementById("minuteSlaq")
 let slaqHour = document.getElementById("hourSlaq")
  
 function analogayinJam() {
    let dateNe = new Date()
  let hour = dateNe.getHours()
  let minute = dateNe.getMinutes()
  let second = dateNe.getSeconds()

  let hourRotate = 30*hour + minute/2
  let minuteRotate = 6*minute;
  let secondRotate = 6*second; 
  
  slaqHour.style.transform = `rotate(${hourRotate}deg)`
  slaqMinute.style.transform = `rotate(${minuteRotate}deg)`
  slaqSecond.style.transform = `rotate(${secondRotate}deg)`

 }

setInterval(analogayinJam,1000)