.PHONY: all test clean


name ?= thehubpub
image ?= hubpub
port ?= 3037
tag ?= $(shell grep 'appVersion:' Chart.yaml | cut -f 2 -d' ')
SHELL := /bin/bash

ifeq ($(env),dev)
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
else ifeq ($(env),prod)
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
endif

package:
		helm package .

helm/context:
	kubectl config use-context $(context)

## Install Helm chart
helm/install/dev: helm/context
	cd helm/thehubpub && \
		helm upgrade --install $(name) . \
		--namespace $(namespace) \
		--set aws.secretName=${AWS_SECRET_NAME} \
		--set aws.accessKeyId=${AWS_ACCESS_KEY_ID} \
		--set aws.secretAccessKey=${AWS_SECRET_ACCESS_KEY} \
		--set aws.region=${AWS_DEFAULT_REGION} \
		--set env=$(env) \
		--debug

## Run Helm template
template:
	helm template . \
		--name-template=$(name) \
		--namespace $(namespace) \
		--set global.env=$(env) \
		--debug

## Forward port to service
helm/port_forward:
		kubectl port-forward --namespace $(namespace) svc/$(name) $(port):$(port)

stop_pf:
		../scripts/stop_port_forward.sh $(port)
