## KubeTasks
Visando meu aprimoramento na área de DevOps, busquei desenvolver uma aplicação completa na qual eu desenvolvi a aplicação em si, arquitetei a infra e o processo de automatização

## Visão Geral
Neste projeto utilizei Docker para virtualizar minhas aplicações e Kubernetes para gerenciar meus contêineres, o cluster está alocado na GCP e o app é uma API REST para uma ToDoList utilizando Node.JS, para integração do sistema desenvolvi uma pipeline no gitlab.

## Tecnologias utilizadas:
    Node.JS
    Docker
    Kubernetes
    GCP
    Git
    Terraform


## Estrutura do Projeto
Organização do projeto:

```txt
.
├── app/                   # Código da aplicação
│   ├── index.js
│   ├── Dockerfile
├── infra/                 # Configurações de Infraestrutura (Terraform, Kubernetes)
│   ├── main.tf
│   ├── deployment.yaml
│   ├── service.yaml
|   ├──.gitlab-ci.yml         # Configuração do GitLab CI/CD
├── .env                   # Arquivo para variáveis de ambiente (não versionar)
└── README.md              # Documentação do Projeto
```

## Pré-requisitos
Node.js, Docker, Terraform, conta na GCP, Git


## Build
>Construção da Imagem

    docker build -t registry.gitlab.com/seuprojeto/nome-da-aplicacao .

>Configuração do Kubernetes


    kubectl apply -f infra/deployment.yaml
    kubectl apply -f infra/service.yaml

>Execução Local //Como rodar a aplicação localmente para fins de desenvolvimento

    npm install
    npm start

## GitLab CI/CD
O projeto utiliza o GitLab CI/CD para automação. O estágio de build cria e envia a imagem do Docker para o registro. O estágio de deploy utiliza o Kubernetes para implantar a aplicação.

## Contribuição
Fiquem à vontade para contribuir com o projeto! Seja quaisquer correções, melhorias e principalmente um front end para esta aplicação!

>Instruções para colaborar com o projeto abaixo:

    Faça um fork do projeto
    
    Crie uma branch para a sua contribuição (git checkout -b feature/nova-feature)
    
    Faça commits das suas alterações (git commit -am 'Adiciona nova feature')
    
    Faça um push para a branch (git push origin feature/nova-feature)
    
    Abra um pull request
