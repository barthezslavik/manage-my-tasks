Rails.application.routes.draw do
  devise_for :users
  resources :tasks

  resources :projects

  root 'tasks#index'
end
