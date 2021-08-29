.PHONY: all test clean

dockerhub ?= jalgraves
image_name ?= hubpub
version ?= $(shell jq .version package.json | tr -d '"')

sass:
		sass ${PWD}/src/sass/thehubpub.sass ${PWD}/dist/public/css/style.css

stop:
		docker rm -f $(image_name) || true

prod_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg node_env=production .

dev_build: sass
		docker build \
			-t $(image_name):$(version) \
			--build-arg node_env=development .

start:
		docker run \
			-d \
			--name $(image_name) \
			--restart always \
			-p "3037:3037" \
			-v "${PWD}/dist/public/css:/app/dist/public/css" \
			-v "${PWD}/dist/public/images:/app/dist/public/images" \
			-e CONTACT_API_HOST=172.17.0.6:5012 \
			-e CONTACT_API_PROTOCOL=http \
			-e API_USERNAME=${API_USER} \
			-e API_PASSWORD=${API_PW} \
			$(image_name):$(version)

publish: dev_build
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):$(version)
		docker push $(dockerhub)/$(image_name):$(version)

latest:
		docker tag $(image_name):$(version) $(dockerhub)/$(image_name):latest
		docker push $(dockerhub)/$(image_name):latest
