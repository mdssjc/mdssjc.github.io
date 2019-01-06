    Title: Emacs: Parte I - Instalação
    Date: 2019-01-06T12:00:00
    Tags: emacs, doom, spacemacs, spacevim

Na série _Emacs_ você aprenderá mais sobre o processo de instalação, configuração, pacotes e outras técnicas para melhor utilização do melhor editor de todos os tempos.

Nesta primeira parte será abordado o tema instalação.

<!-- more -->

O [_Emacs_](https://www.gnu.org/software/emacs/ "GNU Emacs") é um incrível ambiente de edição com personalização total, construído sobre um interpretador para _Emacs Lisp_, um dialeto da linguagem de programação _Lisp_ com extensão para edição de texto e código.

## Objetivo

Realizar a instalação e/ou a atualização do _software_ _Emacs_

## Instalando no Windows

No _Windows_ é necessário obter uma versão compilada do _Emacs_ através das seguintes etapas:

Obtenha uma versão no _link_ [Emacs 27](https://alpha.gnu.org/gnu/emacs/pretest/windows/emacs-27 "Emacs 27"), [Emacs 27 PDumper](https://alpha.gnu.org/gnu/emacs/pretest/windows/emacs-27-pdumper "Emacs 27 PDumper") ou [Emacs 26](https://alpha.gnu.org/gnu/emacs/pretest/windows/emacs-26 "Emacs 26").

Descompacte/instale o _Emacs_.

Compactado executar o arquivo `emacs\bin\runemacs.exe`.

Instalado execute o atalho.

Para atualizar:

Obtenha uma nova versão através do procedimento de instalação.

### Versões

Existem três versões, sendo:

* **installer**: disponibiliza um instalador; e
* **no-deps**: possui apenas o _core_ compilado; e
* **vazio**: possui o _core_ e as principais dependências encontradas em ambientes _Unix_.

## Instalando no Linux

O _Linux_ geralmente vem com uma versão no repositório de aplicativos para a instalação, entretanto para construir do código-fonte, execute as seguintes etapas:

Clone o repositório do _Emacs_ no _Github_:

`git clone https://github.com/emacs-mirror/emacs`

Compile e instale o _Emacs_:

```
./autogen.sh all
./configure --with-modules --with-all
sudo make install
```

Para atualizar:

`git pull`

E repita a etapa anterior.

Informações sobre a instalação no arquivo `INSTALL`.
