# Reducers

## Diferença entre Hooks, Context, Reducer

*   Hook: É uma função que permite a gente acessar as funcionalidades do React dentro dela, funcionalidades como o estado, outros hooks como useEffect, useCallback, useMemo, useContext.

    Ou seja, o Hook é uma forma de a gente reaproveitar uma lógica específica e compartilhar funcionamento entre componentes, sem precisar reescrever o código toda vez. Por isso criamos um hook para a Context, para não precisar ficar importando a Context e o useContext toda vez. Mas apesar de compartilhar funcionalidade, ele não compartilha estado.

*   Context: É uma forma de repassar e compartilhar dados entre diversos componentes. Apesar de parecer com a ideia de Hook, como dito acima o Hook não compartilha estado, mas a Context, por possuir um provider, irá compartilhar essa mesma informação entre diversos componentes. É ideal quando você quer a mesma informação em vários componentes distintos.

*   Reducer: É uma alternativa pro useState e é legal utilizar ele quando temos muita complexidade na regra de alteração do estado, muitas formas de alterá-lo. Ele ajuda a gente a separar a nossa regra de alteração de estado de forma mais desacoplada do restante do código, e se algum dia precisarmos trocar a regra de alteração desse estado, apenas precisariamos trocar no reducer.