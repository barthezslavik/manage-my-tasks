Rails.application.routes.draw do
  devise_for :users
  
  scope :api do
    resources :tasks , defaults: { format: "json" }
    resources :projects, defaults: { format: "json" }
  end

  #resources :projects
  root to: "application#index"
  get '*partials', to: "application#partials"
end
