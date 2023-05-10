import './CheckoutForm.css'
import { useState } from "react";

const CheckoutForm =({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        //  <div className="Container">        
        //     <form onSubmit={handleConfirm} className="Form">
        //         <label className="Label">
        //             Nombre
        //             <input
        //                 className="Input"
        //                 type="text"
        //                 value={name}
        //                 onChange={({ target }) => setName(target.value)}
        //             />
        //         </label>
        //         <label className="Label">
        //             Telefono
        //             <input
        //                 className="Input"
        //                 type="text"
        //                 value={phone}
        //                 onChange={({ target }) => setPhone(target.value)}
        //             />
        //         </label>
        //         <label className="Label">
        //             Email
        //             <input
        //                 className="Input"
        //                 type="email"
        //                 value={email}
        //                 onChange={({ target }) => setEmail(target.value)}
        //             />
        //         </label>
        //         <div className="Label">
        //             <button type="submit" className="Button">Crear Orden</button>
        //         </div>
        //     </form>
        // </div>
        // <div className="Container">
            <div className="Container d-flex justify-content-center">
  <form onSubmit={handleConfirm} className="Form">
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Nombre
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Telefono
      </label>
      <input
        type="text"
        className="form-control"
        id="phone"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
    </div>
    <div className="mb-3">
      <button type="submit" className="btn btn-primary">
        Crear Orden
      </button>
    </div>
  </form>
</div>
    )
}

export default CheckoutForm