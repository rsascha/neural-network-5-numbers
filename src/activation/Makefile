.PHONY: build 

build: generate-svg clean

generate-svg: 
	pdflatex relu-function.tex
	pdf2svg relu-function.pdf relu-function.svg

	pdflatex sigmoid-function.tex
	pdf2svg sigmoid-function.pdf sigmoid-function.svg

clean:
	rm -f *.aux *.log *.pdf 
