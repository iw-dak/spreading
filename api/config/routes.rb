Rails.application.routes.draw do
  resources :users
  resources :posts
  resources :comments
  resources :categories
  resources :posts_has_categories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
