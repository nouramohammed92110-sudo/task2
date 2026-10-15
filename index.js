let btn = document.getElementById("btn")
let ul = document.getElementById("ul")
let icon = document.getElementById("icon")
let form = document.getElementById("form")
let inp = document.getElementById("inp")
let list = document.getElementById("list")
let editform= document.getElementById("editform")
let editinp = document.getElementById("editinp")
let editid =null

let isshow = false


let tasks = [
    { id: 1, title: "read book" },
    { id: 2, title: "play football" },
    { id: 3, title: "study programming" },

]

btn.addEventListener("click", () => {
    isshow = !isshow
    if (isshow === true) {
        ul.classList.remove("hidden")
        ul.classList.add("flex")
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-x")

    } else {
        ul.classList.remove("flex")
        ul.classList.add("hidden")
        icon.classList.remove("fa-x")
        icon.classList.add("fa-bars")
    }
})

function rendertasks() {
    list.innerHTML = ""

    tasks.map((task) => {
        list.innerHTML += `
         <li class="w-full flex justify-between items-center p-4 rounded-md bg-slate-300">${task.title}

                <div class="flex gap-5">
                    <span onclick="edit(${task.id})" class="text-black-500"><i class="fa-solid fa-pencil"></i></span>

                    <span onclick="deletetask(${task.id})" class="text-red-500"><i class="fa-solid fa-trash"></i></span>
                </div>

            </li>`

    })
}

rendertasks()

function addtask() {
    let value = inp.value
    let newtask = {
        id: tasks.length + 1,
        title: value
    }
    tasks.push(newtask)
    inp.value = ""
    rendertasks()
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addtask()
})


function deletetask(id) {
    let task = tasks.find((task) => task.id === id);
    if (!task) {
        alert("task not found");
        return;
    } else {
        tasks = tasks.filter((task) => task.id != id);
        rendertasks();
    }

}


function edit(id){
    form.classList.add("hidden")
    form.classList.remove("flex")
    editform.classList.add("flex")
    editform.classList.remove("hidden")
    editid=id
   

    let task = tasks.find((task) => task.id === id);
    editinp.value = task.title
}

editform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let task = tasks.find((task) => task.id === editid);
    task.title = editinp.value

    editform.classList.remove("flex")
    editform.classList.add("hidden")
    form.classList.remove("hidden")
    form.classList.add("flex")
    editinp.value=""
    editid = null
    rendertasks()


})