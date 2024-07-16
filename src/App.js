import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()_+{}|:[]-=";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {
    PasswordGenerator()
  }, [length,numberAllowed,charAllowed, PasswordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className="outline-none px-3 py-0.5 shrink-0 bg-blue-700 text-white">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={5} max={25} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
          <label>
          Length({length})
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() =>{setNumberAllowed((prev) => !prev)}}/>
          <label>
          Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() =>{setCharAllowed((prev) => !prev)}}/>
          <label>Characters</label>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
