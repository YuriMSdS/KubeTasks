provider "google" {
    credentials = file ("var.google_credentials_path") #Como se trata da credencial da GCP, optei por utilizar variável de ambiente
    project     = DevOpsProject #Aqui é a declaração do ID do seu projeto!
    region      = southamerica-east1-a
}

variable "google_credentials_path" {}

resource "google_container_credentials" "my_cluster" {
    name     = "cluster1"
    location = "southamerica-east1"

    remove_default_node_pool = true

    node_pool {
        machine_type = "n1-standartd-2"
        initial_node_count = 1
    }
}