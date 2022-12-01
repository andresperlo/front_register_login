import { useState } from "react";

function App() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const token = JSON.parse(localStorage.getItem('token'))
  const handleSubmitBack = () => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        token
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem('token', JSON.stringify(res.token)))
  }


  return (
    <div>
      <input type={'text'} onChange={(e) => setUser(e.target.value)} />
      <input type={'text'} onChange={(e) => setPass(e.target.value)} />
      <button onClick={() => handleSubmitBack()}>Login</button>
    </div>
  );
}

export default App;
