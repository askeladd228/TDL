const headerBoard = document.querySelector('.headerBoard');
const board = document.querySelector('.board');
const inputBoard = document.querySelector('.inputBoard')
const inputBoardContainer = document.querySelector('.inputBoardContainer');
const addTaskContainer = document.querySelector('.addTaskContainer');
const taskList = document.querySelector('.taskList');

const ProjectTab = (projectName) => {
  
  const addProjectTitle = () => {
    headerBoard.replaceChildren();
    const projectTitle = document.createElement('div');
    projectTitle.textContent = `${projectName.textContent}`;
    projectTitle.classList.add('projectTitle');
    headerBoard.appendChild(projectTitle);
  };

  const addInputs = () => {
    const labelTitle = document.createElement('label');
    const labelDesc = document.createElement('label');
    const labelDue = document.createElement('label');
    const inputTitle = document.createElement('input');
    const inputDesc = document.createElement('input');
    const inputDue = document.createElement('input');
    const confirmButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    const buttonContainer = document.createElement('div');
    labelTitle.textContent = 'Title:';
    labelTitle.setAttribute('for', 'title');
    labelDesc.textContent = 'Description:';
    labelDesc.setAttribute('for', 'desc');
    labelDue.textContent = 'Due Date:';
    labelDue.setAttribute('for', 'due');
    inputTitle.setAttribute('type', 'text');
    inputDesc.setAttribute('type', 'text');
    inputDue.setAttribute('type', 'date');
    confirmButton.textContent = 'Confirm';
    cancelButton.textContent = 'Cancel';
    confirmButton.classList.add('confirm');
    cancelButton.classList.add('cancel');
    confirmButton.addEventListener('click', () => {
      if (inputTitle.value == '') {
        alert('Please add title!');
      } else {
        const taskContainer = document.createElement('div');
        const title = document.createElement('div');
        title.textContent = `${inputTitle.value}`;
        const desc = document.createElement('div');
        desc.textContent = `${inputDesc.value}`;
        const due = document.createElement('div');
        due.textContent = `${inputDue.value}`;
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkBox');
        taskContainer.appendChild(checkBox);
        taskContainer.appendChild(title);
        taskContainer.appendChild(desc);
        taskContainer.appendChild(due);
        taskContainer.classList.add('taskContainer');
        taskList.appendChild(taskContainer);
        inputBoardContainer.style.display = 'none';
        inputTitle.value = '';
        inputDesc.value = '';
        inputDue.value = '';
      };
    });

    cancelButton.addEventListener('click', () => {
      inputBoardContainer.style.display = 'none';
      inputTitle.value = '';
      inputDesc.value = '';
      inputDue.value = '';
    })

    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    
    inputBoard.appendChild(labelTitle);
    inputBoard.appendChild(inputTitle);
    inputBoard.appendChild(labelDesc);
    inputBoard.appendChild(inputDesc);
    inputBoard.appendChild(labelDue);
    inputBoard.appendChild(inputDue);
    inputBoard.appendChild(buttonContainer);
    inputBoardContainer.style.display = 'none'; 
  };

  const addTaskButton = () => {
    const addTask = document.createElement('div');
    addTask.textContent = '+Add a Task';
    addTask.classList.add('addTask');
    addTask.addEventListener('click', () => {
      inputBoardContainer.style.display = 'block';
    });
    addTask.classList.add('addTask');
    addTaskContainer.appendChild(addTask);
  };

  const clearBoard = () => {
    headerBoard.replaceChildren();
    taskList.replaceChildren();
    inputBoard.replaceChildren();
    addTaskContainer.replaceChildren();
  }; 
  
  return {addProjectTitle, addInputs, addTaskButton, clearBoard};
};

export {ProjectTab};

console.log('wazzup')