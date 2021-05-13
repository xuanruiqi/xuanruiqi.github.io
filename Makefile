.PHONY: clean

SASS = sass

all: styles.css

styles.css: styles/app.scss styles/_variables.scss
	$(SASS) $< $@

clean:
	rm -rf *.css *.map
