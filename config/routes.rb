Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'sessions#home'

  get '/signup' => 'users#new'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  get '/auth/facebook/callback' => 'sessions#fbcreate'


  resources :users
  resources :meal_plans
  resources :meals, only: [:edit, :index, :show ]
  resources :meal_schedules

  resources :meal_plans do
    resources :meal_schedules, only: [:new, :index, :create]
  end

  resources :meals do
    resources :meal_schedules, only: [:new, :index, :create]
  end

  resources :meal_plans do
  resources :likes, only: [:create]
  member do
    post 'like'
  end
end
end
