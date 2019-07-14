Rails.application.routes.draw do
  # Posts
  get "/posts/latests", to: "posts#latests"
  get "/posts/populars", to: "posts#populars"
  get "/posts/get-latest-posts-by-category/:category", to: "posts#get_latest_by_category"
  get "/posts/:limit/:offset", to: "posts#filtered"
  get "/comments/:limit/:offset", to: "comments#filtered"
  get "/users/:limit/:offset", to: "users#filtered"
  
  # Resources
  resources :posts
  resources :users
  resources :comments
  resources :categories
  resources :tags
  resources :posts_has_categories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
