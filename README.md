# Músico Local

Este repositório contém o código fonte do site **Músico Local**, um projeto que conecta músicos, bandas e instrumentistas a oportunidades de apresentações em eventos, bares, casas de shows e outros espaços. O conteúdo é composto principalmente por páginas HTML estáticas acompanhadas de arquivos CSS, JavaScript e imagens.

## Como executar localmente

Como o site é estático, não é necessário nenhum servidor específico. Você pode abri-lo diretamente em seu navegador ou executar um servidor web simples para facilitar o acesso aos arquivos. Exemplo usando Python:

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd a.MUSICO-LOCAL

# Inicie um servidor local (porta 8000)
python3 -m http.server 8000
```

Depois, basta acessar `http://localhost:8000` no navegador e navegar pelas páginas.

## Estrutura do repositório

```
css/      # Arquivos de estilos
js/       # Scripts JavaScript
images/   # Imagens utilizadas no site
img/      # Outras imagens estáticas
fonts/    # Fontes customizadas
social/   # Ícones e imagens de redes sociais
musicos/  # Conteúdo específico sobre músicos
pr/       # Recursos regionais
```

Algumas páginas principais disponíveis:

- [index.html](index.html) – Página inicial
- [sobre-nos.html](sobre-nos.html) – Informações sobre o projeto
- [contratar.html](contratar.html) – Orientações para contratação de músicos
- [cadastro.html](cadastro.html) – Cadastro de novos artistas
- [estados.html](estados.html) – Lista de estados disponíveis
- [lista-de-artistas.html](lista-de-artistas.html) – Relação de artistas cadastrados
- [blog-two.html](blog-two.html) – Blog do projeto

Outras páginas podem ser encontradas nas subpastas, incluindo conteúdos regionais como `sao-paulo-sp.html`, `rio-de-janeiro-rj.html` e `parana-pr.html`.

## Como contribuir

1. Faça um *fork* deste repositório e crie sua branch de trabalho.
2. Realize as modificações desejadas e adicione testes ou exemplos quando necessário.
3. Envie um *pull request* descrevendo suas alterações.
4. Aguarde a revisão e integração das mudanças.

Sinta-se à vontade para abrir *issues* com dúvidas, sugestões ou problemas encontrados. Toda contribuição é bem-vinda!
