.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= thehubpub
version ?= $(shell jq -r .version package.json | tr -d '"')
hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(hash)
	environment = development
else ifeq ($(env), prod)
	image_tag = $(version)
	environment = production
endif

sass:
	sass ${PWD}/src/sass/style.sass ${PWD}/dist/public/css/style.css

build: sass
	docker build \
		--platform linux/x86_64 \
		-t $(image_name):$(image_tag) \
		--build-arg node_env=$(environment) .

publish: build
	docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
	docker push $(dockerhub)/$(image_name):$(image_tag)

latest:
	docker tag $(image_name):$(version) $(dockerhub)/$(image_name):latest
	docker push $(dockerhub)/$(image_name):latest
