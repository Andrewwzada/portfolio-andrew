# Evolução visual

O projeto existente foi preservado. Os dados profissionais, quatro categorias técnicas, dez certificados, traduções, terminal, projetos e contatos continuam na estrutura original.

## Sistema orbital

O globo principal e a seção técnica compartilham três anéis tridimensionais com velocidades e sentidos diferentes. Os pontos de cada tecnologia pertencem ao mesmo grupo Three.js do respectivo anel. Drei Html mantém as marcas voltadas à câmera. Hover/foco desacelera suavemente o anel, destaca a marca e apresenta descrição. Clique abre painel traduzido, com botão de fechar, Escape e retorno de foco. OrbitControls permite arrastar a cena. Rolagem altera suavemente a orientação do conjunto.

Logos: Devicon v2.17.0 e Simple Icons via CDN. A rede do ambiente de desenvolvimento impediu baixar os SVGs para hospedagem local, portanto o carregamento das marcas depende de acesso a essas CDNs no navegador. Em erro, abreviações preservam a navegação. NoSQL e Redes são categorias: usam símbolos sem atribuir indevidamente uma marca como competência. Docker foi omitido por não constar entre as competências ou estudos confirmados.

## Retrato

`public/assets/fotos/andrew-professional.png` foi produzido por edição real da foto em `fotos`, com blazer escuro, braços cruzados, pose levemente lateral e iluminação de estúdio. PNG RGBA com fundo transparente. A foto original foi mantida. Não há edição externa de imagem pendente. Como toda edição generativa, a semelhança final também deve ser avaliada pelo titular.

## Desempenho e acessibilidade

Cenas carregadas sob demanda via import dinâmico e IntersectionObserver, suspensas fora da área observada ou com aba oculta. DPR limitado a 1 no celular e 1,5 no desktop; antialias desligado em telas pequenas. Reduced motion interrompe órbitas, remove introdução e usa renderização sob demanda. Fallback sem WebGL apresenta grade navegável das tecnologias. Introdução dura 1,1 segundo e não bloqueia conteúdo. Interações acessíveis por teclado e descrições em PT/EN.

## Validação

- Auditoria dos dez certificados originais e cópias por SHA-256 aprovada.
- `npm run typecheck` aprovado. `npm run build` aprovado; Vite alertou sobre o chunk Three.js de aproximadamente 1,14 MB (317 KB gzip), carregado dinamicamente.
- Testes Playwright existentes e novos testes de painel/retrato: execução bloqueada pelo ambiente, que recusa abrir o servidor local (listen EPERM 127.0.0.1:5173).
- Não foram medidos FPS nem confirmadas visualmente as órbitas no navegador neste ambiente. Testar em desktop e celular com WebGL, preferências de movimento reduzido, teclado e acesso às CDNs antes de publicar.
- Nenhuma publicação realizada.
