import React from 'react';
import './App.css';

import { inject, observer } from 'mobx-react';

const App = ({ ideasStore }) => {
  const ideasEls = ideasStore.ideas.map(idea => {
    return <h3 key={idea.title}>{idea.title}</h3>
  });

  function updateData(e) {
    ideasStore.updateFormData(e.target.value)
  }

  function submitIdea() {
    ideasStore.addIdea();
    ideasStore.updateFormData('');
  }

  return (
    <div className="App">
      {ideasStore.ideas.length ? ideasEls : "No ideas yet"}
      <input value={ideasStore.formData} onChange={updateData} type="text" placeholder="Title..."/>
      <button onClick={submitIdea}>Add Idea</button>
    </div>
  );
}

export default inject("ideasStore")(observer(App));
