
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

- **API RESTful**: API completa para integração com outros sistemas:
  - Endpoints para consulta e registro de entregas
  - Documentação interativa disponível em `/api-docs`
  - Autenticação e autorização via Supabase

## 💻 Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Visualização de Dados**: Recharts
- **UI Components**: Shadcn UI
- **API**: REST com Supabase

## 🔧 Como Executar o Projeto

1. Clone este repositório
2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Execute a aplicação:
\`\`\`bash
npm run dev
\`\`\`

4. Acesse no navegador:
\`\`\`
http://localhost:8080
\`\`\`

## 📊 Estrutura do Banco de Dados

### Tabela: entregas
- id (UUID, PK)
- quantidade (DECIMAL)
- tipo_residuo (TEXT)
- turma (TEXT)
- curso (TEXT)
- semestre (TEXT)
- turno (TEXT)
- unidade (TEXT)
- created_at (TIMESTAMP)

### Tabela: metas
- id (UUID, PK)
- tipo_residuo (TEXT)
- quantidade_meta (DECIMAL)
- created_at (TIMESTAMP)

## 🤝 Como Contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das alterações
4. Faça push para a branch
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.
