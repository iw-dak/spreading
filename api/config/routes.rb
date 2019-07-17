Rails.application.routes.draw do
  # Users
  post '/login', to: 'users#login'
  get "/users/:limit/:offset", to: "users#filtered"
  get "/users/count", to: "users#count"

  # Posts
  get "/posts/latests", to: "posts#latests"
  get "/posts/populars", to: "posts#populars"
  get "/posts/get-latest-posts-by-category/:category", to: "posts#get_latest_by_category"
  get "/posts/:limit/:offset", to: "posts#filtered"
  get "/posts/count", to: "posts#count"

  # Comments
  get "/comments/:limit/:offset", to: "comments#filtered"
  get "/comments/count", to: "comments#count"

  # Tags
  get "/tags/:limit/:offset", to: "tags#filtered"
  get "/tags/count", to: "tags#count"

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
