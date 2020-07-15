Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users do
        resources :book_lists
        resources :lists
        resources :books
      end
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
