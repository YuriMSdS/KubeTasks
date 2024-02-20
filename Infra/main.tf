provider "google" {
    credentials = file ("path/para/sua/credencial.json") #Como se trata da credencial da GCP, optei por utilizar variável de ambiente
    project     = DevOpsProject #Aqui é a declaração do ID do seu projeto!
    region      = southamerica-east1-a
}