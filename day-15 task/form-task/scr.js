let foods=['chicken','briyany'];
foods.forEach((val)=>{
  const opt= document.createElement('option')
  opt.textContent= val
  opt.value=val
  document.getElementById('food').appendChild(opt)
})