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
------

<h2 id="form">React Hook Form</h2>+

Utilizar o hook que a biblioteca provém para que consigamos recuperar os dados dos input ao submit do formulário.

https://react-hook-form.com/get-started

-----
<h2 id="form">Validando formulários</h2>

Bibliotecas de validação de form

https://github.com/jquense/yup - YUP

https://joi.dev/api/?v=17.6.1 - JOI

https://zod.dev/ - ZOD

Todas tem suas próprias qualidades. Foi aplicado o ZOD

O React-Hook-Form integra com essas bibliotecas, instalando:

`npm i @hookform/resolvers`

No arquivo que usar o validador de form, deve especificar na importação qual validador ira utilizar 

~~~~tsx
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'
~~~~

Deve se especificar que tipo de dado o zod validara, neste caso, o objeto. E validamos os inputs da aplicação, configurando o tipo, o min, o max, e a mensagem caso dê inválido.

**src/pages/home/index.tsx**
~~~~tsx
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5, "O tempo precisar ser de no mínimo 5 minutos").max(60, "O tempo precisar ser de no máximo 60 minutos")
})

export function Home() {
  const {register, handleSubmit, watch} = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })
~~~~
