#! /bin/bash
# MDS - CSS Script
#
# Script de construção do arquivo (CSS - Cascading Style Sheet)
#
# autor: Marcelo dos Santos
#

# Dependências:
# - Dart Sass
# - CSS Nano
#
# chmod +x make.sh

echo "Gerando CSS..."
sass template.sass css-base.css

#echo "Compactando CSS..."
#cssnano < css-base.css > custom.css
cat css-base.css > custom.css

echo "Removendo arquivos temporários..."
rm -v css-base.css

echo "Concluído!"
