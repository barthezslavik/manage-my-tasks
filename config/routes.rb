Rails.application.routes.draw do
  resources :tasks

  resources :projects

  root 'tasks#index'
end
