# Formulários

<ul>
<li><a href="#controll">Controlled vs Uncontrolled</a></li>
<li><a href="#form">React Hook Form</a></li>
</ul>

---------

<h2 id="controll">Controlled vs Uncontrolled</h2>

### Controlled

Manter em tempo real a mudança do estado da aplicação dando mais fluidez a aplicação, menos perfomático

~~~~tsx
export function Home() {
  const [task, setTask] = useState('')

  return (
    <HomeContainer>
          .....
          <TaskInput type="text" id="task" list="taks-suggestion" 
          placeholder="Dê um nome para o seu projeto" 
          onChange={(e) => setTask(e.target.value)}
          value={task}
          />
          ......
        <StartCountdownButton disabled={!task} type="submit">
          .....
    </HomeContainer>
  )
}
~~~~

### Uncontrolled

Atualizar o estado quando for realmente necessário. É mais perfomático. É mais recomendado para aplicações grandes.

~~~~tsx
export function Home() {
  function handleSubmit(){
    event.target.task.value
    ......
  }

  return (
    <HomeContainer>
        <form onSubmit={handleSubmit} action="">
          <TaskInput type="text" id="task" list="taks-suggestion" 
          placeholder="Dê um nome para o seu projeto" 
          onChange={(e) => setTask(e.target.value)}
          value={task}
          />
          ......
        <StartCountdownButton disabled={!task} type="submit">
          .....
    </HomeContainer>
  )
}
~~~~

<h2 id="form">React Hook Form</h2>+

Utilizar o hook que a biblioteca provém para que consigamos recuperar os dados dos input ao submit do formulário.

https://react-hook-form.com/get-started


