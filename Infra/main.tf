provider "google" {
    credentials = file ("var.google_credentials_path") #Como se trata da credencial da GCP, optei por utilizar variável de ambiente
    project     = DevOpsProject #Aqui é a declaração do ID do seu projeto!
    region      = southamerica-east1-a
}

variable "google_credentials_path" {}

