#! /bin/bash
# MDS - CSS Script
#
# Script de construção do arquivo (CSS - Cascading Style Sheet).
#
# autor: Marcelo dos Santos
#

# Ruby:
#   gem install sass
# NodeJS:
#   npm install -g cssnano cssnano-cli
# chmod +x make.sh

echo "Gerando CSS..."
sass template.scss css-base.css

#echo "Compactando CSS..."
#cssnano < css-base.css > custom.css
cat css-base.css > custom.css

echo "Removendo arquivos temporários..."
rm -r .sass-cache
rm -v css-base.css
rm -v css-base.css.map

echo "Concluído!"
