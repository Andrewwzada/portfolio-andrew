# Andrew Nicolas Farrapo — Portfólio

Aplicação React 19 + TypeScript + Vite, com Tailwind CSS 4, Framer Motion, Three.js, React Three Fiber, Drei e Lucide. Layout Dark Tech Premium em português e inglês. Projeto local, sem publicação realizada.

## Executar

Na pasta existente `C:\Users\Andrew\Desktop\portfolio-andrew-1`, abra um terminal com Node.js 22 LTS (22.12 ou posterior) e npm:

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite (normalmente http://localhost:5173).

```bash
npm run typecheck
npm run build
npm run preview
```

`dist/` contém a versão compilada. Nenhum servidor de aplicação é necessário em produção.

## Configuração dos dados

- `src/data/profile.ts`: contatos, GitHub, fotografia, currículo, situação e datas da graduação, competências e experiências. Campos vazios de contatos não geram links.
- `profile.education.status.pt` / `.en` e `.dates` ficam vazios até confirmação. A interface não afirma conclusão nem data de formatura.
- Fotografia: copie uma foto autorizada para `public/assets/` e configure `profile.photo` com `import.meta.env.BASE_URL + 'assets/sua-foto.jpg'`. O avatar abstrato aparece enquanto esse campo estiver vazio.
- Currículo: use `public/assets/curriculo.pdf` e o mesmo prefixo `BASE_URL` em `profile.resume`.
- WhatsApp: configure uma URL completa `https://wa.me/` com o número confirmado. E-mail recebe somente o endereço; LinkedIn recebe a URL completa.
- Contato: `profile.contactEndpoint` fica vazio e o envio desabilitado. Configure um endpoint HTTPS real que aceite POST multipart e retorne HTTP 2xx apenas após aceitar a mensagem. O código apresenta erro em falhas e só apresenta sucesso após resposta positiva. Configure validação, antispam, CORS e política de dados no serviço escolhido. Não coloque segredos no frontend.
- `src/data/certificates.ts`: metadados e caminhos dos certificados; não traduza títulos oficiais dos documentos.
- Novas experiências podem ser adicionadas ao array `experience`.
- Projetos: adicione entradas reais a `src/data/projects.ts`, com nome, descrição e funcionalidades nos dois idiomas. `repository`, `demo` e `image` são opcionais; botões aparecem apenas quando suas URLs forem informadas. O portfólio desta pasta é o único projeto confirmado. O link geral do GitHub não é apresentado como repositório específico.

## Certificados e preservação

Os dez originais em `certificados/` foram preservados. A aplicação serve cópias idênticas em `public/assets/certificados/`, porque o Vite publica arquivos de `public/`. As quatro imagens Inside são usadas diretamente. Nos seis PDFs, PDF.js renderiza a primeira página original em canvas, sob demanda, sem reconstruir o certificado. O modal amplia essa página; o link abre o documento original completo, incluindo o conteúdo programático.

```bash
npm run audit:certificates
npm run sync:certificates
```

A auditoria compara os originais com os hashes registrados em `src/data/original-files.json` e com suas cópias públicas. Ao adicionar documentos, revise os metadados e o manifesto conscientemente; o sincronizador apenas copia, sem alterar os originais.

Auditoria documental em `CERTIFICADOS.md`. Treinamentos JNCIA e Microsoft não são apresentados como certificações oficiais por exame.

## Animações, acessibilidade e desempenho

O globo usa geometria procedural, com rotação, interação, conexões, ícones flutuantes e partículas reduzidas no celular. O laboratório utiliza diagrama SVG e controles HTML, sem um segundo canvas WebGL. A antiga caixa conceitual foi substituída pela vitrine de projetos. Os componentes 3D e PDF.js são carregados em chunks separados. Os canvas 3D são montados somente perto da área visível; DPR limitado a 1,5. PDFs aguardam proximidade da tela para renderizar a primeira página. O site inclui fallback visual para WebGL indisponível, animações reduzidas com `prefers-reduced-motion`, navegação por teclado, modal com retorno e contenção de foco, Escape para fechar, abas com setas e formulário rotulado. A órbita pausa com hover ou foco. O terminal usa uma lista fechada de comandos e nunca executa comandos do sistema.

Fontes do sistema evitam requisições externas. Para futuros arquivos de fotografia, prefira WebP/AVIF com dimensões adequadas. A galeria mantém as imagens dos certificados originais.

## Testes

```bash
npx playwright install chromium
npm run test:e2e
```

A suíte cobre desktop, celular e preferência de movimento reduzido: largura da página, idioma, terminal, filtros, modal, integridade da URL PDF e navegação das abas por teclado.

**Validação desta atualização:** os dez originais e suas cópias passaram na auditoria SHA-256. A análise de sintaxe TS/TSX/JS passou. A primeira instalação encontrou bloqueio `EPERM` ao executar o binário do esbuild; a validação completa depende da instalação das dependências e dos navegadores. Consulte `VISUAL-UPGRADE.md` para o resultado final das tentativas de build e testes. Análise de sintaxe não substitui checagem de tipos nem teste visual.

## Interações adicionadas

- Laboratório: sete equipamentos ilustrativos com seleção por clique, toque ou teclado; detalhes bilíngues. Nenhum endereço de cliente ou dado de ambiente real.
- Soft Skills: seis grupos expansíveis preservam as doze competências originais.
- Terminal: `help`, `about`, `skills`, `experience`, `education`, `certificates`, `projects`, `contact`, `clear`. Setas percorrem histórico; Tab completa prefixos únicos e permite sair do campo normalmente quando não houver correspondência única. Links levam às seções. Não executa comandos do sistema.
- O formulário permanece desabilitado enquanto não houver endpoint real em `profile.contactEndpoint`. Não há envio funcional configurado nesta base.

## Publicação futura — somente quando autorizada

### Vercel

Importe o repositório, selecione Vite, use `npm run build` e diretório de saída `dist`. Este projeto usa âncoras, sem necessidade de regras para rotas SPA.

### GitHub Pages

Compile e publique o conteúdo de `dist/` por um workflow GitHub Actions ou processo de deploy escolhido. `base: './'` em `vite.config.ts` permite servir também em um subdiretório de repositório. Publique o conteúdo de `dist`, não a pasta raiz. Não há workflow de publicação automática neste projeto.

Antes da publicação, confirme a situação acadêmica e os contatos; revise a apresentação nos tamanhos 390, 768 e 1440 px. Após ter um domínio definitivo, adicione URL canônica, `og:url` e imagem de compartilhamento autorizada no `index.html`. Os metadados atuais não inventam domínio nem fotografia.
