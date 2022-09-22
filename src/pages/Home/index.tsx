import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5, "O tempo precisar ser de no mínimo 5 minutos").max(60, "O tempo precisar ser de no máximo 60 minutos")
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const {register, handleSubmit, watch, reset} = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  function handleCreateNewCycle(data : NewCycleFormData) {
    console.log(data)
    reset();
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" list="taks-suggestion" placeholder="Dê um nome para o seu projeto"
          {...register('task')}
          
          />

          <datalist id='taks-suggestion'>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="60" step={5} min={5} 
          {...register('minutesAmount', {valueAsNumber : true})}
          />

          <span>minutos.</span>
          </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled={!isSubmitDisabled} type="submit">
          <Play size={24}/>Começar
        </StartCountdownButton>
        </form>
    </HomeContainer>
  )
}
