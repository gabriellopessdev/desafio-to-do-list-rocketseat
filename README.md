# To-Do List App

Este projeto é uma aplicação de lista de tarefas (To-Do List) desenvolvida com **React** e **TypeScript**, que permite ao usuário adicionar, marcar como concluída e remover tarefas da lista.

## Funcionalidades

- Adicionar uma nova tarefa.
- Marcar/desmarcar uma tarefa como concluída.
- Remover uma tarefa da lista.
- Contador de tarefas concluídas e pendentes.
- Design responsivo utilizando Tailwind CSS.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática.
- [Vite](https://vitejs.dev/) - Ferramenta de build para projetos frontend modernos.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização.
- [UUID](https://www.npmjs.com/package/uuid) - Biblioteca para geração de IDs únicos.

## Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) instalados em sua máquina.

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute o projeto:**

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível no endereço: `http://localhost:3000`.

## Estrutura do Projeto

```
src/
│
├── components/
│   ├── Header.tsx      # Componente de cabeçalho
│   ├── HeaderTasks.tsx # Componente de cabeçalho das Tarefas
│   ├── Input.tsx       # Componente para adicionar tarefas
│   └── Task.tsx        # Componente para exibir e gerenciar tarefas
│
├── App.tsx             # Componente principal da aplicação
├── main.tsx           # Ponto de entrada da aplicação
└── index.css           # Arquivo de estilos (Tailwind CSS)
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito por [Gabriel Lopes](https://github.com/gabriellopessdev)
```

### Instruções para o GitHub:

1. Coloque este conteúdo no arquivo `README.md` na raiz do seu projeto.
2. Suba as mudanças no seu repositório GitHub com os seguintes comandos:

```bash
git add README.md
git commit -m "Adiciona README"
git push origin main
```
