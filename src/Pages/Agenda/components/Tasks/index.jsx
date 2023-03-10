import React, { useState } from 'react';
import './tasks.css'

import { useSpring, animated } from 'react-spring';


const Tasks = () => {

    const [showDiv, setShowDiv] = useState(false);
    const [selectedOption, setSelectedOption] = useState("option1");
    const [task, setTask] = useState('');
  
    const divAnimation = useSpring({
        height: showDiv ? 'auto' : '0px',
        backgroundColor: '#1d1d1d',
        padding: showDiv ? '15px' : '0px',
        
      });

      
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    

    
  return (
    <div>
        <div>
            <div className='tasksIncomplet' onClick={() => {setShowDiv(!showDiv)}}>
                <p>Tarefas incompletas - Dias Anteriores</p> 
                <p>\/</p>
            </div>

            {
                showDiv ? (
                    <animated.div style={divAnimation} className='containerTaskIncomplet'>
                        
                            <div className='taskIncomplet'>
                                <div>
                                    <p>Dia xx/xx/xxxx</p>
                                    <button>Editar</button>
                                </div>
                                
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        
                                <label>
                                <p>Prioridade:</p>
                                    <input
                                    type="radio"
                                    value="normal"
                                    checked={selectedOption === "normal"}
                                    onChange={handleOptionChange}
                                    />Normal
                                    
                                    <input
                                    type="radio"
                                    value="alta"
                                    checked={selectedOption === "alta"}
                                    onChange={handleOptionChange}
                                    />Alta
                                </label>
                            </div>

                            <div  className='taskIncomplet'>
                                <div>
                                    <p>Dia xx/xx/xxxx</p>
                                    <button>Editar</button>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                
                        
                                <label>
                                <p>Prioridade:</p>
                                    <input
                                    type="radio"
                                    value="normal"
                                    checked={selectedOption === "normal"}
                                    onChange={handleOptionChange}
                                    />Normal
                                    
                                    <input
                                    type="radio"
                                    value="alta"
                                    checked={selectedOption === "alta"}
                                    onChange={handleOptionChange}
                                    />Alta
                                </label>
                            </div>

                            <div  className='taskIncomplet'>
                                <div>
                                    <p>Dia xx/xx/xxxx</p>
                                    <button>Editar</button>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                
                        
                                <label>
                                <p>Prioridade:</p>
                                    <input
                                    type="radio"
                                    value="normal"
                                    checked={selectedOption === "normal"}
                                    onChange={handleOptionChange}
                                    />Normal
                                    
                                    <input
                                    type="radio"
                                    value="alta"
                                    checked={selectedOption === "alta"}
                                    onChange={handleOptionChange}
                                    />Alta
                                </label>
                            </div>
               
                    </animated.div>
                ): null
            } 
            
            <div className='inputText'>
                <textarea
                    type="text"
                    id="text-input"
                    value={task}
                    onChange={(e)=>{setTask(e.target.value)}}
                    placeholder='Digite uma tarefa para o dia xx/xx/xxxx'
                />
                {task}
                <div className='radioInput'>
                    <p>Prioridade:</p>
                    <input
                    type='radio'/> Normal
                    <input
                    type='radio'/> Alto
                </div>
                <button>Adicionar Tarefa</button>
            </div>
            
            <div className='containerTasks'>

                <div className='task'>
                    <div className='title-task'>
                        <p>Dia xx/xx/xxxx</p>
                        <button>Editar</button>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                <div className='task'>
                    <div className='title-task'>
                        <p>Dia xx/xx/xxxx</p>
                        <button>Editar</button>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>
                </div>

                <div className='task'>
                    <div className='title-task'>
                        <p>Dia xx/xx/xxxx</p>
                        <button>Editar</button>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                </div>
                
                <div className='task'>
                    <div className='title-task'>
                        <p>Dia xx/xx/xxxx</p>
                        <button>Editar</button>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive.</p>
                </div>
                
                <div className='task'>
                    <div className='title-task'>
                        <p>Dia xx/xx/xxxx</p>
                        <button>Editar</button>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks