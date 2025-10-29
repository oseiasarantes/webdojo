# 🧪 Testes Automatizados - WebDojo

Este projeto contém a suíte de **testes automatizados end-to-end (E2E)** da aplicação **WebDojo**, desenvolvida utilizando o [**Cypress**](https://www.cypress.io/).  
Os testes validam o comportamento da aplicação e garantem a qualidade das principais funcionalidades.

---

## 📂 Estrutura do Projeto

A estrutura principal de pastas dentro do diretório `cypress` está organizada da seguinte forma:

```
cypress/
├── e2e/
│   └── ... (arquivos de testes E2E)
│
├── fixtures/
│   ├── cep.json
│   ├── consultoria.json
│   ├── document.pdf
│   └── perfilGithub.json
│
└── support/
    ├── actions/
    │   ├── consultoria.actions.js
    │   └── github.actions.js
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

### 🧩 Descrição das pastas

| Pasta | Descrição |
|-------|------------|
| **e2e/** | Contém os arquivos de testes automatizados (ex: `login.cy.js`, `consultoria.cy.js`). |
| **fixtures/** | Armazena dados estáticos usados nos testes, como JSONs de mock, PDFs e perfis de teste. |
| **support/actions/** | Contém funções reutilizáveis que encapsulam ações comuns na aplicação. |
| **support/commands.js** | Define comandos customizados do Cypress disponíveis globalmente. |
| **support/utils.js** | Funções utilitárias de apoio aos testes. |
| **support/e2e.js** | Configurações globais de suporte aos testes E2E. |

---

## ⚙️ Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Cypress](https://www.cypress.io/)

---

## 🚀 Execução da Aplicação WebDojo

A aplicação **WebDojo** está localizada no mesmo repositório dos testes.  
Para executá-la localmente:

```bash
npm run dev
```

Isso iniciará o servidor local na porta **3000**, servindo os arquivos do diretório `dist`.

---

## 🧭 Execução dos Testes

O projeto possui diferentes scripts configurados no `package.json` para executar os testes Cypress.

### ▶️ Rodar todos os testes

```bash
npm run test
```
Executa toda a suíte de testes E2E com resolução de **1440x900** (desktop).

---

### 🔐 Rodar apenas os testes de login

```bash
npm run test:login
```
Executa somente o arquivo `cypress/e2e/login.cy.js` com viewport de **1440x900** (desktop).

---

### 📱 Rodar os testes de login em modo mobile

```bash
npm run test:login:mobile
```
Executa o mesmo teste de login, mas simulando a resolução de um dispositivo **mobile (414x896)**.

---

## 🧰 Scripts disponíveis

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

---

## 🧠 Boas práticas

- Utilize as **fixtures** para centralizar dados de teste e evitar duplicação.  
- Centralize interações com a UI nos arquivos da pasta `support/actions`.  
- Evite dependências entre testes — cada teste deve ser independente.  
- Execute os testes em diferentes viewports (desktop e mobile) para validar responsividade.  
- Sempre mantenha os **comandos customizados** atualizados no `commands.js`.

---

## 📊 Relatórios e Logs (opcional)

Caso queira integrar relatórios de execução, é possível adicionar ferramentas como:

- [mochawesome](https://github.com/lukejpreston/mochawesome)
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)

---

## 👨‍💻 Contribuição

1. Faça um fork do repositório.  
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. Execute os testes antes de enviar o PR:
   ```bash
   npm run test
   ```
4. Envie seu Pull Request. 🎉

---
