Rails.application.routes.draw do
  devise_for :users
  resources :tasks
  resources :projects
  root 'application#index'
  get '*path' => 'application#index'
end
