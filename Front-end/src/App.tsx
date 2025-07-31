import Form from "./components/Form"

function App() {
  return (
    <div className="border-y-indigo-200 min-h-screen min-w-full flex flex-col-reverse items-center justify-center">
      <div className=" w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <h1 className="font-bold text-[2rem] text-gray-600">Login</h1>
          <Form />
           <p><a href="#">Cadastra-se</a></p>
      </div>
    </div>
  )
}

export default App
