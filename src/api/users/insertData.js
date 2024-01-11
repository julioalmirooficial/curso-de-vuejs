export default async (e, dataForm) => {
    e.preventDefault();
    if(dataForm.name.trim().length < 4) {
      alert('error de nombre')
      return
    }
    if(dataForm.email.trim().length < 4) {
      alert('error de correo')
      return
    }
    if(!dataForm.email.includes('@')) {
      alert('error de correo')
      return
    }
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(dataForm)
    });
    const data = await response.json();
    if (data.mensaje === 'Registro creado con éxito') {
      alert('Registro creado');
    }
  };