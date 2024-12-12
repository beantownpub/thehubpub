.PHONY: all test clean

SHELL := /bin/bash

package:
		helm package .

helm/context:
	kubectl config use-context $(context)

## Install Helm chart
helm/install:
	cd helm/thehubpub && \
		helm upgrade --install $(name) . \
		--namespace $(namespace) \
		--set aws.secretName=${AWS_SECRET_NAME} \
		--set aws.accessKeyId=${AWS_ACCESS_KEY_ID} \
		--set aws.secretAccessKey=${AWS_SECRET_ACCESS_KEY} \
		--set aws.region=${AWS_DEFAULT_REGION} \
		--set env=$(env) \
		--debug

## Install beantown frontend in K8s production cluster
helm/install/production:
	helm upgrade --install $(name) helm/thehubpub/ \
		--kubeconfig="${HOME}"/.kube/$(kubeconfig) \
		--namespace $(namespace) \
		--set image.tag=$(image_tag) \
		--set aws.regionCode=$(region_code) \
		--set env=$(env) \
		--set logLevel=tiny \
		--set istio.enabled=true \
		--set externalSecrets.enabled=true \
		--debug

## Uninstall beantown frontend from K8s cluster
helm/delete:
	kubectl config use-context $(context) && \
	helm uninstall $(name) -n $(namespace)

## Delete Helm release and redeploy
helm/redeploy: helm/delete helm/install

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

## Create chart schema
helm/schema_create:
	cd helm/thehubpub && helm schema-gen values.yaml > values.schema.json
