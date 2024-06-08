'use client';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const TodoList = () => {

    const [taskList, setTaskList] = useState([
        // { task: 'learn html', completed: false },
        // { task: 'learn css', completed: false },
        // { task: 'learn JavaScript', completed: false },
        // { task: 'learn React', completed: false },
    ]);

    let num = 2635;

    const addNewTodo = (e) => {
        if (e.code === 'Enter') {
            if (!e.target.value) return toast.error('please enter a task') // if we not typ any thing in box then it gives alert after pressing enter
            console.log(e.target.value);

            const newTask = {
                task: e.target.value, completed: false  // this operation is for making object all that is adding new array
            };
            setTaskList([newTask, ...taskList])   //here threedots shows elements of tasklist  if we typ in input the it show under it in check box 
 toast.success('task added successfully')


            e.target.value = '';
        }
    }

    const deleteTask = (index) => {
        console.log(index);

        const temp = taskList
        temp.splice(index, 1)
        setTaskList([...temp])   // FOR DELETING THE LIST OF INPUT IN SERVER


    }

    const updateStatus = (index,value)=>{
// console.log(index,value);
const temp= taskList
temp[index].completed=value
setTaskList([...temp])


    }

    return (
        <div className='mx-64'>
            <h1 className='text-3xl font-bold text-center my-5'>Todo List</h1>

            <div className='border-2 shadow-lg rounded-lg p-5'>
               

                <div className='p-4 h-[50vh] overflow-auto'> // 
                    {/* above tailwind is for scrolling */}
                    {
                        taskList.map((obj, index) => {
                            return <div key={index} className='grid grid-cols-2 p-4 mb-3 border-2 cursor-pointer hover:bg-gray-300'>
                                <div className='flex gap-4 items-center'>
                                    <input type="checkbox" check= {obj.completed} onChange={(e)=>updateStatus(index, e.target.checked)} />
                                    <p className={obj.completed&&'line-through text-red-400'}>{obj.task}</p> 
                                </div> 
                            {/* the class obj name is above is condition if it true then clr is ren under the inpit typ */}

                                <button onClick={() => { deleteTask(index) }} className='p-2 w-fit ml-auto bg-green-600 text-white rounded-lg'>Delete</button>
                            </div>
                        })
                    }
                </div>

                <input
                    onKeyDown={addNewTodo}
                    type="text"
                    className='w-full border border-blue-500 px-4 py-2 rounded-md'
                    placeholder='Add a new todo'
                />
            </div>

        </div>
    )
}

export default TodoList;