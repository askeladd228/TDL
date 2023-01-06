const projectInput = document.querySelector('.inputProject');
const projectAdd = document.querySelector('.addProject');
const cancelButton = document.querySelector('.cancel');
const confirmButton = document.querySelector('.confirm');
const projectList = document.querySelector('.projectList');

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
    });
  }

  return {setDisplayBlock, setDisplayNone, addProjectName};
})();

setDisplay.setDisplayBlock(projectAdd);
setDisplay.setDisplayNone(cancelButton);
setDisplay.setDisplayNone(confirmButton);
setDisplay.addProjectName(confirmButton);
