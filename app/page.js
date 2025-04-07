"use client"
import React, { useState } from 'react'
import Footer from "@/Components/Footer"

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title: title, description: description }])
    console.log(mainTask)
    settitle("")
    setdescription("")
  }

  const deleteHandler = (index) => {
    let copyTask = [...mainTask]
    copyTask.splice(index, 1)
    setmainTask(copyTask)
  }

  let renderTask = <h2 className='font-bold'>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className='flex items-center justify-between mb-3'>
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-xl font-bold'>{task.title}</h5>
            <p className='text-xl font-semibold'>{task.description}</p>
          </div>
          <button
            onClick={() => deleteHandler(index)}
            className='bg-red-400 text-white px-4 py-2 rounded-md font-bold ml-auto'>Delete</button>
        </li>
      );
    })
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div>
        <h1 className='text-4xl font-bold bg-black text-white p-4 font-sans flex justify-center items-center'>
          My Todo List
        </h1>
      </div>

      <form className='flex justify-center items-center' onSubmit={submithandler}>
        <input type="text"
          placeholder='Add a new task'
          className='border-2 border-black rounded-md p-2 m-4'
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input type="text"
          placeholder='Enter description'
          className='border-2 border-black rounded-md p-2 m-4'
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button className='bg-zinc-800 text-white p-2 rounded-md'>Add Task</button>
      </form>

      <hr />
      <div className='bg-slate-200 p-8 flex-grow'>
        <ul>
          {renderTask}
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default page