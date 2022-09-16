import fetch from 'unfetch';

// we use export so that we can be able to consume it anywhere in our app
export const getAllStudents = ()=> fetch('/students');