let asdf = createStore()
let data= [
    { movies: ['Rambo', 'Jaws', 'Love Story']},
    { guests: ['Ned', 'Jed', 'Ted', 'Mary', 'Lulu', 'Fran']},
    { entrees: ['steak', 'fish', 'veggies']},
    { desserts: ['ice cream', 'cake', 'pudding']}
  ]

function loadData(store, objArr){
  for(const el of objArr){
    let key = Object.keys(el)[0]
    let values = el[Object.keys(el)[0]]
    store[key] = values
  }
}

function showStore(store){
  let keys = Object.keys(store)
  let storeHTML = '<div class="storeData">'
  for(let i = 0; i<keys.length; i++){
    let key = keys[i]
    let values = store[key]
    let html = `<h4>${key}</h4><p>${values}</p>`
    storeHTML += html 
  }
  storeHTML += '</div>'
  document.getElementById('main').innerHTML = storeHTML
}

function createStore() {
  const listeners = [];
  const data = {};
 
  function emitChange() {
    listeners.forEach(listener => listener());
  }
 
  function subscribe(callback) {
    listeners.push(callback);
  }
 
  function setData(key, value) {
    data[key] = value;
    emitChange();
  }
 
  function getData() {
    return data;
  }
 
  return {
    subscribe,
    setData,
    getData,
  };
}

loadData(asdf, data)
showStore(asdf)