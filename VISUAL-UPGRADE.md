# Evolução do portfólio — outubro de 2026

Alterações feitas sobre a aplicação React/TypeScript/Vite existente. Nenhum deploy, push ou commit foi realizado.

## Implementação

- `src/App.tsx`: integração das seções, aplicações práticas nas quatro categorias técnicas, transição de categoria, tecnologias da experiência existente, fotografia com carregamento assíncrono e estado de envio acessível.
- `src/components/InfrastructureLab.tsx`: substitui o segundo globo por uma topologia SVG com sete dispositivos selecionáveis por teclado, clique e toque. Mostra competências de servidores, diretório, virtualização, backup, conectividade, Wi-Fi, suporte e monitoramento. Conteúdo PT/EN, sem IPs, credenciais ou dados de clientes. É uma representação conceitual, não um ambiente real em execução. Não foram adicionadas alegações de domínio de Zabbix sem confirmação no perfil.
- `src/data/projects.ts` e `src/sections/Projects.tsx`: vitrine com dados tipados e centralizados, tecnologias, funcionalidades e campos opcionais de imagem, repositório e demonstração. Somente o portfólio presente nesta pasta foi cadastrado. Não foi deduzida uma URL específica do repositório a partir do perfil GitHub.
- `src/components/SoftSkills.tsx`: seis grupos expansíveis preservam as doze competências e suas descrições nos dois idiomas, com estados acessíveis e animação de altura/opacidade.
- `src/components/Scene.tsx`: preserva o globo principal e sua rotação/arraste/seleção; adiciona malha esférica, conexões luminosas, partículas e flutuação independente das tecnologias. Reduz partículas no celular. Remove geometria e fonte da antiga caixa conceitual de projetos.
- `src/components/Visual.tsx`: remove o modo da caixa antiga; mantém carregamento sob demanda, fallback WebGL e animações existentes.
- `src/components/Terminal.tsx`: comandos `help`, `about`, `skills`, `experience`, `education`, `certificates`, `projects`, `contact`, `clear`; consulta os dados reais centralizados, mantém histórico com setas, rascunho, Tab para prefixos únicos, digitação, rolagem interna e links para as seções. Lista fechada de comandos, sem execução de sistema.
- `src/sections/Certificates.tsx`: decodificação assíncrona das imagens; preserva todos os filtros, arquivos, prévias sob demanda, modal e links originais.
- `src/styles/index.css`: laboratório, vitrine, Soft Skills compactas, iluminação discreta, estados de foco/validação, timeline, animações e regras responsivas e de movimento reduzido.
- `tests/portfolio.spec.ts` e `tests/orbit.spec.ts`: atualização da expectativa de projetos, cobertura do laboratório, retrato preservado, doze competências, histórico/autocompletar/formação e projeto confirmado.
- `README.md`: documentação atualizada. `package-lock.json`: versões resolvidas para instalação reproduzível; nenhuma dependência nova adicionada ao `package.json`.

## Conteúdo preservado

Foto `public/assets/fotos/andrew-professional.png`, dados profissionais, empresa/cargo/período, graduação e ausência de datas acadêmicas não confirmadas, dez certificados originais e suas cópias públicas, links existentes, navegação, idiomas e preferências de movimento. As marcas do globo continuam usando as CDNs previamente configuradas e possuem fallback em caso de falha.

## Contato

`profile.contactEndpoint` está vazio na base recebida. O formulário não consegue enviar mensagens nessa condição e permanece explicitamente desabilitado. A validação nativa de nome, e-mail e mensagem foi mantida; há estados visuais de preenchimento. Quando um serviço real for configurado, o código envia POST multipart e só mostra confirmação após HTTP positivo. O envio real não pôde ser testado sem esse serviço. Nenhuma credencial foi adicionada.

## Validação

- Auditoria SHA-256 dos dez certificados originais e cópias: aprovada.
- Análise sintática de 23 arquivos TS/TSX/JS: aprovada.
- Dependências instaladas com scripts de instalação desativados após bloqueio inicial do executável esbuild (`EPERM`). Uma cópia de validação em `/tmp/portfolio-validation` recebeu o mesmo código e dependências do lockfile.
- `npm run build` na cópia temporária e na pasta original: aprovado, incluindo TypeScript. Vite 6.4.4 gerou os arquivos de produção. Há aviso de chunk Three.js com aproximadamente 1,16 MB (322 KB gzip); continua separado e carregado sob demanda. PDF.js também permanece separado.
- Os 14 arquivos de `public/` foram conferidos no `dist/` por SHA-256.
- `npm run test:e2e -- --list`: 27 casos reconhecidos, em desktop, celular e movimento reduzido.
- Playwright: execução tentada, bloqueada antes dos testes porque o ambiente não permite abrir o servidor (`listen EPERM 127.0.0.1:5173`). Nenhum teste de navegador deve ser considerado aprovado por esta execução.
- Responsividade foi implementada em CSS, mas aparência final, comportamento WebGL, console, teclado e desempenho gráfico ainda precisam ser verificados no navegador local. Não houve medição de FPS ou métricas de carregamento.
- Configuração Vite/Vercel preservada: build `npm run build`, saída `dist`, navegação por âncoras; não foram adicionadas rotas ou serviços de backend. Deploy na Vercel não foi executado.

## Visualizar e verificar localmente

Use Node.js 22 e npm atualizado. No terminal da pasta do projeto:

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

```bash
npm run typecheck
npm run build
npm run audit:certificates
npx playwright install chromium
npm run test:e2e
```

A suíte cobre desktop, celular e movimento reduzido. Confira também tablet em 768 px, seleção dos sete dispositivos, expansão/recolhimento dos seis grupos, troca PT/EN, globo com e sem WebGL, modal de certificados e comandos do terminal. O formulário deve continuar desabilitado até a configuração de um serviço real.
