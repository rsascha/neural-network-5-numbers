.PHONY: build 

build: generate-svg clean

generate-svg: 
	pdflatex forward-pass.tex
	pdf2svg forward-pass.pdf forward-pass.svg

	pdflatex backpropagation.tex
	pdf2svg backpropagation.pdf backpropagation.svg

clean:
	rm -f *.aux *.log *.pdf 


