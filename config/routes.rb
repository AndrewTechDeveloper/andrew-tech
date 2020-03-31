Rails.application.routes.draw do
  namespace :api do
    resources :blogs, only: [:index, :show, :create, :update]
  end
end
