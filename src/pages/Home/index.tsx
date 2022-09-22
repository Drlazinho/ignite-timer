import { Play } from 'phosphor-react';
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles';
export function Home() {
  return (
    <HomeContainer>
        <form action="">
          <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" list="taks-suggestion" placeholder="Dê um nome para o seu projeto" />

          <datalist id='taks-suggestion'>
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="60" step={5} min={5} max={60}/>

          <span>minutos.</span>
          </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24}/>Começar
        </StartCountdownButton>
        </form>
    </HomeContainer>
  )
}
