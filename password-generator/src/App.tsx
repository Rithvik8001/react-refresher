import { useState, useCallback, useEffect } from "react";

export default function App() {
  const [length, setLength] = useState<number>(6);
  const [numbersAllowed, setNumbersAllowed] = useState<boolean>(false);
  const [SpecialCharacters, setSpecialCharacters] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) {
      str += "0123456789";
    }
    if (SpecialCharacters) {
      str += "+!@#$%^&*()";
    }

    for (let i = 0; i < length; i++) {
      const randomPass = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomPass);
    }
    setPassword(pass);
  }, [length, numbersAllowed, SpecialCharacters]);

  useEffect(() => {
    generatePassword();
    console.log(password);
  }, [length, numbersAllowed, SpecialCharacters]);

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert(`password is succesfully copied to clipboard`);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-br from-red-300 to-blue-300 flex items-center justify-center">
      <div className="w-[500px] bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Random Password Generator
        </h1>
        <div className="bg-gray-100 rounded-2xl p-3 shadow-inner flex items-center">
          <input
            value={password}
            readOnly
            type="text"
            className="flex-1 bg-transparent outline-none px-2 text-black"
          />
          <button
            className="ml-4 px-7 py-3 bg-sky-200 text-black font-extrabold rounded-xl hover:bg-sky-300 transition "
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="text-gray-600 font-medium">Length</label>
            <input
              onChange={(e) => setLength(Number(e.target.value))}
              value={length}
              type="range"
              className="accent-blue-500 w-40"
              min={6}
              max={15}
            />
            <span className="text-gray-700 font-semibold">{length}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="numbers"
                className="accent-blue-500 h-5 w-5"
                checked={numbersAllowed}
                onChange={() => {
                  setNumbersAllowed((prevValue) => !prevValue);
                }}
              />
              <label htmlFor="numbers" className="text-gray-600">
                Include Numbers
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                checked={SpecialCharacters}
                onChange={() => {
                  setSpecialCharacters((prevValue) => !prevValue);
                }}
                type="checkbox"
                id="specialChars"
                className="accent-blue-500 h-5 w-5"
              />
              <label htmlFor="specialChars" className="text-gray-600">
                Include Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
