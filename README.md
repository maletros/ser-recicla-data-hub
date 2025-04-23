
# Ser Recicla - Sistema de Aquisição de Dados

Sistema de aquisição de dados desenvolvido para o Projeto Ser Recicla da Unama, como parte da iniciativa para a COP 30 em Belém.

## 🌍 Sobre o Projeto

Este sistema foi desenvolvido para a Semana Ubíqua como parte do **Desafio 1: Sistema de Aquisição de Dados do Projeto Ser Recicla**. O objetivo é criar uma solução tecnológica que apoie a gestão da coleta e monitoramento de resíduos recicláveis nas unidades da Unama, incentivando a participação das turmas na entrega de materiais como alumínio, vidro, pano e PET.

## 🚀 Funcionalidades

- **Registro de Entregas**: Interface para registrar informações sobre os materiais recicláveis entregues, incluindo:
  - Quantidade (em Kg)
  - Tipo de resíduo (alumínio, vidro, pano, PET)
  - Turma
  - Curso
  - Semestre
  - Turno
  - Unidade

- **Dashboard Analítico**: Visualização de dados em tempo real com:
  - Total reciclado por tipo de material
  - Comparativo entre turmas/unidades
  - Metas de reciclagem atingidas
  - Gráficos de evolução semanal

- **Documentação da API**: Referência completa dos endpoints RESTful disponíveis para integração.

## 💻 Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Tailwind CSS
- **Gestão de Estado**: React Context API
- **Visualização de Dados**: Recharts
- **Formulários**: React Hook Form, Zod
- **UI Components**: Shadcn UI

## 🔧 Como Executar o Projeto

1. Clone este repositório:
```bash
git clone [URL_DO_REPOSITORIO]
```

2. Instale as dependências:
```bash
cd ser-recicla-data-hub
npm install
```

3. Execute a aplicação:
```bash
npm run dev
```

4. Acesse a aplicação no navegador:
```
http://localhost:8080
```

## 🔍 Estrutura do Projeto

- `/src/components`: Componentes reutilizáveis da interface
- `/src/context`: Contexto React para gerenciamento de estado
- `/src/data`: Dados simulados e mockups
- `/src/pages`: Páginas principais do aplicativo
- `/src/types`: Definições de tipos TypeScript
- `/src/lib`: Utilitários e funções auxiliares

## ⚙️ API RESTful

A documentação completa da API está disponível na rota `/api-docs` do aplicativo. Os principais endpoints são:

- `GET /api/entradas`: Lista todas as entregas registradas
- `POST /api/entradas`: Registra uma nova entrega
- `GET /api/estatisticas`: Retorna estatísticas compiladas

## 📊 Simulação de Banco de Dados

Atualmente o sistema utiliza armazenamento local (localStorage) para simular a persistência de dados. Em um ambiente de produção, deve-se implementar a conexão com um banco de dados real como PostgreSQL ou MySQL.

## 🔒 Autenticação

A versão atual é um protótipo funcional e não implementa autenticação. Para um ambiente de produção, recomenda-se adicionar um sistema de autenticação de usuários.

## 🤝 Contribuições

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adicionando nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request
