# Plano — Etapa 1: Layout JCL Empilhadeiras

Vou refazer todo o layout do site seguindo o design aprovado, mantendo a estrutura de rotas atual (`/`, `/produtos`, `/produtos/:slug`) e adicionando novas rotas para categorias e contato. Conteúdo textual real entra na Etapa 2 — agora foco é estrutura visual, componentes e responsividade.

## 1. Sistema de Design (base)

Atualizar `src/index.css` e `tailwind.config.ts` com os tokens corretos:
- `--yellow: 45 100% 50%` (#F5B800 / #FFC107)
- `--dark: 0 0% 5%` (#0d0d0d), `--dark-nav: 0 0% 10%` (#1a1a1a)
- `--gray-light: 0 0% 95%` (#f2f2f2)
- Tipografia: manter Inter, mas adicionar **Barlow Condensed** (ou similar bold condensado) para headings em CAIXA ALTA.
- Criar utility class `.section-title` com a linha amarela curta de accent (`::after` 60px x 4px amarelo).
- Botão primário padrão: amarelo + texto preto bold + cantos arredondados (rounded-md) + ícone seta.

## 2. Componentes Globais

### Header (refatorado em 2 variantes)
- `TopBar.tsx` (refeito): faixa preta com logo branco à esquerda + 3 blocos info (horário, telefone+email, endereço) com ícones amarelos circulares à direita.
- `NavBar.tsx` (refeito): faixa branca (na home) ou preta (internas) com menu HOME / EQUIPAMENTOS▾ / SOBRE NÓS / CONTATO. Dropdown de Equipamentos com as 6 categorias. Item ativo em amarelo. Botão "FALE CONOSCO" amarelo com ícone WhatsApp à direita. Hambúrguer mobile.
- Prop `variant: "light" | "dark"` para alternar fundo.

### Footer (refeito)
- 4 colunas (logo+social / Links Rápidos / Serviços / Contato) + mapa Google embedado à direita.
- Headings com linha accent amarela.

### Botões reutilizáveis
- `<YellowButton>`: amarelo sólido + seta.
- `<WhatsAppButton>` (já existe — manter flutuante).
- `<ScrollTopButton>`: botão flutuante amarelo "↑ TOPO" nas páginas internas.

## 3. Páginas

### HOME (`/`) — `src/pages/Index.tsx`
Refazer seções na ordem:
1. **Hero** — bg da fachada JCL + overlay escuro à esquerda, título "JCL" (amarelo) / "EMPILHADEIRAS" (branco) gigante, accent line, subtítulo, CTA "FALE COM UM ESPECIALISTA →".
2. **CategoriesSection** (refeito) — fundo claro, marca d'água lateral, título em 2 linhas, 3 cards (Elétrica/Diesel/Retrátil) com ícone circular amarelo, imagem, descrição, botão amarelo. Barra preta CTA "VER TODOS OS EQUIPAMENTOS" abaixo.
3. **InstitutionalSection** (refeito) — "Sobre Nós" resumido, imagem com recorte diagonal + borda amarela à direita, 3 blocos com ícone circular, e barra preta de 4 diferenciais.
4. **TrustSection** (refeito) — "Empresas que contam com a experiência da JCL", faixa amarela + card branco com grade 3-col de logos placeholder.
5. **MissionVisionValues** (NOVO) — accordion Missão/Visão/Valores, header amarelo claro quando aberto.
6. **CTABanner** (refeito) — bloco escuro "PRECISA DE AJUDA PARA ESCOLHER..." + botão FALE CONOSCO.
7. **Footer**.

Remover da home: `StatsStrip`, `DifferentialsSection` (absorvida no Institutional), `ServicesSection`, `ContactSection` (vira página própria).

### EQUIPAMENTOS (`/produtos`) — `src/pages/Catalog.tsx`
- Hero próprio com fundo escuro de armazém.
- Grade **3×2** das 6 categorias clicáveis (cards com imagem + nome bold + linha accent). Cada uma leva a `/produtos/categoria/:slug`.
- Manter a listagem completa com filtros como segunda seção (ou mover para a página de categoria).

### CATEGORIA (`/produtos/categoria/:slug`) — NOVA `src/pages/Category.tsx`
- Breadcrumb `Home > Equipamentos > {Categoria}`.
- Título + accent + descrição.
- Grade 4-col de cards de produto (imagem, nome+accent, Capacidade, Elevação, botão outline VER DETALHES →).

### PRODUTO (`/produtos/:slug`) — `src/pages/ProductDetail.tsx` (refeito)
- Layout 2 colunas: galeria à esquerda (thumbs verticais + imagem grande), à direita título+descrição+2 botões grandes (outline COTAÇÃO POR WHATSAPP / sólido INICIE UMA COTAÇÃO).
- Bloco ficha com pares label/valor.
- Seção DESCRIÇÃO DO PRODUTO com accent line.
- Botão flutuante ↑ TOPO.

### CONTATO (`/contato`) — NOVA `src/pages/Contact.tsx`
- 2 colunas: esquerda mapa Google embedado + endereço/telefone/email; direita formulário INICIE UMA COTAÇÃO (Nome, Email, WhatsApp+Telefone, Estado+Cidade, Mensagem, botão ENVIAR).
- Header com texto introdutório + ícones Instagram/Facebook.

### SOBRE NÓS (`/sobre`) — placeholder simples
- Reusa InstitutionalSection + MissionVisionValues como página dedicada.

## 4. Rotas (App.tsx)

```
/                          → Index (home)
/produtos                  → Catalog (hub categorias)
/produtos/categoria/:slug  → Category (lista produtos)
/produtos/:slug            → ProductDetail
/sobre                     → About
/contato                   → Contact
*                          → NotFound
```

## 5. Detalhes Técnicos

- **Marca d'água/elementos geométricos**: SVG inline + Tailwind absolute positioning, sem assets externos.
- **Mapa**: `<iframe src="https://www.google.com/maps/embed?..."` apontando para "R. Cel. Otaviano da Rocha, 1110, Ubá MG".
- **Logos de clientes**: placeholders em `<div>` cinza com nome (você sobe imagens depois).
- **Imagem da fachada / armazém para hero**: gerar via `imagegen` (fast tier) se não houver — placeholders semânticos enquanto isso.
- **Responsivo**: cards empilham (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4`), TopBar info esconde no mobile (já está), menu mobile com hambúrguer (já existe — ajustar items).
- **Acessibilidade**: aria-labels em todos os CTAs, min-height 44px mantido.

## 6. Conteúdo nesta etapa

Uso textos da especificação onde fornecidos (cards de equipamento, diferenciais, CTA, contato). Onde a Etapa 2 tem o texto real (Sobre Nós blocos, Missão/Visão/Valores, descrições de produto), uso **Lorem-style placeholder marcado** (`[TEXTO ETAPA 2]`) para você revisar.

## 7. Não-mexer

- `src/data/products.ts` (mantém os 8 produtos JCL atuais — só ajusto categoria slugs se necessário).
- Lógica de filtros do catálogo atual fica preservada dentro de Category.tsx.

---

Confirma que posso seguir? Se sim, executo tudo de uma vez. Etapa 2 (revisão de conteúdo textual real, depoimentos, descrições finais) fica para o próximo turno.
