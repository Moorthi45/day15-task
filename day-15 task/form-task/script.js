   const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
    let arr=['Male','Female','Others'];
    arr.forEach((val)=>{
     const opt= document.createElement('option')
     opt.textContent=val
     opt.value= val
     document.getElementById('validationCustom04').appendChild(opt)
    });
    