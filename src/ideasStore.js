import { observable, action, decorate } from 'mobx';

class IdeasStore {
  ideas = [{title: 'Hello'}];
  formData = '';

  addIdea() {
    this.ideas.push({title: this.formData});
  }

  updateFormData(data) {
    this.formData = data;
  }
}

export default decorate(IdeasStore, {
  ideas: observable,
  formData: observable,
  updateFormData: action,
  addIdea: action
});
