Rails.application.routes.draw do
  # Posts
  get "/posts/latests", to: "posts#latests"
  get "/posts/populars", to: "posts#populars"
  get "/posts/category/:category", to: "posts#get_by_category"
  resources :posts

  resources :users
  resources :comments
  resources :categories
  resources :posts_has_categories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
