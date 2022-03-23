const weekDays = ["Niedziela","Poniedziałek", "Wtorek","Środa","Czwartek","Piątek","Sobota"]

function createCalendar(){
    if(!document.getElementById("date").value) return
    document.getElementById("calendar").innerHTML = ""
    let date = new Date(document.getElementById("date").value)
    month = date.getMonth()
    date = (date.getDay() == 0)
        ? new Date(Date.parse(date) - 6 * 86400000)
        : new Date(Date.parse(date) - (date.getDay()-1) * 86400000)

    for(let i = 0; i < 42; i++){
        let x = document.createElement("div")
        x.className = "box"
        x.innerHTML = date.getDate() + "<br>" + weekDays[date.getDay()]
        if(noteDate.includes(Date.parse(date))){
            let index = noteDate.indexOf(Date.parse(date))
            x.innerHTML += "<br>"+ noteContent[index]
        }
        x.style.backgroundColor = (date.getDay() == 0) 
            ? (date.getMonth() == month) 
                ? "tan" 
                : "darkorange" 
            : (date.getMonth() == month) 
                ? "white" 
                : "grey"
        x.setAttribute("data-date",date)
        x.setAttribute("onclick",`notatka(${i})`)
        x.id = i;
        document.getElementById("calendar").appendChild(x)
        date = new Date(Date.parse(date) + 86400000)
    }
}

createCalendar()

const noteDate = []
const noteContent = []

function note(cell){
    let x = Date.parse(document.getElementById(cell).getAttribute("data-date"))
    if(noteDate.includes(x)){
        let i = noteDate.indexOf(x)
        noteDate.splice(i, 1)
        noteContent.splice(i, 1)
        return createCalendar()
    }
    let y = prompt("Podaj notatke")
    if(!y || y == "") return
    noteDate.push(x)
    noteContent.push(y)
    createCalendar()
}
