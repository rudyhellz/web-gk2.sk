HAML=haml

all: index.html

%.html: %.haml
	$(HAML) $< $@

clean:
	rm -f *.html
