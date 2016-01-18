Rails.application.routes.draw do
  devise_for :users
  scope :api do
    resources :tasks , defaults: { format: "json" }
    resources :projects, defaults: { format: "json" }
  end
  root to: "application#index"
  get 'partials/projects', to: "projects#index"
end
