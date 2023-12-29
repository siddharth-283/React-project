import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() => { 
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)//ye passeord ko copy karne ke liye use kearte hai agar ui se copy karna hai.
  }, [password])

  //useCallback memorise krne ke liye kam ata hai..
  const passwordGnerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+={}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  //useCallback optimaztaion ka kam karta hai auar uska kam hai catche memorey me rakho 


  //jab hmara page lode hota hai to ye apne ap pheli bar run ho jata hai.
  //useEffect kya karata hai ki agar usme kuch bhi chhd chhad ho to use change kar do
  //run karne ka goal yha se achive ho rha hai
  useEffect(() => {
    passwordGnerator()
  }, [length, numberAllowed, charAllowed, passwordGnerator])

  return (
    <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center mb-2">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-1 shadow-2xl">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }} //e kis liye hai range ki value ko change karne ke liye hai agar ham range ko badaye to vaha par value change hone chahiye
            //onChange ham directly nhi de sakte kyu nhi de skate kyu ki sath me
            // mujhe ek event bhi fire karna pade ga aur vo event jab mai pass
            // karunga to vo actully me vo event ko call kare paye ga setLength
            // property ko aur setLength ke anadar ab ek value pass karna ho ga jo
            // `e.target.value` to ab ky ho ga ab vo state ke ander value change ho gi
            // to abb ham use value ko change kar skate hai
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="characterInput"
            className="cursor-pointer"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
