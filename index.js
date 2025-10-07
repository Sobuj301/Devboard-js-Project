const tasksDataLoad = async() =>{
    const res = await fetch('tasks.json');
    const data = await res.json()
    displayTasks(data)
   
}


const displayTasks = async(tasks) =>{
     const tasksContainer = document.getElementById('tasks-container');
     tasks.forEach(task =>{
        console.log(task)
        const div = document.createElement('div')
        div.innerHTML = `
              <div class="card card-border p-3 bg-[#a1a7cb] ">
                    <p class="bg-white w-fit px-3 py-1 rounded-md">ShopEase</p>
                    <div class="">
                        <h2 class="card-title text-2xl mt-3">Fix Mobile Button Issue </h2>
                        <p class="bg-white px-3 py-2 rounded-md mt-3">A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>
                        <div class="flex justify-between items-center mt-3">
                            <div>
                                <p class="font-normal">Deadline</p>
                                <h3 class="font-bold text-xl">21 March 2025</h3>
                            </div>
                            <button class="btn border-none outline-none text-white bg-[#3752FD]">Completed</button>
                        </div>
                    </div>
                </div>
        `
        tasksContainer.appendChild(div)
     })
}



tasksDataLoad()