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
  get "/posts/to_approve", to: "posts#to_approve"
  put "/posts/update-views/:id", to: "posts#update_views"
  
  # Comments
  get "/comments/latests", to: "comments#latests"
  get "/comments/:limit/:offset", to: "comments#filtered"
  get "/comments/count", to: "comments#count"
  get "/comments/to_approve", to: "comments#to_approve"
  get "/comments/approved/:post", to: "comments#approved"

  # Tags
  get "/tags/:limit/:offset", to: "tags#filtered"
  get "/tags/count", to: "tags#count"
  
  # Votes
  get "/votes/status", to: "votes#status"

  # Resources
  resources :posts
  resources :users
  resources :comments
  resources :categories
  resources :tags
  resources :posts_has_categories
  resources :newsletters
  resources :votes
end
