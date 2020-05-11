Rails.application.routes.draw do
  namespace :api do
    resources :blogs, only: [:index, :show, :create]
    resources :tags, only: [:index, :create]
  end
end
