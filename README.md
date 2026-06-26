# JCL Empilhadeiras

Site institucional e catálogo de equipamentos da **JCL Empilhadeiras** — venda e
assistência técnica de empilhadeiras a diesel, elétricas (lítio), retráteis,
patoladas, paleteiras e transpaleteiras em Ubá - MG.

## Tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)

## Desenvolvimento

```bash
npm install      # instala as dependências
npm run dev      # inicia o servidor de desenvolvimento (porta 8080)
npm run build    # gera o build de produção
npm run preview  # serve o build localmente
npm run lint     # roda o linter
npm run test     # roda os testes (Vitest)
```

## Estrutura

- `src/pages/` — páginas (Home, Equipamentos, Categoria, Produto, Sobre, Contato)
- `src/components/` — componentes reutilizáveis
- `src/data/products.ts` — catálogo de produtos e categorias
- `src/assets/` — imagens e logos
