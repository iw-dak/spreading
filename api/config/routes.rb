Rails.application.routes.draw do
  # Users
  post '/login', to: 'users#login'
  get "/users/:limit/:offset", to: "users#filtered"

  # Posts
  get "/posts/latests", to: "posts#latests"
  get "/posts/populars", to: "posts#populars"
  get "/posts/get-latest-posts-by-category/:category", to: "posts#get_latest_by_category"
  get "/posts/:limit/:offset", to: "posts#filtered"
  get "/posts/count", to: "posts#count"

  # Users
  get "/comments/:limit/:offset", to: "comments#filtered"

  # Resources
  resources :posts
  resources :users
  resources :comments
  resources :categories
  resources :tags
  resources :posts_has_categories
  resources :newsletters
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
