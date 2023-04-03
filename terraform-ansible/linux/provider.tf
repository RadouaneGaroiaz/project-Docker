provider "azurerm" {
  skip_provider_registration = "true"
  features {}

  subscription_id = ""
  tenant_id = ""
  client_id = ""
  client_secret = ""
}

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.0.0"
    }
  }
}
