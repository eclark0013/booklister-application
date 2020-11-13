Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :lists, only: [:index, :show, :create, :update, :destroy]
      resources :books, only: [:index, :show, :create, :update, :destroy]
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
