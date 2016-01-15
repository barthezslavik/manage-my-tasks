Rails.application.routes.draw do
  #match "*path" => "layouts#index", via: [:get, :post]
  devise_for :users
  resources :tasks
  resources :projects
  #root 'main#index'
  root :to => "layouts#index"
end
