import {ProjectTab} from './project';

const projectInput = document.querySelector('.inputProject');
const projectAdd = document.querySelector('.addProject');
const cancelButton = document.querySelector('.cancel');
const confirmButton = document.querySelector('.confirm');
const projectList = document.querySelector('.projectList');
const taskList = document.querySelector('.taskList');
const inputBoard = document.querySelector('.inputBoard');
const headerBoard = document.querySelector('headerBoard');
const addTaskContainer = document.querySelector('addTaskContainer');

const setDisplay = (() => {
  const setDisplayNone = (thing) => {
    thing.addEventListener('click', () => {
      projectInput.style.display = 'none';
    });
  }

  const setDisplayBlock = (thing) => {
    thing.addEventListener('click', () => {
      projectInput.style.display = 'block';
    });
  }

  const addProjectName = (thing) => {
    thing.addEventListener('click', () => {

      let projectName = document.createElement('div');
      projectName.textContent = `${document.getElementById('projectName').value}`;
      projectName.classList.add('projectName');
      projectList.appendChild(projectName);
      document.getElementById('projectName').value = '';
      const projectTab = ProjectTab(projectName);

      projectName.addEventListener('click', projectTab.clearBoard);
      projectName.addEventListener('click', projectTab.addProjectTitle);
      projectName.addEventListener('click', projectTab.addInputs);
      projectName.addEventListener('click', projectTab.addTaskButton);
    });
  }

  return {setDisplayBlock, setDisplayNone, addProjectName};
})();

setDisplay.setDisplayBlock(projectAdd);
setDisplay.setDisplayNone(cancelButton);
setDisplay.setDisplayNone(confirmButton);
setDisplay.addProjectName(confirmButton);
