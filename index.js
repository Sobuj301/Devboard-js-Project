let isActive = true
const handleBackgroundColor = () =>{
    const container = document.getElementById('container')
   isActive = !isActive
   if(isActive){
      container.style.backgroundColor ="green"
   }
   else{
      container.style.backgroundColor ="red"
   }
}

const tasksDataLoad = async () => {
    const res = await fetch('tasks.json');
    const data = await res.json()
    displayTasks(data)

}


const removeAllActivity = () =>{
    const activity = document.getElementById('activity')
    activity.innerHTML = ""
}

const displayTasks = async (tasks) => {
    const tasksContainer = document.getElementById('tasks-container');
    tasks.forEach(task => {
        const div = document.createElement('div')
        div.innerHTML = `
              <div class="card card-border p-3 bg-[#a1a7cb] ">
                    <p class="bg-white w-fit px-3 py-1 rounded-md">${task.projectName}</p>
                    <div class="">
                        <h2 class="card-title text-2xl mt-3">${task.taskTitle}</h2>
                        <p class="bg-white px-3 py-2 rounded-md mt-3">${task.description}
                        </p>
                        <div class="flex justify-between items-center mt-3">
                            <div>
                                <p class="font-normal">Deadline</p>
                                <h3 class="font-bold text-xl">${task.deadline}</h3>
                            </div>
                            <button id="btn-${task.id}" class="btn border-none outline-none text-white bg-[#3752FD]">${task.status}</button>
                        </div>
                    </div>
                </div>
        `
        tasksContainer.appendChild(div)

        const button = document.getElementById(`btn-${task.id}`)

        button.addEventListener('click',function(e){
            const activity = document.getElementById('activity')
            const time = new Date();
            const div = document.createElement('div')
            div.classList="border p-5 mb-3 m-3"
            div.innerHTML =`
              <h2 class="font-bold text-xl">${task.taskTitle}</h2>
              <p>${time}</p>
            `

            activity.appendChild(div)
        })
    button.addEventListener('click',function(){
        const reduce = document.getElementById('reduce');
        const increase = document.getElementById('increase');
        let increaseValue = parseInt(increase.innerText);
        increaseValue++;
        increase.innerText = increaseValue
        let reduceValue = parseInt(reduce.innerText);

        if(reduceValue === 0){
           
            return alert('not allow ')
        }
        reduceValue -- ;
        button.disabled="true"
        reduce.innerText = reduceValue
        
    })


    })
}







tasksDataLoad()