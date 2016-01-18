Rails.application.routes.draw do
  devise_for :users
  resources :tasks
  resources :projects
  root to: "application#index"
  get 'partials/projects', to: "projects#index"
end
