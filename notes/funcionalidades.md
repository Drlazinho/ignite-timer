# Funcionalidades da Aplicação

## Reduzindo Countdown

Foi utilizado o a função diffenceInSecond da bilbioteca `date-fns`, para que a contagem fosse mais fidedigna

O `diffenceInSecond`, nessa aplicação, pegamos o tempo real, reduzido pelo tempo ciclo activo em que foi criado. O useEffect vai retornar a diferença desse tempo, ao ínves de criamos a contagem pura usando apenas o setInterval, já que o setInterval tem chances de devolver menos tempo do que deveria ser.

~~~~tsx
// home/index.ts

import { differenceInSeconds } from 'date-fns';


useEffect(() => {
  if (activeCycle) {
    setInterval(() => {
      setAmountSecondPassed(differenceInSeconds(new Date(), activeCycle.startDate),
      )
    }, 1000)
  }
}, [activeCycle])
~~~~

Componentes especificas de uma página podem ficar separado na pasta da página.

---------
### Prop Drilling

O Prop Drilling é um termo utilizado para quando temos propriedades que estão se repassando em diversas camadas da nossa árvore de componentes.

#### Problema
Props Drilling --> Quando tem Muitas propriedades APENAS para comunicação entre componentes

#### Solução
Context API ==> Permite compartilharmos informações entre VÁRIOS componentes ao mesmo tempo.