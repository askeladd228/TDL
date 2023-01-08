const headerBoard = document.querySelector('.headerBoard');
const board = document.querySelector('.board');
const inputBoard = document.querySelector('.inputBoard')

const ProjectTab = (projectName) => {
  
  const addProjectTitle = () => {
    headerBoard.replaceChildren();
    const projectTitle = document.createElement('div');
    projectTitle.textContent = `${projectName.textContent}`;
    headerBoard.appendChild(projectTitle);
  };

  const addInputs = () => {
    const labelTitle = document.createElement('label');
    const labelDesc = document.createElement('label');
    const labelDue = document.createElement('label');
    const inputTitle = document.createElement('input');
    const inputDesc = document.createElement('input');
    const inputDue = document.createElement('input');
    const checkBox = document.createElement('input');
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
    checkBox.setAttribute('type', 'checkBox');
    confirmButton.textContent = 'Confirm';
    cancelButton.textContent = 'Cancel';
    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    
    inputBoard.appendChild(labelTitle);
    inputBoard.appendChild(inputTitle);
    inputBoard.appendChild(labelDesc);
    inputBoard.appendChild(inputDesc);
    inputBoard.appendChild(labelDue);
    inputBoard.appendChild(inputDue);
    inputBoard.appendChild(buttonContainer); 
  };

  // const addEvent = () => {
  //   projectName.addEventListener('click', addProjectTitle);
  //   projectName.addEventListener('click', addInputs);
  // }
  
  return {addProjectTitle, addInputs};
};

export {ProjectTab};

console.log('wazzup')