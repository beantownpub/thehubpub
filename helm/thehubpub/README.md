# thehubpub

![Version: 0.1.12](https://img.shields.io/badge/Version-0.1.12-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.1.12](https://img.shields.io/badge/AppVersion-0.1.12-informational?style=flat-square)

The Hub Pub site deployment

## Source Code

* <https://github.com/beantownpub/thehubpub>

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| aws.accessKeyId | string | `""` |  |
| aws.region | string | `""` |  |
| aws.secretAccessKey | string | `""` |  |
| aws.secretName | string | `""` |  |
| containerPort | int | `3037` |  |
| env | string | `"dev"` |  |
| image.name | string | `"thehubpub"` |  |
| image.pullPolicy | string | `"Always"` |  |
| image.repository | string | `"jalgraves/thehubpub"` |  |
| image.tag | string | `""` |  |
| istio.enabled | bool | `false` |  |
| regionCode | string | `""` |  |
| replicaCount | int | `1` |  |
| resources.limits.memory | string | `"1Gi"` |  |
| resources.requests.cpu | string | `"50m"` |  |
| resources.requests.memory | string | `"100Mi"` |  |
| serviceAccount.annotations | object | `{}` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.name | string | `""` |  |

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v1.11.0](https://github.com/norwoodj/helm-docs/releases/v1.11.0)