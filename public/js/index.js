window.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.requests')
    const dropContainer = document.querySelectorAll('.drop')

    tasks.forEach(task => {
        task.addEventListener('dragstart', (e) => {
            dragstart(e)
        })
    })
})

const dragstart = (e) => {
    console.log('drag start')
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = "move";
}

const dragOverHandler = (e) => {
    e.preventDefault()
    console.log(e)
    e.dataTransfer.dropEffect = 'move'
}


const dropHandler = (e) => {
    e.preventDefault()
    // console.log(e)
    const data = e.dataTransfer.getData("text/plain")
    console.log(data)
    e.target.appendChild(document.getElementById(data))
}
