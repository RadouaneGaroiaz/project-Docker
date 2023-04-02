provider "azurerm" {
  skip_provider_registration = "true"
  features {}

  subscription_id = "846c8665-4538-4dc3-8cbb-48fd7e8e26d7"
  tenant_id = "41011335-ab5f-4019-9d22-4c44d8b1b52f"
  client_id = "8349b818-39f5-4931-9720-3b036823b94c"
  client_secret = "G2y8Q~zhJNlxwQ5wEDNC7LaUtY5pn6AsxKjsMcYB"
}

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.0.0"
    }
  }
}