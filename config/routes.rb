Rails.application.routes.draw do
  root to: 'static_page#root'

  resources :notes, defaults: { format: :json }

end