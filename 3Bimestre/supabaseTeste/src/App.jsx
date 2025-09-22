
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
function App() {

  const [tarefas, setTarefas] = useState ([])

  const URL = "https://kncsgkxwfdgzhsvjruyv.supabase.co"
  const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuY3Nna3h3ZmRnemhzdmpydXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NDAyMjAsImV4cCI6MjA3NDExNjIyMH0.kGGj63WoTlvJFmHhFsbdBCY5JagRjmQkH5dCFLQYKRQ"

  const supabase = createClient(URL, KEY)

  const consultaTarefas =async () => {
    const {data, error} = await supabase
        .from('tarefas')
        .select('*')
        .order('create_at',{ascending:true})
    setTarefas(data)

  }


  return (
    <>
    <h1>Olá mundo</h1>
    <button onClick={consultaTarefas}>
      Ok
      </button>
    <br />
    <br />

    <div>
      {tarefas.map}
    </div>
    </>
  )
}

export default App
